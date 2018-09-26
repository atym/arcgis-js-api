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

define(["../Color","../kernel","./_EventedWidget","./_Tooltip","./ColorPicker/colorUtil","./ColorPicker/HexPalette","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/a11yclick","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/keys","dojo/on","dojo/query","dojo/sniff","dojo/dom-style","dojo/i18n!../nls/jsapi","dojo/text!./ColorPicker/templates/ColorPicker.html","./HorizontalSlider","dijit/form/RadioButton","dijit/form/TextBox","dijit/form/ToggleButton","dojo/NodeList-dom"],function(t,e,s,o,i,r,a,l,n,h,c,d,u,_,p,g,C,w,f,S,v){var m="no-color",b=c([s,a,l,o],{baseClass:"esriColorPicker",css:{container:"esriContainer",collapsed:"esriCollapsed",collapsible:"esriCollapsible",collapseIcon:"esriCollapseIcon",colorControls:"esriColorControls",header:"esriHeader",footer:"esriFooter",middle:"esriMiddle",swatch:"esriSwatch",swatchRow:"esriSwatchRow",swatchEmpty:"esriSwatchEmpty",swatchPreview:"esriSwatchPreview",swatchTransparencyBackground:"esriSwatchTransparencyBackground",focusedSwatch:"esriSwatch--focused",palette:"esriPalette",paletteOptions:"esriPaletteOptions",paletteToggle:"esriPaletteToggle",label:"esriLabel",hexInput:"esriHexInput",recent:"esriRecent",suggested:"esriSuggested",selected:"esriSelected",disabled:"esriDisabled",section:"esriSection",displayNone:"esriDisplayNone",transparencySlider:"esriTransparencySlider",alt:"esriAlt",downArrowIcon:"esri-icon-down"},declaredClass:"esri.dijit.ColorPicker",labels:S.widgets.colorPicker,templateString:v,constructor:function(e,s){e=e||{},this._colorInstance=new t,this._brightsPalette=new r({colors:e.palette}),this._pastelsPalette=new r({colors:this._toPastels(this._brightsPalette.get("colors"))}),this._activePalette=this._brightsPalette,this._swatchCreator=e.swatchCreator||this._createSwatch,this._swatches={},this._recentSwatches={},this._suggestedSwatches={}},buildRendering:function(){this.inherited(arguments),this._createPalettes();var t=this.css.swatch,e=this.css.swatchEmpty;this._noColorSwatchNode=_.create("div",{"aria-label":this.labels.noColorTooltip,className:t+" "+e,tabIndex:0,role:"button"},this.dap_hexInput.domNode,"after")},postCreate:function(){this.inherited(arguments),this._addListeners(),this._selectColor(),this.dap_hexInput.intermediateChanges=!0,this.dap_transparencySlider.intermediateChanges=!0,this.createTooltips([{node:this.dap_paletteContainer,label:this.labels.paletteTooltip},{node:this.dap_hexInput,label:this.labels.hexInputTooltip},{node:this._noColorSwatchNode,label:this.labels.noColorTooltip},{node:this.dap_paletteToggle,label:this.labels.moreColorsTooltip}])},_activePalette:null,_autoCollapseHandle:null,_brightsPalette:null,_colorInstance:null,_noColorSwatchNode:null,_pastelsPalette:null,_previousColor:null,_swatchCreator:null,_swatches:null,_swatchNavigationIndex:null,_transparencyLabels:function(){return"["+[0,50,100].map(function(t){var e=S.widgets.colorPicker.percent;return d.replace(e,{percent:t})}).map(function(t){return"'"+t+"'"})+"]"}(),collapsed:!1,_setCollapsedAttr:function(t){this.collapsible&&(u.toggle(this.domNode,this.css.collapsed,t),this._set("collapsed",t),t?this.domNode.setAttribute("aria-expanded","true"):(this.domNode.setAttribute("aria-expanded","false"),this.dap_paletteContainer.focus()))},collapsible:!1,_setCollapsibleAttr:function(t){if(u.toggle(this.domNode,this.css.collapsible,t),this.dap_header.tabIndex=t?0:-1,t){if(this.domNode.setAttribute("role","button"),this.domNode.setAttribute("aria-haspopup","menu"),this.domNode.setAttribute("aria-controls",this.dap_colorControls.id),this.domNode.setAttribute("aria-expanded",(!this.collapsed).toString()),!this._autoCollapseHandle){g(this.domNode,"keydown",function(t){var e=this.collapsed&&t.keyCode!=p.ENTER&&t.keyCode!=p.SPACE,s=!this.collapsed&&t.keyCode!=p.ESCAPE;if(!e&&!s){if(t.preventDefault(),t.keyCode===p.ESCAPE)return this.dap_header.focus(),void this.set("collapsed",!0);this.set("collapsed",!1),this.dap_paletteContainer.focus()}}.bind(this));var e=g.pausable(this.ownerDocument,"click",function(t){var e=this.domNode.contains(t.target);this.collapsed||e||this.set("collapsed",!0)}.bind(this));this._autoCollapseHandle=e,this.own(e)}this._autoCollapseHandle.resume()}else this.domNode.removeAttribute("role"),this.domNode.removeAttribute("aria-haspopup"),this.domNode.removeAttribute("aria-controls"),this.domNode.removeAttribute("aria-expanded"),this._autoCollapseHandle&&this._autoCollapseHandle.pause();this._set("collapsible",t)},color:null,_getColorAttr:function(){return this.color===m?m:new t(this.color)},_setColorAttr:function(e,s){if(e=e||m,s=s||void 0===s,!this.required){if(e===m)return this._set("color",m),this._previousColor=m,this._disableTransparencySlider(),this._clearSelection(),this._silentlyUpdateHexInput(m),this._updatePreviewSwatch(e),u.add(this._noColorSwatchNode,this.css.selected),void(s&&this.emit("color-change",{color:m}));this._enableTransparencySlider(),u.remove(this._noColorSwatchNode,this.css.selected)}var o,r=i.normalizeColor(e),a=this._previousColor,l=this._colorInstance,n=this.css.selected;if(a){if(i.equal(a,r))return;var h=this._findSwatch({colors:this._activePalette.get("colors"),color:a,swatches:this._swatches});h&&(u.remove(h,n),f.set(h,"borderColor",""))}l.setColor(r),o=l.toHex(),this._set("color",new t(l)),this._previousColor=r,this._silentlyUpdateIntermediateChangingValueWidget(this.dap_transparencySlider,100*(1-l.a)),this._updatePreviewSwatch(l),this._checkSelection(),this._silentlyUpdateHexInput(l),this.trackColors&&this._addRecentColor(o),s&&this.emit("color-change",{color:new t(l)})},colorsPerRow:13,_setColorsPerRow:function(t){t=t>0?t:13,this._set("colorsPerRow",t)},_setPaletteAttr:function(t){var e=this._activePalette===this._brightsPalette;this._brightsPalette.set("colors",t),this._pastelsPalette.set("colors",this._toPastels(this._brightsPalette.get("colors"))),this._activePalette=e?this._brightsPalette:this._pastelsPalette,this._createPalettes(),this._togglePalette(!e)},recentColors:[],_getRecentColorsAttr:function(){return h.map(this.recentColors,function(t){return i.normalizeColor(t)})},_setRecentColorsAttr:function(t){this.recentColors=t||[],this.recentColors=h.map(this.recentColors,function(t){return i.normalizeColor(t).toHex()}),0===this.recentColors.length?this._clearRecentSwatches():this._renderRecentSwatches()},required:!1,_setRequiredAttr:function(t){u.toggle(this._noColorSwatchNode,this.css.displayNone,t),this._set("required",t)},_showRecentColors:!0,_setShowRecentColorsAttr:function(t){u.toggle(this.dap_recentColorSection,this.css.displayNone,!t),this._set("showRecentColors",t)},_showSuggestedColors:!1,_setShowSuggestedColorsAttr:function(t){u.toggle(this.dap_suggestedColorSection,this.css.displayNone,!t),this._set("showSuggestedColors",t)},_showTransparencySlider:!0,_setShowTransparencySliderAttr:function(t){u.toggle(this.dap_transparencySection,this.css.displayNone,!t),this._set("showTransparencySlider",t)},suggestedColors:null,_getSuggestedColorsAttr:function(){return h.map(this.suggestedColors,function(t){return i.normalizeColor(t)})},_setSuggestedColorsAttr:function(t){this._clearSuggestedSwatches(),this.suggestedColors=t||[],this.suggestedColors=h.map(this.suggestedColors,function(t){return i.normalizeColor(t).toHex()}),this.suggestedColors.length>0&&this._renderSuggestedSwatches()},trackColors:!0,addRecentColor:function(t){t&&t!==m&&this._addRecentColor(i.normalizeColor(t).toHex())},loadRecentColors:function(t){this.set("recentColors",JSON.parse(localStorage.getItem(t)))},saveRecentColors:function(t){localStorage.setItem(t,JSON.stringify(this.get("recentColors")))},_toPastels:function(e){var s=this._colorInstance,o=new t([238,238,238]);return h.map(e,function(e){return t.blendColors(s.setColor(e),o,.2)},this)},_createSwatch:function(t){var e=t.className,s=t.hexColor||"transparent",o=t.paletteNode,i=this.id+"_"+e.replace(" ","-")+"_"+s.replace("#","");return _.create("span",{id:i,"aria-label":s,role:"gridcell",className:e,style:{background:s}},o)},_createSwatches:function(t,e){var s,o,i=this.css.swatch,r=this.css.swatchRow,a=this.colorsPerRow,l=e.get("colors");h.forEach(l,function(e,l){l%a==0&&(s=_.create("div",{className:r,role:"row"},t)),o=this._swatchCreator({className:i,hexColor:e,paletteNode:s}),this._swatches[e]=o},this)},_selectColor:function(){var t=this.color||this._activePalette.get("colors")[0];this.set("color",t)},_setColorWithCurrentAlpha:function(t){t!==m&&this.color!==m&&(t=i.normalizeColor(t),t.a=this.color.a),this.set("color",t)},_updatePreviewSwatch:function(t){var e,s,o,r,a,l=this.css.swatchEmpty,n=this.dap_previewSwatch;if(t===m)return u.add(n,l),void f.set(n,{backgroundColor:"",borderColor:""});e=i.getContrastingColor(t),s=8!==w("ie"),u.remove(n,l),o=t.toCss(s),r=e.toCss(s),a={backgroundColor:o,borderColor:r},s||(a.opacity=t.a),f.set(n,a)},_showBrights:function(){u.remove(this.dap_paletteContainer,this.css.alt),this._activePalette=this._brightsPalette},_showPastels:function(){u.add(this.dap_paletteContainer,this.css.alt),this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(t){var e=f.get(t,"backgroundColor");this._setColorWithCurrentAlpha(e)},_checkSelection:function(){var t=this.get("color");this._activePalette.contains(t)?this._highlightColor(t):this._clearSelection()},_landSwatch:function(t){var e=t.index,s=t.colors,o=t.swatches,r=t.paletteNode,a=s[e],l=a&&this._findSwatch({colors:s,color:a,swatches:o}),n=this.css.focusedSwatch;if(C("."+n,r).removeClass(n).style("borderColor",""),r.removeAttribute("aria-activedescendant"),this._swatchNavigationIndex=e,l&&null!=e){u.add(l,n);var h=i.getContrastingColor(i.normalizeColor(a));f.set(l,"borderColor",h.toHex()),r.setAttribute("aria-activedescendant",l.id)}},_navigateSwatches:function(t,e){var s=t.keyCode,o=e.color,i=e.colors,r=e.swatches,a=e.paletteNode,l=o===m?-1:i.indexOf(o.toHex()),n=null!=this._swatchNavigationIndex?this._swatchNavigationIndex:l>-1?l:0;if(s===p.ENTER)return this._landSwatch({paletteNode:a,colors:i,index:null,swatches:r}),void this.set("color",i[n]);var h=this.colorsPerRow;s===p.LEFT_ARROW&&n--,s===p.RIGHT_ARROW&&n++,s===p.DOWN_ARROW&&(n+=h,n>i.length&&(n%=h),t.preventDefault()),s===p.UP_ARROW&&(n-=Math.min(h,i.length),n<0&&(n=i.length+n),t.preventDefault()),-1===n?n=i.length-1:n===i.length&&(n=0),this._landSwatch({paletteNode:a,colors:i,index:n,swatches:r})},_addListeners:function(){var t="."+this.css.swatch,e=this.dap_paletteContainer;this.own(g(e,g.selector(t,n),d.hitch(this,function(t){this._setColorFromSwatch(t.target)})),g(e,"blur",d.hitch(this,function(){this._landSwatch({paletteNode:e,colors:this._activePalette.get("colors"),index:null})})),g(e,"keydown",d.hitch(this,function(t){this._navigateSwatches(t,{color:this.get("color"),colors:this._activePalette.get("colors"),paletteNode:e,swatches:this._swatches})})));var s=this.dap_recentColorPaletteContainer;this.own(g(s,g.selector(t,n),d.hitch(this,function(t){this._setColorFromSwatch(t.target)})),g(s,"keydown",d.hitch(this,function(t){this._navigateSwatches(t,{color:m,colors:this.recentColors,paletteNode:s,swatches:this._recentSwatches})})),g(s,"blur",d.hitch(this,function(){this._landSwatch({paletteNode:s,colors:this.recentColors,index:null})})));var o=this.dap_suggestedColorPaletteContainer;this.own(g(o,g.selector(t,n),d.hitch(this,function(t){this._setColorFromSwatch(t.target)})),g(o,"keydown",d.hitch(this,function(t){this._navigateSwatches(t,{color:m,colors:this.suggestedColors,paletteNode:o,swatches:this._suggestedSwatches})})),g(o,"blur",d.hitch(this,function(){this._landSwatch({paletteNode:o,colors:this.suggestedColors,index:null})}))),this.own(g(this._noColorSwatchNode,n,d.hitch(this,function(t){this.set("color",m)})));var r=this.dap_hexInput;r.on("blur",d.hitch(this,function(){var t=i.normalizeHex(r.get("value"));if(i.isShorthandHex(t))return void this._setColorWithCurrentAlpha(t);this._silentlyUpdateHexInput(this.color)})),r.on("change",d.hitch(this,function(){var t=i.normalizeHex(r.get("value"));i.isLonghandHex(t)&&(this.color!==m&&this.color.toHex()===t||this._setColorWithCurrentAlpha(t))})),this.dap_transparencySlider.on("change",d.hitch(this,function(t){var e,s=this.get("color");s!==m&&(e=i.normalizeColor(this._colorInstance.setColor(s)),e.a=1-t/100,this._updatePreviewSwatch(e),this._silentlyUpdateHexInput(e),this.set("color",e))})),this.dap_paletteToggle.on("change",d.hitch(this,this._togglePalette)),this.own(g(this.dap_header,"click",function(){this.collapsible&&this.set("collapsed",!this.collapsed)}.bind(this)))},_togglePalette:function(t){this.dap_paletteToggle.set("checked",t,!1),t?this._showPastels():this._showBrights(),this._checkSelection()},_createPalettes:function(){this._swatches={},_.empty(this.dap_primaryPalette),_.empty(this.dap_secondaryPalette),this._createSwatches(this.dap_primaryPalette,this._brightsPalette),this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_silentlyUpdateHexInput:function(t){var e=t===m?"":t.toHex();this._silentlyUpdateIntermediateChangingValueWidget(this.dap_hexInput,e)},_silentlyUpdateIntermediateChangingValueWidget:function(t,e){t.intermediateChanges=!1,t.set("value",e,!1),t.intermediateChanges=!0},_addRecentColor:function(t){if(t){var e=this.recentColors,s=h.indexOf(e,t);s>-1&&e.splice(s,1),e.unshift(t),e.length>this.colorsPerRow&&e.pop(),this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var t=this.css.recent,e=this.css.swatch,s="."+t+"."+e,o=C(s,this.dap_recentColorPalette);this._recentSwatches={},h.forEach(this.recentColors,function(s,i){if(i<this.colorsPerRow){i+1>o.length&&o.push(this._swatchCreator({hexColor:s,className:e+" "+t,paletteNode:this.dap_recentColorPalette}));var r=o[i];this._recentSwatches[s]=r,f.set(r,"backgroundColor",s)}},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var t=this.css.suggested,e=this.css.swatch,s="."+t+"."+e,o=C(s,this.dap_suggestedColorPalette);this._suggestedSwatches={},h.forEach(this.suggestedColors,function(s,i){if(i<this.colorsPerRow){i+1>o.length&&o.push(this._swatchCreator({hexColor:s,className:e+" "+t,paletteNode:this.dap_suggestedColorPalette}));var r=o[i];this._suggestedSwatches[s]=r,f.set(r,"backgroundColor",s)}},this)}},_clearRecentSwatches:function(){_.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){_.empty(this.dap_suggestedColorPalette)},_clearSelection:function(){var t=this.css.selected;C("."+t,this.dap_paletteContainer).removeClass(t).removeAttr("aria-selected")},_highlightColor:function(t){var e,s=this.css.selected,o=this._findSwatch({colors:this._activePalette.get("colors"),color:t,swatches:this._swatches});o&&(t=i.normalizeColor(t),e=i.getContrastingColor(t),u.add(o,s),f.set(o,"borderColor",e.toHex()),o.setAttribute("aria-selected",!0))},_findSwatch:function(t){var e,s=t.colors,o=this._colorInstance.setColor(t.color).toHex(),i=h.indexOf(s,o);return i>-1&&(e=t.swatches[o]),e},_enableTransparencySlider:function(){u.remove(this.dap_transparencyLabel,this.css.disabled),this.dap_transparencySlider.set("disabled",!1)},_disableTransparencySlider:function(){u.add(this.dap_transparencyLabel,this.css.disabled),this.dap_transparencySlider.set("disabled",!0)}});return b.NO_COLOR=m,w("extend-esri")&&d.setObject("dijit.ColorPicker",b,e),b});