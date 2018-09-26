// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/on","dojo/touch","dojo/sniff","./utils/TooltipUtil","./FlowListDefaultItemRenderer","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(e,t,i,s,n,r,l,o,d,a,h){var c=e([a,h],{templateString:"<div data-dojo-attach-point='listDiv' class='esriGEFlowList esriGENonSelectable'></div>",idProperty:"value",labelProperty:"label",selectedIndex:-1,selectedItem:null,items:null,store:null,defaultItemRendererClass:d,itemRenderer:null,itemClass:null,itemClassSelected:null,keepScrollPosition:!1,allowRepetitiveSelection:!0,selectOnMouseDown:!1,selectionValidator:null,allowManualSelection:!0,stopMouseEventPropagation:!0,hasSelectableItems:!0,autoDetectUrlsInLabels:!1,_addedWrappers:null,_clickHandlers:null,_valueOnCreation:null,_isCreated:!1,postCreate:function(){this.inherited(arguments),this._clearHandlers(),this._setUpItemRenderer(),o.autoTooltip(this.domNode),this._isCreated=!0,this._valueOnCreation?this._setValueAttr(this._valueOnCreation):this.refresh()},_setUpItemRenderer:function(){this.itemRenderer||(this.itemRenderer=new this.defaultItemRendererClass),this.itemClass&&(this.itemRenderer.itemClass=this.itemClass),this.itemClassSelected&&(this.itemRenderer.itemClassSelected=this.itemClassSelected)},_getValueAttr:function(){return this.selectedItem&&this.selectedItem[this.idProperty]},_setValueAttr:function(e){var t=this;if(!this._isCreated)return void(this._valueOnCreation=e);var i=this.items||this.store&&this.store.data;i&&i.some(function(i){if(i[t.idProperty]==e)return t.setSelectedItem(i),!0})},_scrollTopMemo:0,_memoScroll:function(){this._scrollTopMemo=this.listDiv.scrollTop},_applyScrollFromMemo:function(){this.listDiv.scrollTop=this._scrollTopMemo||0},_setItemsAttr:function(e){this.setItems(e)},setItems:function(e,t){if(this.keepScrollPosition&&this._memoScroll(),this.clear(),this.items=e,!t){if(!this.items||!this._isCreated)return void this._checkIfStillSelected();this._addItems(e),this._checkIfStillSelected(),this.keepScrollPosition&&this._applyScrollFromMemo()}},_checkIfStillSelected:function(){if(-1!=this.selectedIndex||this.selectedItem){var e=this;this._addedWrappers&&this._addedWrappers.some(function(t,i){return e.__isSelectedFunction(t,i)})||(this.selectedIndex=-1,this.selectedItem=null)}},refresh:function(){this.store?this.setStore(this.store):this.setItems(this.items)},setSelectedItem:function(e,t){this.selectedItem=e,this.selectedIndex=-1,this.refresh(),t&&this._dispatchChangeEvent()},setSelectedIndex:function(e,t){this.selectedIndex=e,this.selectedItem=null,this.refresh(),t&&this._dispatchChangeEvent()},getItemNode:function(e){var t;return this._addedWrappers&&this._addedWrappers.some(function(i){if(i.itemRef===e)return t=i.__itemPresentation,!0}),t},getItemByNode:function(e){var t;return this._addedWrappers&&this._addedWrappers.some(function(i){if(i.__itemPresentation===e)return t=i.itemRef,!0}),t},__selectedPresentation:null,_addItems:function(e){this._addedWrappers=this._addedWrappers||[];var i=this;e.forEach(function(e){var s=t.mixin({},e);s.itemRef=e,i.__addWrapper(s)})},__addWrapper:function(e){var t=this._addedWrappers.length,i=this.itemRenderer.createPresentation(e.itemRef,this.__isSelectedFunction(e,t),this.listDiv,this,e);if(i){i.index=t,i.item=e.itemRef,e.__itemPresentation=i,this.__isSelectedFunction(e,t)&&(this.selectedItem=e.itemRef,this.selectedIndex=t,this.__selectedPresentation=i),this._addClickHandler(i),this._addedWrappers.push(e);var n=this._addedWrappers.length-1;s.add(i,"listItem_"+n),s.add(i,"listItem_"+(n%2==0?"even":"odd"))}},__isSelectedFunction:function(e,t){if(!this.hasSelectableItems)return!1;if(t==this.selectedIndex)return!0;if(e.itemRef===this.selectedItem)return!0;if(e.itemRef&&this.selectedItem){var i=e.itemRef[this.idProperty],s=this.selectedItem[this.idProperty];return void 0!==i&&i===s}return!1},_selectionValidatorDefault:function(e){return!!e&&!e.isSeparator&&!1!==e.enabled},_addClickHandler:function(e){var t=this;this.allowManualSelection&&this._clickHandlers.push(n(e,l("touch")?this.selectOnMouseDown?r.press:r.release:this.selectOnMouseDown?"mousedown":"click",function(i){t.stopMouseEventPropagation&&i.stopPropagation(),(t.allowRepetitiveSelection||t.__selectedPresentation!=e)&&(t.selectionValidator?!1!==t.selectionValidator(e.item):t._selectionValidatorDefault(e.item))&&(t.__selectedPresentation&&t.itemRenderer.selectPresentation&&t.itemRenderer.selectPresentation(t.__selectedPresentation,!1),t.itemRenderer.selectPresentation&&t.itemRenderer.selectPresentation(e,t.hasSelectableItems),t.__selectedPresentation=e,t.selectedIndex=e.index,t.selectedItem=e.item,t._dispatchChangeEvent())}))},_dispatchChangeEvent:function(){this.onChange({type:"change",selectedIndex:this.selectedIndex,selectedItem:this.selectedItem,value:this.selectedItem&&this.selectedItem[this.idProperty]})},clear:function(){this.__selectedPresentation=null,this._addedWrappers=this._addedWrappers||[],this._addedWrappers&&this._addedWrappers.forEach(function(e){e.destroyPresentation&&e.destroyPresentation()}),this._addedWrappers.length=0,this.listDiv&&i.empty(this.listDiv),this._clearHandlers()},_clearHandlers:function(){this._clickHandlers=this._clickHandlers||[],this._clickHandlers.forEach(function(e){e.remove()}),this._clickHandlers.length=0},scrollToItem:function(e){var t=this.getItemNode(e);t&&(this.listDiv.scrollTop=t.offsetTop)},store:null,onDemandModeLoadStep:1e3,onDemandPopulateLimit:1e3,onDemandPopulatePeriod:200,_setStoreAttr:function(e){this.setStore(e)},setStore:function(e){if(this.keepScrollPosition&&this._memoScroll(),this.clear(),this.store=e,this.idProperty=e&&e.idProperty,!this.store||!this._isCreated)return void this._checkIfStillSelected();this._loadNextPart(),this._checkIfStillSelected(),this.keepScrollPosition&&this._applyScrollFromMemo();var t=this;this.own(n(this.listDiv,"scroll",function(){var e=t._addedWrappers[t._addedWrappers.length-30],i=e?e.__itemPresentation:null;i&&i.offsetTop<t.listDiv.scrollTop&&t._loadNextPart()}))},_loadNextPart:function(){if(this.store&&this.store.query().length!=this._addedWrappers.length){var e=this.store.query(null,{start:this._addedWrappers.length,count:this.onDemandModeLoadStep});if(delete e.total,this._addItems(e),e.length&&this._addedWrappers.length<this.onDemandPopulateLimit){var t=this._loadNextPart.bind(this);setTimeout(t,this.onDemandPopulatePeriod)}}},onChange:function(e){},destroy:function(){this.clear(),this.inherited(arguments)}});return c.itemRenderers={DefaultItemRenderer:d},c});