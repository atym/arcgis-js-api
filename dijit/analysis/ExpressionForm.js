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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/_base/event","dojo/Evented","dojo/fx/easing","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/Tooltip","../../kernel","../../lang","./utils","../SingleFilter","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExpressionForm.html"],function(e,t,i,s,n,r,a,o,d,h,l,p,c,u,_,y,O,g,f,w,b,S,x,m,v,F,j,T,L,A,D,R,C,B,E,U,I,P,M,G,W){var q=t([w,b,S,x,m,O],{declaredClass:"esri.dijit.analysis.ExpressionForm",templateString:W,widgetsInTemplate:!0,firstOperands:null,defaultUnits:"english",showFirstRow:!0,showUnique:!0,constructor:function(e){e.containerNode&&(this.container=e.containerNode),this._setClasses(e)},_setClasses:function(e){this._addBtnClass=e.primaryActionButttonClass||"esriAnalysisSubmitButton"},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n={},i.mixin(this.i18n,G.common),i.mixin(this.i18n,G.expressionGrid),i.mixin(this.i18n,G.expressionForm)},postCreate:function(){this.inherited(arguments),this.attributeChangeHandler=n.subscribe("filter-expression-change",i.hitch(this,this._handleAttributeFilterChange)),this._distanceInput.set("validator",i.hitch(this,this._validateDistance)),this.set("action","add"),l.set(this._firstRow,"display",this.showFirstRow?"":"none"),this.own(this.watch("showUnique",i.hitch(this,function(e,t,i){this._attributeFilter&&this._attributeFilter.set("showUnique",i)})))},init:function(){if(this.showReadyToUseLayers&&this.owningWidget&&!this._browseTitle&&(this._browseTitle=P._isCustomAnalysisQuery(this.owningWidget)?this.i18n.browseAnalysisLayers:this.i18n.browseAnalysisTitle),this._firstOperandSelect&&this.firstOperands&&this.inputOperands){this._firstOperandSelect.getOptions()&&this._firstOperandSelect.removeOption(this._firstOperandSelect.getOptions());var e,t,i=this.inputOperands.length,n=this.firstOperands.length,r=[];for(e=0;e<i;e+=1)for(t=0;t<n;t+=1)I.isDefined(this.inputOperands[e].id)&&I.isDefined(this.firstOperands[t].id)&&this.inputOperands[e].id===this.firstOperands[t].id?r[this.firstOperands[t].id]=e.toString():I.isDefined(this.inputOperands[e].name)&&I.isDefined(this.firstOperands[t].name)&&this.inputOperands[e].name===this.firstOperands[t].name&&(r[this.firstOperands[t].name]=e.toString());s.forEach(this.firstOperands,function(e,t){I.isDefined(e)&&this._firstOperandSelect.addOption({value:r[e.id||e.name],label:e.name})},this),this.selectedFirstOperand&&(I.isDefined(this.selectedFirstOperand.id)||(this.selectedFirstOperand.id=this.selectedFirstOperand.name),this._firstOperandSelect.set("value",r[this.selectedFirstOperand.id])),(this.get("showReadyToUseLayers")||this.get("showReadyLayersForFirst"))&&this._firstOperandSelect.addOption({type:"separator",value:""}),this.get("showReadyToUseLayers")&&this.get("showReadyLayersForFirst")&&this._firstOperandSelect.addOption({value:"browse",label:this._browseTitle}),this.get("showBrowseLayers")&&this.get("showReadyLayersForFirst")&&this._firstOperandSelect.addOption({value:"browselayers",label:this.i18n.browseLayers}),1!==i||this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||this._operatorSelect&&this._operatorSelect.getOptions()&&(this._operatorSelect.removeOption(this._operatorSelect.getOptions()),this._operatorSelect.addOption({value:"where",label:this.i18n.where}))}"add"===this.get("action")&&(this._operatorSelect.set("value","where"),this._handleOperatorChange("where"),this._distanceInput.set("value",""),"metric"===this.defaultUnits?this._distanceUnitsSelect.set("value","Kilometers"):this._distanceUnitsSelect.set("value","Miles"))},startup:function(){},clear:function(){this.init()},_validateDistance:function(e){var t=this._operatorSelect.get("value");return-1===s.indexOf(["withinDistance","notWithinDistance"],t)||(e=f.parse(e))&&0<parseFloat(e,10)&&parseFloat(e,10)<1/0},_handleAttributeFilterChange:function(){var e,t;this._attributeFilter&&(t=this._attributeFilter.toJson(),e=this._attributeFilter.builtSingleFilterString(t),e.whereClause?this._addBtn.set("disabled",!1):this._addBtn.set("disabled",!0))},_handleSecondOperandChange:function(e){"browse"!==e&&"browselayers"!==e||(this.owningWidget.layersSelect=this._secondOperandSelect,this.owningWidget.showReadyToUseLayersDialog(!1,e))},_handleFirstOperandChange:function(e){"browse"!==e&&"browselayers"!==e||!this.get("showReadyLayersForFirst")?this._handleOperatorChange("where"):(this.owningWidget.layersSelect=this._firstOperandSelect,this.owningWidget.showReadyToUseLayersDialog(!0,e))},_handleDistanceInputChange:function(e){this._addBtn.set("disabled",!this._distanceInput.validate())},_handleOperatorChange:function(e){var t,i=this._operatorSelect.get("value");-1===s.indexOf(["where","withinDistance","notWithinDistance"],i)?this._buildSpatialExpression(i):"where"===i?(t=parseInt(this._firstOperandSelect.get("value"),10),this.inputOperands[t],this._buildAttributeExpression(i)):-1!==s.indexOf(["withinDistance","notWithinDistance"],i)&&this._buildDistanceExpression(i)},_isValidSecondOperand:function(e,t,i){var s=!1;return"contains"===e||"notContains"===e?("esriGeometryPoint"!==t&&"esriGeometryMultipoint"!==t||"esriGeometryPoint"!==i&&"esriGeometryMultipoint"!==i)&&("esriGeometryPolyline"!==t||"esriGeometryPoint"!==i&&"esriGeometryPolyline"!==i&&"esriGeometryMultipoint"!==i)?"esriGeometryPolygon"===t&&(s=!0):s=!0:"within"===e||"notWithin"===e?"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?s=!0:"esriGeometryPolyline"!==t||"esriGeometryPolygon"!==i&&"esriGeometryPolyline"!==i?"esriGeometryPolygon"===t&&"esriGeometryPolygon"===i&&(s=!0):s=!0:s=!0,s},_isValidFirstOperand:function(e){var t=!0;return e&&e.fields?e.fields&&1===e.fields.length&&"esriFieldTypeOID"===e.fields[0].type&&(this._showMessages(h.substitute(this.i18n.inValidAttributeFilterMessage,{layername:e.name})),t=!1):t=!1,t},_buildSpatialExpression:function(e){var t,i,n;t=parseInt(this._firstOperandSelect.get("value"),10),i=this.inputOperands[t],n=i.geometryType,this._addBtn.set("disabled",!1),this._distanceInput.set("required",!1),l.set(this._attrFilterDiv,"display","none"),l.set(this._secondOperandSelect.domNode,"display",""),this._secondOperandSelect&&(this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),s.forEach(this.inputOperands,function(t,i){i.toString()!==this._firstOperandSelect.get("value")&&this._isValidSecondOperand(e,n,t.geometryType)&&(this._secondOperandSelect.addOption({value:i.toString(),label:t.name}),""!==this._secondOperandSelect.get("value")&&this._secondOperandSelect.get("value")||this._secondOperandSelect.set("value",i.toString()))},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers"))&&this._secondOperandSelect.addOption({type:"separator",value:""}),this.get("showReadyToUseLayers")&&this._secondOperandSelect.addOption({value:"browse",label:this._browseTitle}),this.get("showBrowseLayers")&&this._secondOperandSelect.addOption({value:"browselayers",label:this.i18n.browseLayers}),l.set(this._secondRow,"display",""),l.set(this._secondExpressionDiv,"display","none"),l.set(this._secondOperandTd,"display",""),l.set(this._secondOperandSelect,{display:"",width:"75%"}))},_buildAttributeExpression:function(e){var t,i;this._distanceInput.set("required",!1),l.set(this._secondExpressionDiv,"display","none"),this._secondOperandSelect&&this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),l.set(this._secondOperandSelect.domNode,"display","none"),t=parseInt(this._firstOperandSelect.get("value"),10),i=this.inputOperands[t],this._isValidFirstOperand(i)?(this._addBtn.set("disabled",!0),l.set(this._secondRow,"display",""),l.set(this._attrFilterDiv,"display",""),this._attributeFilter&&(this._attributeFilter.init({mapLayer:i,version:i.version,fields:i.fields,allowAllDateTypes:!0,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:null}),this._attributeFilter.set("showUnique",this.showUnique)),this._attributeFilter||(this._attributeFilter=new M({class:"filterSegment",mapLayer:i,version:i.version,fields:i.fields,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:null,enableEvents:!0,isEnableInteractiveFilter:!1,allowAllDateTypes:!0,showUnique:this.showUnique},c.create("div",{},this._attrFilterDiv)),this._attributeFilter.fillFieldsList(this._attributeFilter.fieldsStore))):(l.set(this._secondRow,"display","none"),l.set(this._attrFilterDiv,"display","none"),this._addBtn.set("disabled",!0))},_buildDistanceExpression:function(e){this._addBtn.set("disabled",!this._distanceInput.validate()),this._distanceInput.set("required",!0),l.set(this._secondRow,"display",""),l.set(this._secondOperandTd,"display",""),l.set(this._secondOperandSelect.domNode,"display",""),l.set(this._secondExpressionDiv,{display:"",width:"75%"}),l.set(this._secondOperandSelect,{display:"",width:"75%"}),l.set(this._attrFilterDiv,"display","none"),this._secondOperandSelect&&this._secondOperandSelect.getOptions()&&(this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),s.forEach(this.inputOperands,function(e,t){t.toString()!==this._firstOperandSelect.get("value")&&this._secondOperandSelect.addOption({value:t.toString(),label:e.name})},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers"))&&this._secondOperandSelect.addOption({type:"separator",value:""}),this.get("showReadyToUseLayers")&&this._secondOperandSelect.addOption({value:"browse",label:this._browseTitle}),this.get("showBrowseLayers")&&this._secondOperandSelect.addOption({value:"browselayers",label:this.i18n.browseLayers}))},_handleAddButtonClick:function(e){if(y.stop(e),this._expressionForm&&!this._expressionForm.validate())return void this.emit("cancel-expression",{});this.set("expression"),this.emit("add-expression",{expression:this.get("expression"),text:this.get("text"),displayText:this.get("displayText"),action:this.get("action")})},_handleCloseButtonClick:function(e){y.stop(e),this.emit("cancel-expression",{})},_setInputOperandsAttr:function(e){this.inputOperands=e},_getInputOperandsAttr:function(){return this.inputOperands},_setFirstOperandsAttr:function(e){this.firstOperands=e},_getFirstOperandsAttr:function(e){return this.firstOperands},_setSelectedFirstOperandAttr:function(e){this.selectedFirstOperand=e},_getExpressionAttr:function(e){return this.expression},_setExpressionAttr:function(e){var t,n,r=!1;e?this._operatorSelect&&(this._firstOperandSelect.set("value",e.layer),this._operatorSelect.set("value",e.spatialRel?e.spatialRel:"where"),"where"===this._operatorSelect.get("value")?r=!0:(-1!==s.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&(this._distanceInput.set("value",e.distance),this._distanceUnitsSelect.set("value",e.units)),setTimeout(i.hitch(this,function(){this._secondOperandSelect.set("value",e.selectingLayer)}),100))):(e={},this._operatorSelect&&(e.layer=parseInt(this._firstOperandSelect.get("value"),10),"where"===this._operatorSelect.get("value")?(t=this._attributeFilter.toJson(),n=this._attributeFilter.builtSingleFilterString(t),e._attributeFilter=n,e._attributeExprObj=t,e._attributeText=this._attributeFilter.buildFriendlyTextExpr(t),e.where=n.whereClause):(e.selectingLayer=parseInt(this._secondOperandSelect.get("value"),10),e.spatialRel=this._operatorSelect.get("value"),-1!==s.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&(e.distance=this._distanceInput.get("value"),e.units=this._distanceUnitsSelect.get("value"))))),this.expression=e,r&&this._handleOperatorChange("where")},_showMessages:function(e){p.set(this._bodyNode,"innerHTML",e),a.fadeIn({node:this._errorMessagePane,easing:g.quadIn,onEnd:i.hitch(this,function(){l.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),a.fadeOut({node:this._errorMessagePane,easing:g.quadOut,onEnd:i.hitch(this,function(){l.set(this._errorMessagePane,{display:"none"})})}).play()},_setActionAttr:function(e){this.action=e},_getActionAttr:function(){return this.action},_setTextAttr:function(e){this.text=e},_getTextAttr:function(){var e="";return this.expression&&(e=this.inputOperands[this.expression.layer].name),this.expression.spatialRel?(e+=" "+this.i18n[this.expression.spatialRel],this.expression.distance&&(e+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),e+=" "+this.inputOperands[this.expression.selectingLayer].name):e+=" "+this.i18n.whereLabel+" "+this.expression._attributeText,e},_getDisplayTextAttr:function(){var e,t,i="";return this.expression&&(e=this.inputOperands[this.expression.layer].name,i+=this.shortenString(e)),this.expression.spatialRel?(i+=" <label style='font-style: italic;'>"+this.i18n[this.expression.spatialRel],this.expression.distance&&(i+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),i+="</label>",t=this.inputOperands[this.expression.selectingLayer].name,i+=" "+this.shortenString(t)):i+=" <label style='font-style: italic;'>"+this.i18n.whereLabel+" "+this.expression._attributeText+"</label",i+="</tr></tbody></table>"},shortenString:function(e){return"<label style='overflow: hidden;text-overflow: ellipsis'>"+e+"</label></td>"},_setPrimaryActionButttonClassAttr:function(e){this.primaryActionButttonClass=e},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_setShowFirstRowAttr:function(e){this.showFirstRow=e},_getShowFirstRowAttr:function(){return this.showFirstRow},_setShowReadyToUseLayersAttr:function(e){this._set("showReadyToUseLayers",e)},_setShowReadyLayersForFirstAttr:function(e){this._set("showReadyLayersForFirst",e)},_setShowBrowseLayersAttr:function(e){this._set("showBrowseLayers",e)},_setOwningWidgetAttr:function(e){this._set("owningWidget",e)}});return o("extend-esri")&&i.setObject("dijit.analysis.ExpressionForm",q,U),q});