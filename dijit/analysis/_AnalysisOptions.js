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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/aspect","dojo/has","dojo/_base/array","dojo/_base/window","dojo/on","dojo/query","dojo/number","./Settings","./SettingsViewModel","./utils","./BrowseLayerMixin","dijit/Dialog","dijit/form/NumberTextBox","dojo/i18n!../../nls/jsapi","../../lang","../../kernel"],function(t,e,s,i,n,o,a,r,h,l,c,u,d,f,g,y,w,_,S,m,p,A){var M=t([w],{declaredClass:"esri.dijit.analysis._AnalysisOptions",showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,showCloseIcon:!0,showSelectAnalysisLayer:!0,map:null,showReadyToUseLayers:!0,showAnalysisBusyIndicator:!0,showGeoAnalyticsParams:!1,showBrowseLayers:!1,showAnalysisModeLabel:!1,distanceDefaultUnits:"Miles",showSettings:!1,showOutputType:!1,context:{},includeRouteLayers:!1,doSaveJobInfo:!1,doSaveInStorage:!1,showCreditCalcBusyIndicator:!0,useArcGISComponents:!1,constructor:function(t){t.rerun&&this._initRerunProps(t)},isAdmin:function(t){return p.isDefined(t.role)&&("org_admin"===t.role||"account_admin"===t.role)},isOwner:function(t,e){return t.owner?t.owner===e.id:t.credential?t.credential.userId===e.username:!!t.userId&&t.userId===e.username},_initRerunProps:function(t){t.OutputName&&t.OutputName.serviceProperties?t.outputLayerName=t.OutputName.serviceProperties.name:t.resultName&&(t.outputLayerName=t.resultName),t.timeStepReference&&(t.timeReference=t.timeStepReference),this.set("extentCheck",t.extentCheck),this._numberFormatHandle=a.before(S,"_setValueAttr",function(t,e,s){return t=d.format(t),[t,e,s]}),this.on("close",e.hitch(this,function(){this._numberFormatHandle&&(this._numberFormatHandle.remove(),this._numberFormatHandle=null)}))},_setShowSelectFolderAttr:function(t){!0===t&&t===this.get("returnFeatureCollection")&&(t=!t),this.showSelectFolder=t,this._webMapFolderSelect&&this._webMapFolderSelect.set("required",t),this._chooseFolderRow&&o.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),t&&this._webMapFolderSelect&&this.getFolderStore().then(e.hitch(this,function(t){this.folderStore=t,y.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(t){this.showChooseExtent=t},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setExtentCheckAttr:function(t){this.extentCheck=t,p.isDefined(this._useExtentCheck)&&p.isDefined(t)&&this._useExtentCheck.set("checked",t)},_setMapAttr:function(t){this.map=t},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(t){this.showHelp=t},_getShowHelpAttr:function(){return this.showHelp},_setReturnFeatureCollectionAttr:function(t){this.returnFeatureCollection=t,this.set("showSelectFolder",!t)},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setShowCreditsAttr:function(t){this.showCredits=t,this._showCreditsLink&&(this._onCreditsClickHandle=c.pausable(this._showCreditsLink,"click",e.hitch(this,this._handleShowCreditsClick)))},_getShowCreditsAttr:function(){return this.showCredits},_setShowCloseIconAttr:function(t){this.showCloseIcon=t},_getShowCloseIconAttr:function(){return this.showCloseIcon},_setShowSelectAnalysisLayerAttr:function(t){this.showSelectAnalysisLayer=t,this._analysisSelect&&this._analysisSelect.set("required",t)},_getShowSelectAnalysisLayerAttr:function(){return this.showSelectAnalysisLayer},_setIsSingleTenantAttr:function(t){this.isSingleTenant=t},_getIsSingleTenantAttr:function(){return this.isSingleTenant},_setAllowChooseLabelAttr:function(t){this.allowChooseLabel=t},_getAllowChooseLabelAttr:function(){return this.allowChooseLabel},_setTitleAttr:function(t){this.title=t,this._toolTitle&&s.set(this._toolTitle,"innerHTML",t)},_getTitleAttr:function(){return this.title=s.get(this._toolTitle,"innerHTML"),this.title},_setShowReadyToUseLayersAttr:function(t){this.showReadyToUseLayers=t},_getShowReadyToUseLayersAttr:function(t){return this.showReadyToUseLayers},_setFolderIdAttr:function(t){this.folderId=t},_getFolderIdAttr:function(){return this._webMapFolderSelect&&this.folderStore&&(this.folderId=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):""),this.folderId},_setFolderNameAttr:function(t){this.folderName=t},_getFolderNameAttr:function(){return this._webMapFolderSelect&&this.folderStore&&this._webMapFolderSelect.item&&(this.folderName=this.folderStore.getValue(this._webMapFolderSelect.item,"name")),this.folderName},_setHelperServicesAttr:function(t){this.helperServices=t},_getHelperServicesAttr:function(t){return this.helperServices},_getPortalSelfAttr:function(){return this.portalSelf},_setPortalSelfAttr:function(t){this.portalSelf=t},_setShowAnalysisBusyIndicatorAttr:function(t){t&&this.own(this.on("start",e.hitch(this,function(){this.showLoadingIndicator()})),this.on("job-fail, job-result, job-cancel",e.hitch(this,function(){this.hideLoadingIndicator()})),this.on("job-status",e.hitch(this,function(t){"esriJobFailed"===t.jobStatus&&this.hideLoadingIndicator()})))},_setShowGeoAnalyticsParamsAttr:function(t){this.showGeoAnalyticsParams=t},_getShowGeoAnalyticsParamsAttr:function(){return this.showGeoAnalyticsParams},_setShowBrowseLayersAttr:function(t){this.showBrowseLayers=t},_getShowBrowseLayersAttr:function(){return this.showBrowseLayers},showLoadingIndicator:function(){this.get("showAnalysisBusyIndicator")&&(this._saveBtn.set("iconClass","esriLoading"),this.set("disableRunAnalysis",!0))},hideLoadingIndicator:function(){this.get("showAnalysisBusyIndicator")&&(this._saveBtn.set("iconClass",""),this.set("disableRunAnalysis",!1))},_setDistanceDefaultUnitsAttr:function(t){this.distanceDefaultUnits=t},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setAnalysisModeAttr:function(t){this.analysisMode=t},_setShowAnalysisModeLabelAttr:function(t){this.showAnalysisModeLabel=t,this._titleLbl&&this._analysisModeLblNode&&(o.set(this._titleLbl,"display",this.showAnalysisModeLabel?"none":"block"),o.set(this._analysisModeLblNode,"display",this.showAnalysisModeLabel?"flex":"none"),this.showAnalysisModeLabel&&("standard"===this.analysisMode?this.analysisModeLabel=this.i18n.standard:"bigdata"===this.analysisMode||this.showGeoAnalyticsParams?this.analysisModeLabel=this.i18n.bigData:"raster"===this.analysisMode&&(this.analysisModeLabel=this.i18n.raster),s.set(this._analysisModeCrumb,"innerHTML",this.analysisModeLabel)))},_getTimeReferenceAttr:function(){if(this._timeRefDay){var t,e,s,i,n="",o="",a="";t=this._timeRefDay.get("value"),e=this._timeRefTime.get("value"),t&&(n=t.toDateString(),a="Date"),e&&(o=e.toTimeString(),a="DateTime"),this.set("timeReferenceType",a),s=o&&-1!==o.indexOf("GMT")?n+" "+o.substring(0,o.indexOf("GMT")+"GMT".length):o?n+" "+o.split(" ")[0]+" GMT":n+" GMT",i=new Date(s),this.timeReference=i.getTime()}return this.timeReference},_setTimeReferenceAttr:function(t){var e=new Date(t),s=new Date(t+60*e.getTimezoneOffset()*1e3);this._timeRefDay&&this._timeRefDay.set("value",s),this._timeRefTime&&"DateTime"===this.timeReferenceType&&this._timeRefTime.set("value",s)},_setTimeReferenceTypeAttr:function(t){this.timeReferenceType=t},_setSLayersAttr:function(t){this.sLayers=t},_setContextAttr:function(t){this.context=t},_setIncludeRouteLayersAttr:function(t){this.includeRouteLayers=t},_getIncludeRouteLayersAttr:function(){return this.includeRouteLayers},_setShowSettingsAttr:function(t){if(this.showSettings=t,t){if(!y.settingsDlg){var s=l.doc.createDocumentFragment(),i=n.create("div",{style:"width:200px;height:200px;"},s),o=h.filter(this.sLayers,function(t){return!t.type||"Table"!==t.type});y.settingsVM=new g({showHelp:!0,showCloseIcon:!1,showOverwriteResultOption:!1,showCloseAnalysisOption:!0,showStoreAnalysisOption:!0,showCoordinateSystems:this.analysisMode&&("raster"===this.analysisMode||"bigdata"===this.analysisMode),showProcessSR:this.analysisMode&&"bigdata"===this.analysisMode,showOutSR:this.analysisMode&&"raster"===this.analysisMode,showExtent:!0,showRasterSettings:this.analysisMode&&"raster"===this.analysisMode,showGeoAnalyticsSettings:this.analysisMode&&"bigdata"===this.analysisMode,showHeader:!1,layers:o,showJobsHistory:!1,jobsHistoryItem:null}),this.signInPromise.then(e.hitch(this,function(){y.settingsVM.set("portalUrl",this.portalUrl)})),y.settings=new f({viewModel:y.settingsVM},i),this.i18n||(this.i18n={},e.mixin(this.i18n,m.common),e.mixin(this.i18n,m.analysisTools),e.mixin(this.i18n,m.analysisMsgCodes),e.mixin(this.i18n,m.analysisSettings)),y.settingsDlg=new _({title:this.i18n.analysisEnv,content:y.settings,style:"width:400px;"}),y.settingsDlg.own(y.settings.on("ok-settings",e.hitch(this,function(){y.settingsDlg.hide()})),y.settings.on("cancel-settings",e.hitch(this,function(){y.settingsDlg.hide()})))}if(y.settingsDlg&&(y.settingsVM.set("showRasterSettings",this.analysisMode&&"raster"===this.analysisMode),y.settingsVM.set("showGeoAnalyticsSettings",this.analysisMode&&"bigdata"===this.analysisMode),y.settingsVM.set("showCoordinateSystems",this.analysisMode&&("raster"===this.analysisMode||"bigdata"===this.analysisMode)),y.settingsVM.set("showProcessSR",this.analysisMode&&"bigdata"===this.analysisMode),y.settingsVM.set("showOutSR",this.analysisMode&&"raster"===this.analysisMode),this.domNode&&u("[esriHelpTopic='toolDescription']",this.domNode).forEach(e.hitch(this,function(t){t&&(this._settingsLink=n.create("a",{href:"#",class:"esriAnalysisSettingsIcon"},t,"before"),c(this._settingsLink,"click",e.hitch(this,this._handleSettingsLinkClick)))})),!this._settingWatchers)){this._settingWatchers=!0;var a=this.get("context");y.settingsVM.extent&&(a.extent=y.settingsVM.extent,this._useExtentCheck&&this._useExtentCheck.set("checked",!1)),y.settingsVM.outSR&&(a.outSR=y.settingsVM.outSR),y.settingsVM.processSR&&(a.processSR=y.settingsVM.processSR),y.settingsVM.extent&&(a.extent=y.settingsVM.extent,this._useExtentCheck&&this._useExtentCheck.set("checked",!1)),y.settingsVM.cellSize&&(a.cellSize=y.settingsVM.cellSize),y.settingsVM.mask&&(a.mask=y.settingsVM.mask),y.settingsVM.snapRaster&&(a.snapRaster=y.settingsVM.snapRaster),this.set("returnFeatureCollection",y.settingsVM.returnFeatureCollection),this.set("context",a),y.settingsVM.watch("outSR",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.outSR=s,this.set("context",i))})),y.settingsVM.watch("processSR",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.processSR=s,this.set("context",i))})),y.settingsVM.watch("extent",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.extent=s,this.set("context",i)),this._useExtentCheck&&this._useExtentCheck.set("checked",!p.isDefined(s))})),y.settingsVM.watch("cellSize",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.cellSize=s,this.set("context",i))})),y.settingsVM.watch("mask",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.mask=s,this.set("context",i))})),y.settingsVM.watch("snapRaster",e.hitch(this,function(t,e,s){var i=this.get("context");i&&(i.snapRaster=s,this.set("context",i))})),y.settingsVM.watch("returnFeatureCollection",e.hitch(this,function(t,e,s){this.set("returnFeatureCollection",s)}))}}},_setShowOutputTypeAttr:function(t){this.showOutputType=t},_setDoSaveJobInfoAttr:function(t){this.doSaveJobInfo=t},_setDoSaveInStorageAttr:function(t){this.doSaveInStorage=t},_getResultNameAttr:function(t){return this.resultName="",this.outputLayerInput?this.resultName=this.outputLayerInput.get("value"):this._outputLayerInput&&(this.resultName=this._outputLayerInput.get("value")),this.resultName},_setArcadeEditorAttr:function(t){this.arcadeEditor=t},_setShowCreditCalcBusyIndicatorAttr:function(t){var s=[];this._showCreditsLink&&(t?(s.push(a.before(this,"_handleShowCreditsClick",e.hitch(this,function(){var t=this._form&&this._form.validate();"DeriveNewLocations"===this.toolName||"FindExistingLocations"===this.toolName?t=t&&this.expressionGrid.validate():"EnrichLayer"==this.toolName&&(t=t&&this.validateSelectedGrid()),t?this._pauseCreditLinkClick(this._onCreditsClickHandle,!0):this._pauseCreditLinkClick(this._onCreditsClickHandle,!1)}))),s.push(a.after(this._usageForm,"_setContentAttr",e.hitch(this,function(){this._pauseCreditLinkClick(this._onCreditsClickHandle,!1)})))):s.forEach(function(t){t.remove(),t=null}))},_setuseArcGISComponentsAttr:function(t){this.useArcGISComponents=t},_getuseArcGISComponentsAttr:function(t){return this.useArcGISComponents},_handleSettingsLinkClick:function(){this.showSettingsDlg()},showSettingsDlg:function(t){t&&t.preventDefault(),this._hasPCSWarnShown&&this.showGeoAnalyticsParams&&this._errorMessagePane&&y.hideMessages(this._errorMessagePane),y.settingsDlg.show()},_handleModeCrumbClick:function(t){t.preventDefault(),this._onClose(!1)},_onFocus:function(){this.map&&"function"==typeof this.map.disableKeyboardNavigation&&this.map.disableKeyboardNavigation(),this.emit("focus"),this.inherited(arguments)},_onBlur:function(){this.map&&"function"==typeof this.map.enableKeyboardNavigation&&this.map.enableKeyboardNavigation(),this.emit("blur"),this.inherited(arguments)},_handleAtrrValueUpdate:function(t,e,s){var i,n;"0"!==s&&(i=this.get("statisticSelect"),(n=this.getOptions(s))&&n.type&&y.addStatisticsOptions({selectWidget:i,type:n.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams}))},_pauseCreditLinkClick:function(t,e){e?(t.pause(),o.set(this._showCreditsLink,{color:"grey",cursor:"none"}),i.add(this._showCreditsLink,"esriAnalysisTextDisabled esriLoadingBar2")):(t.resume(),o.set(this._showCreditsLink,{color:"#21759B",cursor:"pointer"}),i.remove(this._showCreditsLink,"esriAnalysisTextDisabled esriLoadingBar2"))},constructAnalysisInputLyrObj:function(t,e){return e=p.isDefined(e)?e:this.isSingleTenant&&"ExtractData"!==this.toolName,y.constructAnalysisInputLyrObj(t,e,!this.showGeoAnalyticsParams)}});return r("extend-esri")&&e.setObject("dijit.analysis._AnalysisOptions",M,A),M});