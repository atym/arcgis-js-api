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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/sniff","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/store/Memory","dijit/_WidgetBase","dijit/_TemplatedMixin","./_HiddenContentSupport","./_ScrollSupport","./_ZoomSupport","../grid/coreUtils/GridDataUtil","./utils/QueryUtil","./utils/SerializationManager","./utils/ContentLoadingEventManager","../supportClasses/DocumentOptions","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../themes/BackgroundThemeUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","dojo/text!../templates/ReportContainerGrid.html"],function(t,e,i,n,o,r,a,s,d,h,g,l,u,c,p,m,_,f,C,w,P,v,M,x,y,G){return t([g,l,u,c,p],{templateString:G,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,showWatermark:!0,isSourceContainer:!0,documentOptions:null,loadingManager:null,serializationManager:null,renderOptions:{center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},_grids:null,_enableAsyncRendering:!0,postCreate:function(){this.serializationManager=(new this._getSerializationManagerClass)(this),this._grids=[],this.inherited(arguments),this.updateLayout(),this.setViewMode(y.PREVIEW_VALUES),this.isSourceContainer&&a.add(this.domNode,"reportContainerGrid_sourceContainer")},_getSerializationManagerClass:function(){return f},setDocumentOptions:function(t,i){this.documentOptions&&e.mixin(this.documentOptions,t),this.updateLayout(i)},updateLayout:function(t){var e=this;this.documentOptions&&(this._updateContainerSize(),this._grids.forEach(function(i,n){t&&void 0!==t.pageIndex&&t.pageIndex!==n||(e._updateGridWrappingNodeForCurrentDocumentLayout(i),i.setMaxWidth(e._getAllowedPageWidth()),i.resizeToFitAllowedWidth(),i.resizeToFitHeight(e._getPageHeight()))}),this._syncFillerContainer())},getFirstPageDomNode:function(){var t=this.stackContainer.children[0];return t&&t.children[0]},getPageDomNodes:function(){return this._getGridContainers()},_getGridContainers:function(){for(var t=[],e=0;e<this.stackContainer.children.length;e++){var i=this.stackContainer.children[e];i&&t.push(i.children[0])}return t},_placeGridContainer:function(t,e){var i=r.create("div",{class:"reportContainerGrid_gridContainerWrapper"}),n=void 0!==e&&this.stackContainer.children[e];n?r.place(i,n,"before"):r.place(i,this.stackContainer),r.place(t,i),t.backgroundImage=r.create("div",{class:"reportContainerGrid_stackContainerBackgroundImage esriGEAbsoluteStretched"},t),o("ie")||this.viewModel.dynamicReportInfo||!this.showWatermark||(this._sampleWatermarkDiv=r.create("div",{class:"sampleValuesWatermark esriGEAbsoluteStretched"},t,"first"))},getGridContainer:function(t){return this._getGridContainer(t)},_getGridContainer:function(t){var e=t.isFloatingTable?t.parentGrid:t;return e.domNode&&e.domNode.parentNode},_getGridContainerWrapper:function(t){var e=this._getGridContainer(t);return e&&e.parentNode},_updateGridWrappingNodeForCurrentDocumentLayout:function(t){t.isEmptyTable()&&d.set(t.domNode,{width:this._getAllowedPageWidth()+"px",height:this._getPageHeight()+"px"});var e=this._getGridContainer(t);if(e){var i=this.viewModel.getDocumentDefaultStyles(this.theme);d.set(e,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px",backgroundColor:this.documentOptions.backgroundColor||i&&i.backgroundColor})}v.applyBackgroundImageFromSettings(e.backgroundImage,i&&i.backgroundImage)},_updateContainerSize:function(){var t=0===this._heigth?"auto":d.get(this.domNode,"height")+"px";d.set(this.mainContainer,"height",t),d.set(this.mainContainer,"maxWidth",this._maxWidth?this._maxWidth+"px":""),d.set(this.mainContainer,"maxHeight",this._maxHeight?this._maxHeight+"px":""),this._syncFillerContainer()},getCurrentPageDim:function(){return w.getPageBox(this.documentOptions)},_getAllowedPageWidth:function(){return this.getCurrentPageDim().contentW},_getPageHeight:function(){return this.getCurrentPageDim().contentH},getCanvasOffsets:function(){var t=s.position(this.mainContainer),e=s.position(this.fillerContainer);return{l:e.x-t.x,r:t.x+t.w-e.x-e.w,w:e.w,h:e.h}},_currentPageIndex:-1,getFullWidth:function(){var t=this.getFirstPageDomNode();return s.getMarginBox(t).w+s.getMarginExtents(this.stackContainer).w},getFullHeight:function(){var t=this.getFirstPageDomNode();return s.getMarginBox(t).h+s.getMarginExtents(this.stackContainer).h},getNumberOfPages:function(){return this._grids.length},showAllPages:function(){this.showPageAt(-1)},showPageAt:function(t){this._grids.forEach(function(e,i){var n=-1===t||t===i,o=M[n?"showNodeFromBackground":"hideNodeInBackground"](this._getGridContainerWrapper(e),"reportContainerPage_"+i);o&&this.own(o),this.isCurrentContainer()&&n&&e.notifyShown()},this),this._currentPageIndex=t,this._syncFillerContainer()},getShownGrid:function(){return this._grids[this._currentPageIndex]},getCurrentPageIndex:function(){return this._currentPageIndex},getGrids:function(){return this._grids},isCurrentContainer:function(){return!1},_width:0,_heigth:0,resize:function(t,e){this._width=void 0===t?this._width:t,this._heigth=void 0===e?this._heigth:e,void 0!==t&&d.set(this.domNode,"width",0===this._width?"auto":this._width+"px"),void 0!==e&&d.set(this.domNode,"height",0===this._heigth?"auto":this._heigth+"px"),this._updateContainerSize()},_maxWidth:0,_maxHeight:0,setMaxWidth:function(t){this._maxWidth=t},setMaxHeight:function(t){this._maxHeight=t},screenToPageCoords:function(t,e){return _.screenToPageCoords(this,t,e)},getLayoutCells:function(t){return t=t||{},_.getLayoutCells(this,{sectionFuncName:t.sectionFuncName,floatingCells:!1!==t.floatingCells})},getCellPageGrid:function(t){return t&&t.parentGrid?t.parentGrid.isFloatingTable?t.parentGrid.parentGrid:t.parentGrid:null},clear:function(t){this._grids.forEach(function(t,e){t.destroy()},this),this._grids.length=0,this.stackContainer&&r.empty(this.stackContainer),this._syncFillerContainer()},_removeGrid:function(t){if(t){var e=this._getGridContainerWrapper(t);t.destroy(),e&&r.destroy(e);var i=this._grids.indexOf(t);this._grids.splice(i,1),this._syncFillerContainer()}},removeGridAt:function(t){this._removeGrid(this._grids[t])},getGridJsonAt:function(t){return this._grids[t].toJson()},setHeight:function(t){d.set(this.mainContainer,"height",t+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(t){this._viewMode!==t&&(this._viewMode=t,t===y.EDIT?(a.add(this.domNode,"reportContainerEditMode"),a.remove(this.domNode,"reportContainerPreviewMode")):(a.remove(this.domNode,"reportContainerEditMode"),a.add(this.domNode,"reportContainerPreviewMode")),this._updateContainerSize(),this._grids.forEach(function(e,i){e.setViewMode(t)},this))},hasFocusedChild:function(){return _.hasFocusedChild(this)},collectFieldInfos:function(t){return _.collectFieldInfos(this,t)},createGridFromSectionTableJson:function(t,e,i){void 0!==e&&"replace"===i&&this._removeGrid(this._grids[e]);var n=r.create("div",{class:"reportContainerGrid_stackContainer"});this._placeGridContainer(n,e);var o=this._createGridFromTableJson(t,n);return o.setMaxWidth(this._getAllowedPageWidth()),o.setSettings({style:{width:this._getAllowedPageWidth(),left:0,spaceBefore:0,spaceAfter:0},viewMode:this._viewMode}),this._updateGridWrappingNodeForCurrentDocumentLayout(o),void 0!==e?this._grids.splice(e,0,o):this._grids.push(o),this._syncFillerContainer(),o},_getGridClass:function(){return this.viewModel.layoutBuilder.getClass("grid")},_createGridFromTableJson:function(t,i){var n=this;return t.data=t.data||{},new(this._getGridClass())(e.mixin({class:"outerAdjustableGrid",fieldCellClass:"outerAdjustableGridCell",viewModel:this.viewModel,theme:this.theme,currentFeatureIndex:this.currentFeatureIndex,parentWidget:this,viewPortContainer:this.mainContainer,reportContainerPageNode:i,isReportContainerPageGird:!0,columns:t.data.columns||[],store:new h({data:t.data.data||[],idProperty:"id"}),backgroundSectionJson:t.backgroundSectionJson,foregroundSectionJson:t.foregroundSectionJson,backgroundFloatingTablesSectionJson:t.backgroundFloatingTablesSectionJson,foregroundFloatingTablesSectionJson:t.foregroundFloatingTablesSectionJson,stickToRight:!0,looseResize:!0,layoutDefaults:{defaultRowHeight:250,rowMinHeight:30,columnMinWidth:50},renderBordersFromTheme:!0,hasRealBorders:!0,inheritThemeBackground:!1,enableBackgroundForeground:!0,enableAsyncRendering:this._enableAsyncRendering,_preRenderFieldCell:function(t){m.getFieldInfo(t)||n.isSourceContainer||m.setFieldInfo(t,n.createEmptySectionJson())},_postCreateFieldCell:function(t){n._postCreateFieldCell(t)},onContentLoadingStart:function(){n.loadingManager&&n.loadingManager.onContentLoadingStart()},onContentLoadingEnd:function(){n.loadingManager&&n.loadingManager.onContentLoadingEnd()}},this._getGridCreationParams(i)),r.create("div",null,i))},_postCreateFieldCell:function(t){},createEmptySectionJson:function(){return P.createFieldInfoFromSection({type:x.EMPTY})},_getGridCreationParams:function(t){return null},notifyShown:function(){n(this.serializationManager.notifyShown(),function(){this.getShownGrid()&&this.getShownGrid().notifyShown()}.bind(this))},getVisualState:function(){return{pages:this._grids.map(function(t,e){return{grid:t.getVisualState()}})}},setVisualState:function(t){t&&t.pages&&t.pages.length===this._grids.length&&this._grids.forEach(function(e,i){var n=t.pages[i];e.setVisualState(n.grid)})},_pagePromise:null,_contentPromise:null,fromJson:function(t,e){e=e||{};var o=this;this._enableAsyncRendering=!e.renderSync,this._pagePromise=null,this._contentPromise=null;var r;e.keepZoom?r=this.getZoomInfo():this.resetZoom(),this._currentPageIndex=-1,this.loadingManager&&this.loadingManager.destroy(),this.loadingManager=null;var a=new i;return e.waitUntilAllContentIsReady?(this.loadingManager=new C,this.loadingManager.init(),this._pagePromise=this.serializationManager.fromJson(t,e),this._contentPromise=n(this._pagePromise,function(){return this._contentPromise=null,this.loadingManager.notifyPagesLoaded(),this.loadingManager.returnOnLoadEnd()}.bind(this))):this._pagePromise=this.serializationManager.fromJson(t,e),n(this._pagePromise,function(){this._pagePromise=null}.bind(this)),n(e.waitUntilAllContentIsReady?this._contentPromise:this._pagePromise,a.resolve,a.reject),n(a.promise,function(){r&&o.setZoomInfo(r)})},getPagePromise:function(){return this._pagePromise},getContentPromise:function(){return this._contentPromise},toJson:function(t){return this.serializationManager.toJson(t)},onPendingDataApplied:function(){},destroy:function(){this.loadingManager&&this.loadingManager.destroy(),this.loadingManager=null,this.clear(),this.inherited(arguments)}})});