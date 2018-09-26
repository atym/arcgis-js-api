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

define(["dojo/_base/lang","dojo/dom-construct","dojo/on","dojo/when","dojox/mvc/Templated","dgrid/List","../../../declare","../utils/TooltipUtil","dojo/text!./templates/ShoppingCart.html","dojo/i18n!../../../nls/jsapi","./VariableUtil","./VariableToggle"],function(t,i,e,n,s,o,a,l,h,r,c,p){return r=r.geoenrichment.dijit.ShoppingCart,a("esri.dijit.geoenrichment.ShoppingCart",s,{nls:r,templateString:h,variables:null,selection:null,allowToggles:!0,allowMoveButtons:!1,allowEditButtons:!1,allowReplaceButtons:!1,_list:null,_content:null,postCreate:function(){this.inherited(arguments);var i=r.selectedVars,s=i.split(/\s+/),a=s.length-1;if(a<2)i=s.join("<br/>");else{for(var l=i.length-a,h=s[0].length,c=0,p=1;p<a;p++){var d=h+s[p].length;Math.abs(2*h-l)>Math.abs(2*d-l)&&(c=p),h=d}i=s.slice(0,c+1).join("&nbsp;")+"<br/>"+s.slice(c+1).join("&nbsp;")}this.selectedVariablesLabel.innerHTML=i,this.selection=[],this._content=[],this._list=new o({renderRow:t.hitch(this,this._renderVariable)},this.divList),e(this.divList,"click, touchend",t.hitch(this,this._stopPropagation)),this._updateLabel(),this.divOuter.style.display="none";var g=this;this.watch("selection",function(){n(g.variables.synchronize(),t.hitch(g,g._onSelectionChanged))})},_updateLabel:function(){this.divCounter.innerHTML=this._content.length.toString()},_onSelectionChanged:function(){for(var t=[],i=Math.min(this._content.length,this.selection.length),e=0;e<i;e++){var n=this.selection[e],s=this._content[e];if(!s.hash[n])break;s.group.value=n,t.push(s)}for(i=this.selection.length,e=t.length;e<i;e++){n=this.selection[e],s={hash:{}},s.group=c.getToggleGroup(this.variables,n,s.hash),n=s.group.states&&this.allowToggles?s.group.states.ids[0]:s.group.value;var o=this.variables.get(n);s.title=o&&o.alias,t.push(s)}this._content=t,this._updateLabel()},_toggleList:function(t){this._stopPropagation(t),"none"===this.divOuter.style.display?this._displayList():this._hideList()},_stopPropagation:function(t){t.stopPropagation&&t.stopPropagation()},_displayList:function(){this.refresh(),this.divShoppingCartOpener.innerHTML="&#x25b2;",this.divOuter.style.display=""},_hideList:function(){this.divShoppingCartOpener.innerHTML="&#x25bc;",this.divOuter.style.display="none"},_hideListOnLeave:function(t){if("none"!=this.divOuter.style.display){for(var i=t.relatedTarget,e=!0;i;){if(i===this.label||i===this.divOuter){e=!1;break}i=i.parentNode}this._onMouseLeave(e)}},_onMouseLeave:function(t){t&&this._hideList()},_renderVariable:function(n){function s(){i.create("div",{class:"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"&nbsp;"},o)}var o=i.create("div",{class:"ShoppingCartRow"}),a=i.create("div",{class:"ShoppingCartRowCloser ShoppingCartRowFloatEnd"},o);if(l.setTooltipToNode(a,r.removeVariable),e(a,"click",t.hitch(this,this._onRemove,n)),s(),n.group.states&&this.allowToggles){var h=new p(n.group,i.create("div",{class:"dijitInline ShoppingCartRowFloatEnd"},o));e(h,"change",t.hitch(this,this._onToggleChange,h,n)),s()}if(this.allowEditButtons&&this._canEditData(n)){var c=i.create("div",{class:"ShoppingCartRowEditButton ShoppingCartRowFloatEnd"},o);l.setTooltipToNode(c,r.editVariable),e(c,"click",t.hitch(this,this._onEditData,n)),s()}if(this.allowReplaceButtons){var d=i.create("div",{class:"ShoppingCartRowReplaceButton ShoppingCartRowFloatEnd"},o);l.setTooltipToNode(d,r.replaceVariable),e(d,"click",t.hitch(this,this._onReplaceData,n)),s()}if(this.allowMoveButtons){var g=i.create("div",{class:"dijitInline ShoppingCartRowFloatEnd upDownArrowsBlock"},o);if(this._content.indexOf(n)>0){var u=i.create("div",{class:"dijitInline upArrow"},g);e(u,"click",t.hitch(this,this._onMove,n,!0))}if(this._content.indexOf(n)<this._content.length-1){var v=i.create("div",{class:"dijitInline downArrow"},g);e(v,"click",t.hitch(this,this._onMove,n,!1))}s()}var _=n.group.states&&this.allowToggles?n.group.states.ids[0]:n.group.value,f=this.variables.get(_);return i.create("div",{class:"TrimWithEllipses ShoppingCartRowLabel",innerHTML:f&&f.alias||""},o),o},_onRemove:function(t){var i=this.selection.slice(),e=this._content.indexOf(t);i.splice(e,1),this._content.splice(e,1),this.set("selection",i),this.refresh()},_onToggleChange:function(t,i){i.group.value=t.value;var e=this.selection.slice();e[this._content.indexOf(i)]=t.value,this.set("selection",e)},_onMove:function(t,i){var e=this.selection.slice(),n=this._content.indexOf(t),s=e[n];e.splice(n,1),this._content.splice(n,1),e.splice(i?n-1:n+1,0,s),this._content.splice(i?n-1:n+1,0,t),this.set("selection",e),this.refresh()},_canEditData:function(t){return!1},_onEditData:function(t){},_onReplaceData:function(t){},refresh:function(){this._list.refresh(),this._list.renderArray(this._content),this._updateLabel(),this.divEmpty.style.visibility=this._content.length?"hidden":"visible"},isOpen:function(){return"none"!==this.divOuter.style.display}})});