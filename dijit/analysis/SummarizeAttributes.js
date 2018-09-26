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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./utils","./CreditEstimator","./_AnalysisOptions","./components/AddSummaryFields","dojo/i18n!../../nls/jsapi","dojo/text!./templates/SummarizeAttributes.html"],function(t,e,i,s,n,o,a,r,l,h,u,d,c,y,m,p,_,f,L,g,b,S,j,w,v,C,I,x,A,F,k,N,B,T,D,P,U,E,O,z){var W=e([p,_,f,L,g,U,T],{declaredClass:"esri.dijit.analysis.SummarizeAttributes",templateString:z,widgetsInTemplate:!0,inputLayer:null,fields:[],summaryFields:null,outputLayerName:null,i18n:null,toolName:"SummarizeAttributes",helpFileName:"SummarizeAttributes",resultParameter:"output",doRefreshItem:!1,constructor:function(t){this._pbConnects=[],t.fields&&"string"==typeof t.fields&&(t.fields=t.fields.split(",")),t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,O.aggregatePointsTool),i.mixin(this.i18n,O.summarizeAttributesTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),h.set(this._fieldSelect.selectNode,"width","90%"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var t={},e={},i=this.constructAnalysisInputLyrObj(this.inputLayer,!0);t.inputLayer=i,t.fields=!0===this._byFieldsCheck.get("checked")?this._fieldSelect.get("value").toString():"[]",t.summaryFields=o.toJson(this._summaryWidget.get("summaryFields")),this.returnFeatureCollection||(t.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=o.toJson({extent:this.map.extent._normalize(!0)})),e.jobParams=t,e.itemParams={description:l.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:l.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),this.execute(e)}},_handleShowCreditsClick:function(t){t.preventDefault();var e={};this._form.validate()&&(e.inputLayer=o.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),e.fields=!0===this._byFieldsCheck.get("checked")?this._fieldSelect.get("value").toString():"[]",e.summaryFields=o.toJson(this._summaryWidget.get("summaryFields")),this.returnFeatureCollection||(e.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,e).then(i.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()})))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&D.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(i.hitch(this,this._updateAnalysisLayerUI,!0))},_handleFieldsCheckChange:function(){this._fieldSelect.set("disabled",!0!==this._byFieldsCheck.get("checked"))},_save:function(){},_buildUI:function(){var t=!0;D.initHelpLinks(this.domNode,this.showHelp),this.inputLayers&&this.inputLayer&&!D.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),D.populateAnalysisLayers(this,"inputLayer","inputLayers"),D.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this.fields&&this.fields.length>0&&(t=!1),this.summaryFields&&(t=!1,this._summaryWidget.set("summaryFields",this.summaryFields)),h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(t){this.folderStore=t,D.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._updateAnalysisLayerUI(t),this._loadConnections()},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_handleAnalysisLayerChange:function(t){var e;this._isAnalysisSelect=!0,"browse"===t?this._createBrowseItems({},this._analysisSelect):"browselayers"===t?(this.showGeoAnalyticsParams&&(e=this._browseLyrsdlg.browseItems.get("query"),e.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",e),this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!1,this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0),this._browseLyrsdlg.show()):(this.set("inputLayer",this.inputLayers[t]),this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t){this.inputLayer&&(D.addAttributeOptions({selectWidget:this._fieldSelect,layer:this.inputLayer,allowStringType:this.showGeoAnalyticsParams,allowSelectLabel:!1}),!t&&this.fields&&this.fields.length>0&&this._fieldSelect.set("value",this.fields),t&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(t){B.isDefined(t)&&(this.inputLayer=t),this._summaryWidget.set("layer",this.get("inputLayer"))},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return D.validateServiceName(t,{textInput:this._outputLayerInput})},_setInputLayersAttr:function(t){B.isDefined(t)&&(this.inputLayers=t)},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))}});return a("extend-esri")&&i.setObject("dijit.analysis.SummarizeAttributes",W,N),W});