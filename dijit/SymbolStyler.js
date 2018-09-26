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

define(["../dijit/ColorPicker","../domUtils","../kernel","../symbol","./_EventedWidget","./_Tooltip","./ColorPicker/colorUtil","./SymbolStyler/_DelayedUpdate","./SymbolStyler/IconSelect","./SymbolStyler/MarkerSymbolPicker","./SymbolStyler/schemeUtil","./SymbolStyler/stylerUtil","./SymbolStyler/symbolUtil","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/a11yclick","dijit/form/CheckBox","dijit/form/ComboBoxMixin","dijit/form/NumberTextBox","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/keys","dojo/number","dojo/on","dojo/string","dojo/i18n!../nls/jsapi","dojo/text!./SymbolStyler/templates/SymbolStyler.html","../dijit/HorizontalSlider","./SymbolStyler/MarkerSymbolPicker","./SymbolStyler/ColorRampPicker","dijit/form/Button","dijit/form/ComboBox","dijit/form/NumberSpinner","dijit/form/Select","dijit/form/TextBox","dijit/layout/BorderContainer","dijit/layout/ContentPane","dijit/layout/StackController","dijit/layout/StackContainer"],function(t,e,i,o,s,l,n,r,a,h,d,_,p,u,c,m,S,C,g,b,y,f,P,T,x,I,O,k,w,v,z){var L=y([s,u,c,r,l],{_RECENT_FILL_COLORS_ITEM_KEY:"symbolStyler/recent/fill/colors",_RECENT_OUTLINE_COLORS_ITEM_KEY:"symbolStyler/recent/outline/colors",_defaultMinLineWidthInPx:0,_defaultMinShapeSizeInPx:1,_defaultMaxLineWidthInPx:18,_defaultMaxShapeSizeInPx:120,declaredClass:"esri.dijit.SymbolStyler",baseClass:"esriSymbolStyler",templateString:z,labels:null,css:{symbolPreviewContainer:"esriSymbolPreviewContainer",symbolPreview:"esriSymbolPreview",tabBar:"esriTabBar",content:"esriContent",link:"esriLink",label:"esriLabel",shapeImageUrlContainer:"esriShapeImageUrlContainer",urlInput:"esriUrlInput",addIcon:"esriAddIcon",errorDisplay:"esriErrorDisplay",symbolSizeInput:"esriSymbolSizeInput",inlineInput:"esriInlineInput",text:"esriText",hidden:"esriHidden",lineWidthInput:"esriLineWidthInput",arrowPattern:"esriArrowPattern",arrowPatternInput:"esriArrowPatternInput",linePattern:"esriLinePattern",linePatternInput:"esriLinePatternInput",alt:"esriAlt",disabled:"esriDisabled"},declaredClass:"esri.dijit.SymbolStyler",_originalSymbol:null,_editedSymbol:null,_activeTabName:null,_externalSizing:!1,_delayedCommitPropsTrigger:null,_symbolPreviewSurface:null,_arrowPatternSelect:null,_linePatternSelect:null,_symbolPicker:null,_customImageSymbol:null,_optimizationSection:null,_optimizationCheckBox:null,_optimizationLabel:null,_alphaBeforeOutlineColorCleared:null,_isPreppingEdit:null,constructor:function(t){t=t||{},this._delayedCommitPropsTrigger=this.createUpdateTrigger(this._commitProperties,this),this._initOptimizationControls()},_initOptimizationControls:function(){var e=new S,i=T.create("div",{className:t.prototype.css.section});this._optimizationLabel=T.create("label",{for:e.id,className:this.css.label,innerHTML:v.widgets.symbolEditor.autoAdjustOutline},i),e.on("change",f.hitch(this,function(t){var e=this.dap_outlineColorPicker.get("color");e.a=t?.75:e.a,this.dap_outlineColorPicker.set("color",e),this._delayedCommitPropsTrigger()})),e.placeAt(i,"first"),this._optimizationSection=i,this._optimizationCheckBox=e},postMixInProperties:function(){this.inherited(arguments),this.labels=f.mixin({},v.common,v.widgets.symbolEditor)},_toggleOutlineColorControls:function(t){var e=this.dap_outlineColorRampPicker,i=this.dap_outlineColorPicker;this._shouldShowOutlineColorRamp(t)?(this._show(e),this._hide(i)):(this._show(i),this._hide(e))},_shouldShowOutlineColorRamp:function(t){var e=p;return this._hasColorRamp()&&(e.isLine(t)||e.isPoint(t)&&e.hasPureOutlineStyle(t))},_setUpColorControls:function(t,e){var i,o=this.dap_outlineColorRampPicker,s=this.dap_outlineColorPicker,l=this.dap_fillColorRampPicker,n=this.dap_fillColorPicker;if(e)return i={colors:e.colors},e.scheme&&(i.scheme=e.scheme),this._isLine()?(o.set({schemes:t,selected:i,numStops:e.numStops}),this._hide(s),this._show(o)):(this._isPoint()&&o.set({schemes:t,selected:i,numStops:e.numStops}),l.set({schemes:t,selected:i,numStops:e.numStops}),this._show(l),this._show(s),this._hide(n),this._hide(o)),void this._updateSuggestedColors(s,d.getOutlineColors(t));this._show(n),this._show(s),this._hide(l),this._hide(o),this._updateSuggestedColors(n,d.getFillColors(t)),this._updateSuggestedColors(s,d.getOutlineColors(t))},edit:function(t,e){var i,o=p.cloneSymbol(t);e=e||{},i=e.colorRamp,this._isPreppingEdit=!0,this._colorRamp=i,this._originalSymbol=t,this._editedSymbol=o,this._activeTabName=e.activeTab,this._externalSizing=e.externalSizing,this._tabOptions=e.tabOptions||{},this._optimizationOptions="boolean"==typeof e.optimizeOutline?{value:e.optimizeOutline}:void 0,this._setUpColorControls(e.schemes,i),this._assimilateSymbol(o),this._toggleSizingControls(this._externalSizing),this._updateSymbolPicker(),this._toggleOutlineColorControls(o),this._toggleOptimizationOptions()},_toggleOptimizationOptions:function(){var t=this._optimizationOptions,e=this._optimizationSection;p.isPolygon(this._editedSymbol)&&t?(this._optimizationCheckBox.set("value",t.value,!1),T.place(e,this.dap_outlineColorPicker.dap_recentColorSection)):e.parentNode&&T.empty(e.parentNode)},_importRecentColors:function(){this.dap_fillColorPicker.loadRecentColors(this._RECENT_FILL_COLORS_ITEM_KEY),this.dap_outlineColorPicker.loadRecentColors(this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_hasColorRamp:function(){return!!this._colorRamp},_toggleSizingControls:function(t){var e=!1,i=!1;t&&(this._isLine()?i=!0:e=!0),this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this._lineWidthTextBox,this.dap_lineWidthSlider],disabled:i}),this._toggleLabeledControls({labels:this.dap_shapeSizeLabel,controls:[this.dap_shapeSizeTextBox,this.dap_shapeSizeSlider],disabled:e})},_toggleLabeledControls:function(t){var e=t.labels,i=t.controls,o=t.disabled;f.isArray(e)?b.forEach(e,function(t){P.toggle(t,this.css.disabled,o)},this):P.toggle(e,this.css.disabled,o),f.isArray(i)?b.forEach(i,function(t){t.set("disabled",o)}):i.set("disabled",o)},_updateSymbolPicker:function(){var t=!!this._tabOptions.symbolDisplayMode,i=t?this._tabOptions.symbolDisplayMode:this._isPoint()&&this._hasColorRamp()?"default":"portal";"portal"===i?e.show(this.dap_useImageContent):e.hide(this.dap_useImageContent),this._symbolPicker.set("displayMode",i),this._symbolPicker.clearSelection()},shapeSymbol:null,_setShapeSymbolAttr:function(t){this._adjustOutlineProperties(this._editedSymbol,t),this._set("shapeSymbol",t),this._editedSymbol=t,this._toggleTabs(t),this._toggleOutlineColorControls(t),this._delayedCommitPropsTrigger()},_adjustOutlineProperties:function(t,e){var i,o,s,l=this.dap_fillColorPicker,r=this.dap_outlineColorPicker,a=this.dap_fillColorRampPicker,h=this.dap_outlineColorRampPicker;if(this._switchedFromPmsToSms(t,e))return l.set("color",e.color),i=p.getOutline(e),r.set("color",i.color),this.dap_lineWidthSlider.set("value",i.width),this._linePatternSelect.set("value",i.style),void this._arrowPatternSelect.set("value",i.marker);if(this._switchedPureOutlineToSmsStyle(t,e)&&this._hasColorRamp())return void a.set("selected",h.get("selected"));if(this._switchedSmsStyleToPureOutline(t,e)){if(this._hasColorRamp())return void h.set("selected",a.get("selected"));if(i=p.getOutline(t),s=r.get("color"),!i.color)return void r.set("color",e.color);o=n.isBright(i.color),o&&i.color.a<.2?(s.a=.2,r.set("color",s)):!o&&i.color.a<.1&&(s.a=.1,r.set("color",s))}},_switchedFromPmsToSms:function(t,e){return p.isType(t,"picturemarker")&&p.isType(e,"simplemarker")},_switchedSmsStyleToPureOutline:function(t,e){return p.isType(t,"simplemarker")&&p.isType(e,"simplemarker")&&p.hasPureOutlineStyle(t)&&p.hasPureOutlineStyle(e)},_switchedPureOutlineToSmsStyle:function(t,e){return this._switchedSmsStyleToPureOutline(e,t)},shapeSize:null,_setShapeSizeAttr:function(t){this._set("shapeSize",t),this._delayedCommitPropsTrigger()},_shapeImageUrl:null,_setShapeImageUrlAttr:function(t){this._set("shapeImageUrl",t),this._delayedCommitPropsTrigger()},fillColor:null,_setFillColorAttr:function(e){e=e===t.NO_COLOR?null:e,this._set("fillColor",e),this._delayedCommitPropsTrigger()},fillColorRamp:null,_setFillColorRampAttr:function(t){this._set("fillColorRamp",t),this._delayedCommitPropsTrigger()},outlineColorRamp:null,_setOutlineColorRampAttr:function(t){this._set("outlineColorRamp",t),this._delayedCommitPropsTrigger()},outlineWidth:null,_setOutlineWidthAttr:function(t){this._set("outlineWidth",t),this._delayedCommitPropsTrigger()},outlineColor:null,_setOutlineColorAttr:function(e){e=e===t.NO_COLOR?null:e;var i=!!this._optimizationOptions&&this._optimizationCheckBox.checked;!this._get("outlineColor")&&e&&i&&(e.a=this._alphaBeforeOutlineColorCleared,this.dap_outlineColorPicker.set("color",e,!1),this._alphaBeforeOutlineColorCleared=null),this._set("outlineColor",e),this._delayedCommitPropsTrigger()},outlinePattern:null,_setOutlinePatternAttr:function(t){this._set("outlinePattern",t),this._delayedCommitPropsTrigger()},arrowPattern:null,_setArrowPatternAttr:function(t){this._set("arrowPattern",t),this._delayedCommitPropsTrigger()},_getTabContainer:function(t){return"fill"===t?this.dap_fillContainer:"outline"===t?this.dap_outlineContainer:this.dap_shapeContainer},_storeRecentFillColors:function(){this._storeRecentColors(this.dap_fillColorPicker,this._RECENT_FILL_COLORS_ITEM_KEY)},_storeRecentOutlineColors:function(){this._storeRecentColors(this.dap_outlineColorPicker,this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_storeRecentColors:function(t,e){var i=t;i.addRecentColor(i.get("color")),i.saveRecentColors(e)},_isPoint:function(){return p.isPoint(this._editedSymbol)},_isLine:function(){return p.isLine(this._editedSymbol)},_isPolygon:function(){return p.isPolygon(this._editedSymbol)},_addHandlers:function(){this.own(this.dap_shapeContainer.on("show",f.hitch(this,function(){this._symbolPicker._updateTemplatePickerIfHeightless()}))),this._linePatternSelect.on("change",f.hitch(this,function(t){this.set("outlinePattern",t)})),this._arrowPatternSelect.on("change",f.hitch(this,function(t){this.set("arrowPattern",t)})),this.own(k(this.dap_loadShapeImageUrl,m,f.hitch(this,function(){this._loadImage(this.dap_shapeImageUrlInput.get("value"))}))),this.own(k(this.dap_addImage,m,f.hitch(this,function(){e.show(this.dap_shapeImageUrlContainer),this.dap_shapeImageUrlInput.focus()}))),this.dap_shapeImageUrlInput.on("input",f.hitch(this,function(t){t.keyCode===I.ENTER&&this._loadImage(this.dap_shapeImageUrlInput.get("value"))})),this.dap_shapeImageUrlInput.on("change",f.hitch(this,function(t){this.set("shapeImageUrl",t)})),this.dap_shapeSizeSlider.on("change",f.hitch(this,function(t){this.set("shapeSize",t)})),this.dap_fillColorPicker.on("color-change",f.hitch(this,function(t){this.set("fillColor",t.color)})),this.dap_fillColorRampPicker.on("color-ramp-change",f.hitch(this,function(t){this.set("fillColorRamp",t.colors)})),this.dap_outlineColorRampPicker.on("color-ramp-change",f.hitch(this,function(t){this.set("outlineColorRamp",t.colors)})),this.dap_lineWidthSlider.on("change",f.hitch(this,function(t){this.set("outlineWidth",t)})),this.dap_outlineColorPicker.on("color-change",f.hitch(this,function(t){this.set("outlineColor",t.color)})),_.bindSliderAndTextBox(this.dap_lineWidthSlider,this._lineWidthTextBox),_.bindSliderAndTextBox(this.dap_shapeSizeSlider,this.dap_shapeSizeTextBox),this._symbolPicker.on("symbol-select",f.hitch(this,function(t){this._hideImageUrlInput(),this.set("shapeSymbol",t.selection)})),this.dap_shapeSizeSlider.on("change",f.hitch(this,this._onSizeChange)),this.dap_fillColorPicker.on("color-change",f.hitch(this,this._onFillColorChange)),this.dap_outlineColorPicker.on("color-change",f.hitch(this,this._onOutlineColorChange)),this.dap_lineWidthSlider.on("change",f.hitch(this,this._onWidthChange))},getStyle:function(){var t,e,i=p.cloneSymbol(this._editedSymbol),o={symbol:i};return this._hasColorRamp()&&(t=p.isLine(i)||p.isPoint(i)&&p.hasPureOutlineStyle(i),e=t?this.dap_outlineColorRampPicker:this.dap_fillColorRampPicker,f.mixin(o,e.getStyle())),this._optimizationOptions&&(o.optimizeOutline=this._optimizationCheckBox.checked),o},storeColors:function(){this._storeRecentFillColors(),this._storeRecentOutlineColors()},postCreate:function(){this.inherited(arguments),this._setUpComboBox();var t=new a({},this.dap_linePatternSelect),i=new a({},this.dap_arrowPatternSelect);this._linePatternSelect=t,this._arrowPatternSelect=i,e.hide(this.dap_shapeImageUrlContainer),this.dap_shapeImageUrlInput.set("placeholder",this.labels.imageUrlInputPlaceholder),this._lineWidthTextBox.selectOnClick=!0,this.dap_shapeSizeTextBox.selectOnClick=!0,this.dap_lineWidthSlider.intermediateChanges=!0,this._lineWidthTextBox.intermediateChanges=!0,this.dap_shapeSizeSlider.intermediateChanges=!0,this.dap_shapeSizeTextBox.intermediateChanges=!0,this.dap_fillColorPicker.trackColors=!1,this.dap_outlineColorPicker.trackColors=!1,this._linePatternSelect.addIconOptions(["solid","dot","dash","dashdot","longdashdotdot"],this.css.linePattern),this._arrowPatternSelect.addIconOptions(["none","begin","end","begin-end"],this.css.arrowPattern),this._importRecentColors(),this.createTooltips([{node:this.dap_shapeImageUrlContainer,label:this.labels.imageUrlInputTooltip},{node:this.dap_addImage,label:this.labels.useImageTooltip},{node:this.dap_symbolSizeOptions},{node:this.dap_lineWidthOptions}]),this.dap_outlineColorPicker._enableTransparencySlider=function(){},this.dap_outlineColorPicker._disableTransparencySlider=function(){}},_setUpComboBox:function(){var t=g.createSubclass([C]),e=[1,1.2,1.5,2,3,4,5,6,7,8,9,10],i=document.createDocumentFragment();b.forEach(e,function(t){i.appendChild(T.create("option",{innerHTML:O.format(t)}))}),this.dap_lineWidthTextBox.appendChild(i),this._lineWidthTextBox=new t({},this.dap_lineWidthTextBox)},_updateSliderAndTextBoxConstraints:function(t){var e=t.minimum,i=t.maximum;t.textBox.set("constraints",{min:e,max:i,places:"0,2"}),t.slider.set({minimum:e,maximum:i,discreteValues:Math.round(i)-Math.round(e)+1})},_loadImage:function(t){this._clearUrlImageErrorDisplay(),p.testImageUrl(t).then(f.hitch(this,function(e){var i=this._customImageSymbol,s=this.shapeSize;e=p.preserveAspectRatio({dimensions:e,targetDimension:"width",targetSize:s}),i?(i.url=t,i.height=e.height,i.width=e.width):(i=new o.PictureMarkerSymbol(t,e.width,e.height),this._customImageSymbol=i),this._symbolPicker.addCustomImageSymbol(i),this.set("shapeSymbol",i)}),f.hitch(this,function(){this._showUrlImageErrorDisplay(this.labels.imageLoadError)}))},_showUrlImageErrorDisplay:function(t){this.dap_shapeImageUrlErrorDisplay.innerHTML=t},_clearUrlImageErrorDisplay:function(){this.dap_shapeImageUrlErrorDisplay.innerHTML=""},_getActiveTabAttr:function(){var t=this.dap_stackContainer.selectedChildWidget;return t===this.dap_outlineContainer?"outline":t===this.dap_fillContainer?"fill":"shape"},_updateTabs:function(t){this._toggleTabs(t),this._showRelevantTabs(t),this._selectActiveTab(),_.ensureEnabledChildSelection(this.dap_stackContainer)},_supportsPattern:function(t){return p.isLine(t)||p.isPolygon(t)},_toggleTabs:function(t){if(this._shouldShowShapeTab(t)?this._enableTab("shape"):this._disableTab("shape"),this._shouldShowFillTab(t)?this._enableTab("fill"):this._disableTab("fill"),this._shouldShowOutlineTab(t)){this._enableTab("outline");var i=[this._arrowPatternSelect,this.dap_arrowPatternSelectLabel],o=[this._linePatternSelect,this.dap_linePatternSelectLabel];b.forEach(o,e[p.isLine(t)||p.isPolygon(t)?"show":"hide"]),b.forEach(i,e[p.isLine(t)?"show":"hide"])}else this._disableTab("outline")},_shouldShowShapeTab:function(t){return"simplemarkersymbol"===t.type||"picturemarkersymbol"===t.type},_enableTab:function(t){_.enable(this._getTabContainer(t))},_disableTab:function(t){_.disable(this._getTabContainer(t))},_shouldShowFillTab:function(t){return"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_CIRCLE||"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_SQUARE||"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_DIAMOND||"simplefillsymbol"===t.type},_shouldShowOutlineTab:function(t){return"simplemarkersymbol"===t.type||"simplefillsymbol"===t.type||"cartographiclinesymbol"===t.type||"simplelinesymbol"===t.type},_syncControls:function(t){var e,i;if(this._hideImageUrlInput(),this._updateSizingConstraints(),this._shouldShowShapeTab(t)&&(e=p.getMarkerLength(t),this.set("shapeSize",e),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeSlider,e),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeTextBox,e)),this._shouldShowFillTab(t)&&(this.set("fillColor",t.color),this.dap_fillColorPicker.set("color",t.color,!1)),this._shouldShowOutlineTab(t)){i=p.getOutline(t);var o=i.marker?i.marker.placement:"none";this.set("outlineColor",i.color),this.set("outlineWidth",i.width),this.set("outlinePattern",i.style),this.set("arrowPattern",o),this.dap_outlineColorPicker.set("color",i.color,!1),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthSlider,i.width),_.silentlyUpdateIntermediateChangingValueWidget(this._lineWidthTextBox,i.width),this._linePatternSelect.set("value",i.style,!1),this._arrowPatternSelect.set("value",o,!1)}},_updateSizingConstraints:function(){var t=p.getOutline(this._editedSymbol),e=t&&t.width>this._defaultMaxLineWidthInPx?Math.ceil(t.width):this._defaultMaxLineWidthInPx,i=p.getMarkerLength(this._editedSymbol),o=i>this._defaultMaxShapeSizeInPx?Math.ceil(i):this._defaultMaxShapeSizeInPx;this._updateSliderAndTextBoxConstraints({textBox:this._lineWidthTextBox,slider:this.dap_lineWidthSlider,minimum:this._defaultMinLineWidthInPx,maximum:e}),this.findTooltip(this.dap_lineWidthOptions).set("label",w.substitute(this.labels.lineWidthTooltip,{min:this._defaultMinLineWidthInPx,max:e})),this._updateSliderAndTextBoxConstraints({textBox:this.dap_shapeSizeTextBox,slider:this.dap_shapeSizeSlider,minimum:this._defaultMinShapeSizeInPx,maximum:o}),this.findTooltip(this.dap_symbolSizeOptions).set("label",w.substitute(this.labels.symbolSizeTooltip,{min:this._defaultMinShapeSizeInPx,max:o}))},_assimilateSymbol:function(t){this._updateTabs(t),this._syncControls(t)},startup:function(){this.inherited(arguments);var t=new h(this._getSymbolPickerParams(),this.dap_symbolPicker);t.startup(),this._symbolPicker=t,this._addHandlers()},_getSymbolPickerParams:function(){return{portal:this.portal||this.portalSelf||this.portalUrl}},_hideImageUrlInput:function(){this._clearUrlImageErrorDisplay(),e.hide(this.dap_shapeImageUrlContainer),this.dap_shapeImageUrlInput.set("value","")},_showRelevantTabs:function(){var t=this.dap_stackContainer,i=this.dap_shapeContainer,o=this.dap_fillContainer,s=this.dap_outlineContainer,l={};b.forEach(t.getChildren(),function(e){t.removeChild(e)}),this._isPoint()&&(l.shape=!0,l.fill=!0,l.outline=!0),this._isLine()&&(l.outline=!0),this._isPolygon()&&(l.fill=!0,l.outline=!0);var n=this._tabOptions.excluded||[];b.indexOf(n,"shape")>-1&&(l.shape=!1),b.indexOf(n,"outline")>-1&&(l.outline=!1),b.indexOf(n,"fill")>-1&&(l.fill=!1),l.shape&&t.addChild(i),l.fill&&t.addChild(o),l.outline&&t.addChild(s),1===t.getChildren().length?e.hide(this.dap_stackController.domNode):e.show(this.dap_stackController.domNode)},_selectActiveTab:function(){var t=this._getTabContainer(this._activeTabName);this.dap_stackContainer.getIndexOfChild(t)>-1&&this.dap_stackContainer.selectChild(t)},_onFillColorChange:function(t){this.set("fillColor",t.color)},_onOutlineColorChange:function(t){this.set("outlineColor",t.color)},_getFillColor:function(){return!this._isLine()&&this._hasColorRamp()?this._getMiddleItem(this.fillColorRamp):this.fillColor},_getMiddleItem:function(t){return t[Math.floor(.5*(t.length-1))]},_getOutlineColor:function(){return this._shouldShowOutlineColorRamp(this._editedSymbol)?this._getMiddleItem(this.outlineColorRamp):this.outlineColor},_commitProperties:function(){var t=this._editedSymbol;this._shouldShowShapeTab(t)&&this._updateShapeSize(),this._shouldShowFillTab(t)&&(p.setFillColor(t,this._getFillColor()),this._isPreppingEdit||this._ensureSupportedSfsStyle(t)),this._shouldShowOutlineTab(t)&&(p.setOutlineColor(t,this._getOutlineColor()),this._updateArrowPattern(),this._updateOutlinePattern(),this._updateOutlineWidth()),this._updatePreviewSymbol(),this._toggleOutlineOptions(),this._isPreppingEdit=!1,this.emit("style-update")},_ensureSupportedSfsStyle:function(t){"simplefillsymbol"!==t.type||"none"===t.style&&"solid"===t.style||(t.style="solid")},_toggleOutlineOptions:function(){var t=!!this._optimizationOptions&&this._optimizationCheckBox.checked,e=this.outlineColor,i=this._isLine(),o=this._externalSizing&&i||!e||t,s=!e,l=!e;this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this._lineWidthTextBox,this.dap_lineWidthSlider],disabled:o}),this._toggleLabeledControls({labels:this._optimizationLabel,controls:[this._optimizationCheckBox],disabled:!e}),e||(this._alphaBeforeOutlineColorCleared=1-this.dap_outlineColorPicker.dap_transparencySlider.get("value")),this._toggleLabeledControls({labels:this.dap_linePatternSelectLabel,controls:[this._linePatternSelect,this._arrowPatternSelect],disabled:l}),this._toggleLabeledControls({labels:[this.dap_outlineColorPicker.dap_transparencyLabel],controls:[this.dap_outlineColorPicker.dap_transparencySlider],disabled:s})},_updatePreviewSymbol:function(){var t=this._editedSymbol,e=this.css.alt,i=this.dap_symbolPreview;this._symbolPreviewSurface&&this._symbolPreviewSurface.destroy(),P.toggle(i,e,this._blendsIntoBackground(t)),this._symbolPreviewSurface=p.renderOnSurface(t,i)},_blendsIntoBackground:function(t){return p.hasColor(t.outline)?this._isWhitish(t.outline.color):this._isWhitish(t.color)},_isWhitish:function(t){return t&&t.r>246&&t.g>246&&t.b>246},destroy:function(){this._symbolPreviewSurface&&this._symbolPreviewSurface.destroy(),T.destroy(this._optimizationSection),this._optimizationCheckBox.destroy(),this.dap_shapeContainer.destroy(),this.dap_fillContainer.destroy(),this.dap_outlineContainer.destroy(),this.inherited(arguments)},_updateSuggestedColors:function(t,e){t.set("suggestedColors",e)},_updateOutlineWidth:function(){p.setOutlineWidth(this._editedSymbol,this.outlineWidth)},_onWidthChange:function(t){this.set("outlineWidth",t)},_onSizeChange:function(t){this.set("shapeSize",t)},_updateShapeSize:function(){p.setSize(this._editedSymbol,this.shapeSize)},_updateOutlinePattern:function(){this._shouldShowOutlineTab(this._editedSymbol)&&p.setOutlineStyle(this._editedSymbol,p.toFullLineStyle(this.outlinePattern))},_updateArrowPattern:function(){this._shouldShowOutlineTab(this._editedSymbol)&&p.setLineMarker(this._editedSymbol,p.toLineMarker(this.arrowPattern))},_show:function(t){P.remove(e.getNode(t),this.css.hidden)},_hide:function(t){P.add(e.getNode(t),this.css.hidden)},popUp:function(t){_.popUp(this,t)}});return x("extend-esri")&&f.setObject("dijit.SymbolStyler",L,i),L});