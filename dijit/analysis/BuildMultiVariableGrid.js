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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/Deferred","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/Evented","dojo/query","dojo/dom-class","dojo/fx/easing","dojo/NodeList","dojo/NodeList-dom","dojo/on","dojo/topic","dojo/when","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/ConfirmDialog","dijit/Dialog","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/DateTextBox","dijit/form/NumberTextBox","dijit/form/TimeTextBox","dijit/Toolbar","dgrid1/OnDemandGrid","dgrid1/Editor","dgrid1/Keyboard","dgrid1/Selection","dgrid1/Selector","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./BuildMultiVariablesList","./utils","./storeUtils","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/BuildMultiVariableGrid","dojo/text!./templates/BuildMultiVariableGrid.html"],function(t,i,e,s,a,n,r,o,l,h,d,u,c,_,y,p,m,b,f,g,v,L,C,w,S,j,B,A,x,G,P,I,D,T,U,N,V,k,M,E,F,q,z,O,H,R,W,J,K,Q,X,Y,Z,$,tt,it,et,st,at,nt,rt){var ot=i([O,R,W,J,H,K,Q]),lt=i([w,S,j,B,A,$,Z],{declaredClass:"esri.dijit.analysis.BuildMultiVariableGrid",templateString:rt,widgetsInTemplate:!0,outputLayerName:null,i18n:null,toolName:"BuildMultiVariableGrid",helpFileName:"BuildMultiVariableGrid",resultParameter:"output",binType:"square",constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),e.mixin(this.i18n,nt)},postCreate:function(){this.inherited(arguments),this._buildUI()},startup:function(){},_save:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1),this.variableCalculations=[],this.usedLayers=[],this.inputLayers=[],this._gridEditHandle&&(this._gridEditHandle.remove(),this._gridEditHandle=null),this.emit("close",{save:t})},_handleShowCreditsClick:function(t){t.preventDefault(),this._form.validate()&&this._buildJobParams().then(e.hitch(this,function(t){var i=t&&t.jobParams;this.getCreditsEstimate(this.toolName,i).then(e.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()}))}))},_buildJobParams:function(){var t,i,a,r,l,h,d={},u=new o;return this._layerVarGrid.refresh(),this.set("variableCalculations",[]),this._layerVarGrid.collection.fetch().then(e.hitch(this,function(e){if(this.set("variableCalculations",e.slice()),d.binType=this.binType,d.binSize=this._binsInput.get("value"),d.binSizeUnit=this._binUnits.get("value"),i=s.map(this.variableCalculations,function(t){return t.layer}),a=s.filter(this.inputLayers,function(t,e){return-1!==s.indexOf(i,e)}),r=s.map(a,function(t){return t.name}),d.inputLayers=s.map(a,function(t){return this.constructAnalysisInputLyrObj(t,this.showGeoAnalyticsParams)},this),l=s.map(this.variableCalculations,function(t){var i,e=s.indexOf(r,t.name);return-1!==e&&(i=e),{layer:i,variables:t.variables}}),d.variableCalculations=n.toJson(l),this.returnFeatureCollection||(d.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),t={},(this.showGeoAnalyticsParams||this.returnFeatureCollection)&&(t.outSR=this.map.spatialReference),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),d.context=n.toJson(t),this.showGeoAnalyticsParams&&d.binType&&!(h=et.checkPCSforAnalysis({widget:this,jobParams:d,hasPCSWarnShown:this._hasPCSWarnShown,inputLayers:a}))&&!this._hasPCSWarnShown)return void(this._hasPCSWarnShown=!0);u.resolve({jobParams:d})})),u.promise},_handleSaveBtnClick:function(){if(this._form.validate()){if(!this.showGeoAnalyticsParams&&!this._sumMetricCheck.get("checked")&&0===this.get("summaryFields").length)return void this._showMessages(this.i18n.statsRequiredMsg);this._saveBtn.set("disabled",!0),this._buildJobParams().then(e.hitch(this,function(t){var i={};i.jobParams=t&&t.jobParams,this._saveBtn.set("disabled",!1),i.itemParams={description:this.i18n.itemDescription,tags:this.i18n.itemTags,snippet:this.i18n.itemSnippet},this.showSelectFolder&&(i.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(i.isSpatioTemporalDataStore=!0),this.execute(i)}))}},_buildUI:function(){var t=!0;m.add(this._form.domNode,"esriSimpleForm"),this._attrDialog.set("buttonOk",this.i18n.add),p(".dijitDialogPaneActionBar",this._attrDialog.domNode).forEach(function(t,i){m.add(t,"esriFloatTrailing")},this),p(".dijitButton",this._attrDialog.domNode).forEach(function(t,i){0===i?m.add(t,this.primaryActionButttonClass):m.add(t,"btn calcite")},this),this.signInPromise.then(e.hitch(this,function(t){var i,e;if(this.portalUrl?i=this.portalUrl:this.analysisGpServer&&(e=X.id.findServerInfo(this.analysisGpServer),Y.isDefined(e)&&Y.isDefined(e.owningSystemUrl)&&(i=e.owningSystemUrl)),this.rerun&&this.usedLayers){var a=this.usedLayers.slice();s.forEach(this.inputLayers,function(t){et.isLayerInLayers(t,a)||a.push(t)},this),this.inputLayers=a.slice()}this._attrBuilder=new it({map:this.map,portalUrl:i,showGeoAnalyticsParams:this.showGeoAnalyticsParams,showReadyToUseLayers:this.showReadyToUseLayers,showBrowseLayers:this.showBrowseLayers,inputLayer:this.inputLayer,inputLayers:this.inputLayers,helpFileName:this.helpFileName,isSingleTenant:this.isSingleTenant,portalthis:this.portalthis},_.create("div",null,this._attrDialogContent)),this.variableCalculations&&this.variableCalculations.length>0&&(s.forEach(this.variableCalculations,function(t){t.name||(t.name=this.inputLayers[t.layer]&&this.inputLayers[t.layer].name)},this),this._createLayerGrid())})),et.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&this.inputLayers&&this.inputLayer&&!et.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.showGeoAnalyticsParams&&this.distanceDefaultUnits&&this._binUnits.set("value",this.distanceDefaultUnits),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(t){this.folderStore=t,et.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._loadConnections(),this.showGeoAnalyticsParams&&("hexagon"!==this.binType&&"square"!==this.binType||(this.binSize&&this._binsInput.set("value",this.binSize),this.binSizeUnit&&this._binUnits.set("value",this.binSizeUnit),this._handleBinTypeChange(this.binType.toLowerCase(),!0)),this.showGeoAnalyticsParams&&c.set(this._outputHelp,"esriHelpTopic","outputName")),this._updateAnalysisLayerUI(t,!0)},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1)),this._connect(this._square,"onclick",e.hitch(this,"_handleBinTypeChange","square")),this._connect(this._hexagon,"onclick",e.hitch(this,"_handleBinTypeChange","hexagon")),this._connect(this._addProximityAttrBtn,"onclick",e.hitch(this,this._handleAddProximityAttrBtnClick))},_createLayerGrid:function(){var t=i([w,y],{value:null,i18n:null,buildRendering:function(){this.inherited(arguments),this._toolbar=new z({class:"esriFloatTrailing"});var t=new G({iconClass:"esriAnalysisDeleteIcon",title:this.i18n.remove}),i=new G({iconClass:"esriAnalysisEditIcon",title:this.i18n.edit});this._toolbar.addChild(i),this._toolbar.addChild(t),i.on("click",e.hitch(this,function(){this.grid.collection.get(this.value.id).then(e.hitch(this,function(t){L.publish("multivariablegrid/edit",t)}))})),t.on("click",e.hitch(this,function(){this.grid.collection.remove(this.value.id)})),this.domNode.appendChild(this._toolbar.domNode)},_setValueAttr:function(t){this.value=t},_getValueAttr:function(){return this.value},destroy:function(){this._toolbar.destroy(),this.inherited(arguments)}});this._layerVarGrid=new ot({className:"dgrid-autoheight esriListItemGrid",collection:st.createStore(this.variableCalculations),showHeader:!1,cellNavigation:!1,selectionMode:"single"},this._gridDiv),this._layerVarGrid.startup();var s=[{field:"name",label:"Name",className:"esriGridCellEllipses"},{label:"Operations",sortable:!1,editor:t,editorArgs:{grid:this._layerVarGrid,i18n:this.i18n}}];this._layerVarGrid.set("columns",s),this.own(this._gridEditHandle=L.subscribe("multivariablegrid/edit",e.hitch(this,this._handleEditLayerClick)))},_handleAnalysisLayerChange:function(t){this._isAnalysisSelect=!0,"browse"===t?this._createBrowseItems({},this._analysisSelect):"browselayers"===t?(this.showGeoAnalyticsParams&&(p=this._browseLyrsdlg.browseItems.get("query"),p.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",p)),this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[t],this.inputLayer&&this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t,i){},_validateBins:function(){return this._binsInput.validate()&&this._binUnits.validate()},_handleAddProximityAttrBtnClick:function(t){this._validateBins()&&(this._action="add",this._attrBuilder&&(this._attrBuilder.set("binSize",this._binsInput.get("value")),this._attrBuilder.set("binSizeUnit",this._binUnits.get("value")),this._attrBuilder.reset(),this._attrBuilder.set("mode",this._action)),this._attrDialog.set("buttonOk",this.i18n.add),this._attrDialog.show())},_handleEditLayerClick:function(t){this._validateBins()&&(this._action="edit",this._attrBuilder&&(this._attrBuilder.set("binSize",this._binsInput.get("value")),this._attrBuilder.set("binSizeUnit",this._binUnits.get("value")),this._attrBuilder.set("inputLayer",this.inputLayers[t.layer]),this._attrBuilder.set("layerVariables",t),this._attrBuilder.set("mode",this._action)),this._attrDialog.set("buttonOk",this.i18n.save),this._curItem=t,this._attrDialog.show())},_handleBrowseItemsSelect:function(t,i){t&&t.selection&&et.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:t.dialog||this._browsedlg,widget:this},i).always(e.hitch(this,function(){this.inputLayer=this.inputLayers[this._analysisSelect.get("value")],this._updateAnalysisLayerUI(!0)}))},_handleBinTypeChange:function(t,i){var e="square"===t?this.i18n.selectSqBinSizeLbl:"hexagon"===t?this.i18n.selectHexBinSizeLbl:"";m.toggle(this._square,"selected","square"===t),m.toggle(this._hexagon,"selected","hexagon"===t),this.binType=t,c.set(this._binSizeLabel,"innerHTML",e)},_handleAddVarDlg:function(){if(this._attrBuilder&&!this._attrBuilder.validate())return void this._attrDialog.show();var t=this._attrBuilder.get("layerVariables");if(this.variableCalculations||(this.variableCalculations=[]),this.variableCalculations.push(t),this._layerVarGrid){if("add"===this._action){this._layerVarGrid.collection.filter({layer:t.layer}).forEach(function(t){}).then(e.hitch(this,function(i){var e,s=i.totalLength>0;s&&(e=i[0]),s?(e.variables=e.variables.concat(t.variables),this._layerVarGrid.collection.put(e,{overwrite:!0,id:e.id})):this._layerVarGrid.collection.put(t)}))}else this._layerVarGrid.collection.put(t,{overwrite:!0,id:this._curItem.id});this._layerVarGrid.refresh()}else this._createLayerGrid();this._attrDialog.hide()},_handleVarDlgCancel:function(){this._layerVarGrid&&this._layerVarGrid.refresh(),this._attrDialog.hide()},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(t){t&&t.length>0?this.inputLayers=t.slice():this.inputLayers=[]},_setInputLayerAttr:function(t){this.inputLayer=t},_setVariableCalculationsAttr:function(t){t&&t.length>0?this.variableCalculations=t.slice():this.variableCalculations=[]},_getVariableCalculationsAttr:function(t){return this.variableCalculations},_setUsedLayersAttr:function(t){t&&t.length>0?this.usedLayers=t.slice():this.usedLayers=[]},_getUsedLayersAttr:function(t){return this.variableCalculations},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return et.validateServiceName(t,{textInput:this._outputLayerInput})},_connect:function(t,i,e){this._pbConnects.push(a.connect(t,i,e))},_showMessages:function(t){c.set(this._bodyNode,"innerHTML",t),r.fadeIn({node:this._errorMessagePane,easing:b.quadIn,onEnd:e.hitch(this,function(){u.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(t){t&&t.preventDefault(),r.fadeOut({node:this._errorMessagePane,easing:b.quadOut,onEnd:e.hitch(this,function(){u.set(this._errorMessagePane,{display:"none"})})}).play()}});return l("extend-esri")&&e.setObject("dijit.analysis.BuildMultiVariableGrid",lt,X),lt});