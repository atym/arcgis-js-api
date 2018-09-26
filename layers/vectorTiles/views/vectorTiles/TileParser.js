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

define(["require","exports","dojo/promise/all","../../core/executeAsync","../../core/pbf","../../core/promiseUtils","../2d/engine/webgl/TileClipper","../2d/tiling/enums","./BackgroundBucket","./CircleBucket","./Feature","./FillBucket","./LineBucket","./SourceLayerData","./SymbolBucket"],function(e,t,r,i,n,a,l,u,s,c,o,f,h,p,v){return function(){function e(e,t,r){this._pbfTile=new n(new Uint8Array(e),new DataView(e)),this._tile=t,this._connection=r,this._layers=t.getLayers();var i=t.tileKey.split("/").map(parseFloat),a=i[0],u=i[1],s=i[2];if(this._level=a,t.refKey){var c=t.refKey.split("/").map(parseFloat)[0],o=a-c;if(o>0){var f=(1<<o)-1,h=u&f,p=s&f;this._tileClipper=new l.TileClipper(o,h,p)}}this._tileClipper||(this._tileClipper=new l.SimpleBuilder)}return e.prototype.parse=function(){for(var e,t=this,n=this._parseTileData(this._pbfTile),l=this._layers,s=l.length,c=this._level,f=[],h={},p=new Set,v=s-1;v>=0;v--)if(e=l[v],!(e.minzoom&&c<e.minzoom||e.maxzoom&&c>=e.maxzoom||e.layout&&"none"===e.layout.visibility))if(0!==e.type){var _=e.sourceLayer,B=n[_];if(B){p.add(_);var y=this._createBucket(e);if(y){y.layerIndex=v,y.layerExtent=B.extent;var x=h[_];x||(x=h[_]=[]),x.push(y)}}}else{var y=this._createBucket(e);y.layerIndex=v,f.push(y)}var k=10*this._level,D=10*(this._level+1),d=[],g=[],m=[],w=[],I=this._tileClipper,V=new Set,b={},L=[];p.forEach(function(e){return L.push(e)});var T=0,S=0,F=L.length;return i(function(){if(t._tile.status===u.TileStatus.INVALID)return!0;switch(T){case 0:if(S<F){var e=L[S++],r=n[e],i=h[e];if(!i||0===i.length)break;for(var a=r.getData();a.next(2);){var l=new o(a.getMessage(),r),s=l.values;if(s){var c=s._minzoom;if(c&&c>=D)continue;var f=s._maxzoom;if(f&&f<=k)continue}for(var p=0,v=i;p<v.length;p++){var _=v[p];_.pushFeature(l)}}}else{var B=t._tile;for(var e in h)for(var i=h[e],y=0,x=i;y<x.length;y++){var _=x[y];_.hasFeatures()&&(3===_.layer.type?(d.push(_),B.addBucket(_)):_.layer.refLayerId?m.push(_):(g.push(_),w[_.layer.id]=_))}T=1,S=0,F=d.length}break;case 1:if(S<F){d[S++].getResources(I,V,b)}else T=2}return 2===T}).then(function(){if(t._tile.status===u.TileStatus.INVALID)return[];var e,n=[],l=t._tile.getWorkerTileHandler();V.size>0&&(e=l.fetchSprites(V,t._connection),n.push(e));var s;for(var c in b){var o=b[c];o.size>0&&(s=l.fetchGlyphs(t._tile.tileKey,c,o,t._connection),n.push(s))}return r(n).then(function(e){if(t._tile.status===u.TileStatus.INVALID)return[];var r=0,n=0,a=g.length;return i(function(){if(t._tile.status===u.TileStatus.INVALID)return!0;switch(r){case 0:if(n<a){var e=g[n++];e.processFeatures(I,t._tile),f.push(e)}else r=1,n=0,a=m.length;break;case 1:for(var i=0,l=m;i<l.length;i++){var e=l[i],s=w[e.layer.refLayerId];s&&(s.assignBufferInfo(e),f.push(e))}r=2,n=0,a=d.length;break;case 2:if(n<a){var e=d[n++];e.processFeatures(I,t._tile),f.push(e)}else r=3}return 3===r}).then(function(){return f.sort(function(e,t){return e.layerIndex-t.layerIndex}),f})}).catch(function(e){return a.reject(new Error(e))})}).catch(function(e){return a.reject(new Error(e))})},e.prototype._parseTileData=function(e){for(var t={};e.next();)switch(e.tag()){case 3:var r=new p(e.getMessage());t[r.name]=r;break;default:e.skip()}return t},e.prototype._createBucket=function(e){switch(e.type){case 0:return this._createBackgroundBucket(e);case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 4:return this._createCircleBucket(e);case 3:return this._createSymbolBucket(e)}},e.prototype._createBackgroundBucket=function(e){return new s(e,this._level)},e.prototype._createFillBucket=function(e){var t=this._tile;return new f(e,this._level,e.hasDataDrivenFill?t.fillDDVertexBuffer:t.fillVertexBuffer,t.fillIndexBuffer,e.hasDataDrivenOutline?t.outlineDDVertexBuffer:t.outlineVertexBuffer,t.outlineIndexBuffer)},e.prototype._createLineBucket=function(e){var t=this._tile;return new h(e,this._level,e.hasDataDrivenLine?t.lineDDVertexBuffer:t.lineVertexBuffer,t.lineIndexBuffer)},e.prototype._createCircleBucket=function(e){var t=this._tile;return new c(e,this._level,t.circleVertexBuffer,t.circleIndexBuffer)},e.prototype._createSymbolBucket=function(e){var t=this._tile;return new v(e,this._level,e.hasDataDrivenIcon?t.iconDDVertexBuffer:t.iconVertexBuffer,t.iconIndexBuffer,e.hasDataDrivenText?t.textDDVertexBuffer:t.textVertexBuffer,t.textIndexBuffer,t.placementEngine,t.getWorkerTileHandler())},e}()});