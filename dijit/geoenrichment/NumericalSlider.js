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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/on","dojox/timing","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/form/HorizontalRangeSlider","dijit/form/TextBox","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!./templates/NumericalSlider.html"],function(e,t,i,a,l,n,u,s,r,h,o,m){return e([u,s,n],{templateString:m,lowerValue:3,upperValue:7,decimals:0,minValue:null,maxValue:null,timeIntervalLength:null,_timer:null,_root:null,constructor:function(e){e&&this.setData(e)},buildRendering:function(){var t=this;this.inherited(arguments);var l=e(this._getSliderClass(),{postMixInProperties:function(){var e=this.value.slice();this.inherited(arguments),this.value=e.map(function(e){return parseFloat(e)})}});this._rangeSlider=new l({name:"rangeSlider",value:["rtl"===document.dir?this.upperValue:this.lowerValue,"rtl"===document.dir?this.lowerValue:this.upperValue],minimum:parseFloat(this.minValue),maximum:parseFloat(this.maxValue),showButtons:!1,intermediateChanges:!0,onChange:this._onChangeValue.bind(this)},this.divSliderContainer),this.own(this._rangeSlider),i.add(this._rangeSlider.sliderHandle,"esriGENumericalSliderMinThumb"),this.label?this.divLabel.innerHTML=this.label:o.hide(this.divLabel),this._createMinTextBox(),this._createMaxTextBox(),this._setMinValue(this.numberToText(this._rangeSlider.value["rtl"===document.dir?1:0])),this._setMaxValue(this.numberToText(this._rangeSlider.value["rtl"===document.dir?0:1])),a(this.tbxMinValue,"mouseup, click",function(e){t.tbxMinValue.textbox.select()}),a(this.tbxMaxValue,"mouseup, click",function(e){t.tbxMaxValue.textbox.select()})},_getSliderClass:function(){return r},_createMinTextBox:function(){var e=this;this.tbxMinValue=(new h).placeAt(this.divMinValue),a(this.tbxMinValue.textbox,"keyup",function(t){13===t.keyCode&&e._onChangeMinValue()}),this.own(this.tbxMinValue)},_createMaxTextBox:function(){var e=this;this.tbxMaxValue=(new h).placeAt(this.divMaxValue),a(this.tbxMaxValue.textbox,"keyup",function(t){13===t.keyCode&&e._onChangeMaxValue()}),this.own(this.tbxMaxValue)},setData:function(e){e.timeIntervalLength&&(e.timeIntervalLength=parseInt(e.timeIntervalLength),this._timer=new l.Timer,this._timer.onTick=this._onTick.bind(this)),e.minValue?e.minValue=parseFloat(e.minValue):e.dataArray&&(e.minValue=Math.min.apply(null,e.dataArray)),e.maxValue?e.maxValue=parseFloat(e.maxValue):e.dataArray&&(e.maxValue=Math.max.apply(null,e.dataArray)),parseFloat(e.lowerValue)&&0!==e.lowerValue||(e.lowerValue=e.minValue),parseFloat(e.upperValue)&&0!==e.upperValue||(e.upperValue=e.maxValue),t.mixin(this,e)},setValue:function(e){var t="rtl"===document.dir?1:0,i="rtl"===document.dir?0:1;this.lowerValue=e[t],this.upperValue=e[i],this._setMinValue(this.numberToText(e[t])),this._setMaxValue(this.numberToText(e[i])),this._rangeSlider.value=e,this._rangeSlider._printSliderBar(!0,!1)},_setMinValue:function(e){this.tbxMinValue.set("value",e),this.tbxMinValue.textbox.title=e},_setMaxValue:function(e){this.tbxMaxValue.set("value",e),this.tbxMaxValue.textbox.title=e},_emitChangeEvent:function(){this._timer?(this._timer.stop(),this._timer.setInterval(this.timeIntervalLength),this._timer.start()):this._onTick()},_onTick:function(){var e={lowerValue:this.lowerValue,upperValue:this.upperValue};this._timer&&this._timer.stop(),this.onChange(e)},_onChangeValue:function(e){var t="rtl"===document.dir?1:0,i="rtl"===document.dir?0:1;this._setMinValue(this.numberToText(e[t])),this._setMaxValue(this.numberToText(e[i])),this.lowerValue=e[t],this.upperValue=e[i],this._emitChangeEvent()},_onChangeMinValue:function(e){var t=this.tbxMinValue.get("value");t=this.textToNumber?this.textToNumber(t):parseFloat(t),t=Math.min(this.maxValue,Math.max(this.minValue,t)),isNaN(t)||(this.lowerValue=t,this.upperValue=t<=this.upperValue?this.upperValue:t,this.setValue([this.lowerValue,this.upperValue]),this._emitChangeEvent(),this._setMaxValue(this.numberToText(this.upperValue))),this._setMinValue(this.numberToText(this.lowerValue))},_onChangeMaxValue:function(e){var t=this.tbxMaxValue.get("value");t=this.textToNumber?this.textToNumber(t):parseFloat(t),t=Math.min(this.maxValue,Math.max(this.minValue,t)),isNaN(t)||(this.lowerValue=t>=this.lowerValue?this.lowerValue:t,this.upperValue=t,this.setValue([this.lowerValue,this.upperValue]),this.upperValue=t,this._emitChangeEvent(),this._setMinValue(this.numberToText(this.lowerValue))),this._setMaxValue(this.numberToText(this.upperValue))},numberToText:function(e){return e.toFixed(this.decimals)},textToNumber:function(e){return parseFloat(e)},round:function(e){return this.textToNumber(this.numberToText(e))},onChange:function(e){}})});