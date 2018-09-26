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

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/Base","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","dojo/has","./animation/_DonutAnimation","./labelsRendering/LabelOverlapFixer","./labelsRendering/LabelsUtil"],function(t,e,i,n,a,s,r,l,o,h,u,c){var d={createPath:function(t,e,i,n,a,s,r,l,o,h,u,c){var d=function(a,c,d){e=void 0!==c?c:e;var b=f.getEndAngle(e,a,s,r,o,u,d);1===a&&(b=Number(Math.floor(1e5*b)/1e5));var x=i*l,p=b-e,g=n.cx+i*Math.cos(e),m=n.cy+i*Math.sin(e),v=n.cx+i*Math.cos(b),_=n.cy+i*Math.sin(b);if(x){var y=n.cx+x*Math.cos(e),M=n.cy+x*Math.sin(e),R=n.cx+x*Math.cos(b),P=n.cy+x*Math.sin(b);shape=t.createPath().moveTo(y,M).lineTo(g,m).arcTo(i,i,0,p>Math.PI,!0,v,_).lineTo(R,P).arcTo(x,x,0,p>Math.PI,!1,y,M).closePath().setStroke(h.series.stroke)}else shape=t.createPath().moveTo(n.cx,n.cy).lineTo(g,m).arcTo(i,i,0,p>Math.PI,!0,v,_).lineTo(n.cx,n.cy).closePath().setStroke(h.series.stroke);return specialFill=h.series.fill,shape.setFill(specialFill),{shape:shape,end:b,donutGap:r}};return c.push({isSlice:!0,sliceIndex:a,func:d}),d}},f={getStartAngle:function(t,e){return t.series.donutArcPercent&&100!==t.series.donutArcPercent?(100-t.series.donutArcPercent)/100*360/2-270:(t.series.startAngle||0)+e},getEndAngle:function(t,e,i,n,a,s,r){var l=t+2*e*Math.PI-n;if(i){var o=s+2*Math.PI-n;r||a.series.donutArcPercent&&100!==a.series.donutArcPercent?(l+=n,l=Math.min(l,o)):l=o}return l}};return t([i,n,h],{enableHole:!0,enableGap:!0,startAngleOffset:0,_animationInfos:null,_dataLabels:null,_labelBoxes:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelStyle:"outside",htmlLabels:!0,radGrad:"native",fanSize:5,startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(t,i){this.opt=e.clone(this.defaultParams),l.updateWithObject(this.opt,i),l.updateWithPattern(this.opt,i,this.optionalParams),this.axes=[],this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(t){return this},addSeries:function(t){return this.run=t,this},getSeriesStats:function(){return e.delegate(a.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(t,i){function n(t,e,i){return f.getEndAngle(t,e,i,w,l,y)}if(!this.dirty)return this;this.resetEvents(),this._eventSeries={},this.cleanGroup();var a=this.group,l=this.chart.theme;if(!this.run||!this.run.data.length)return this;var h,u,b,x,p,g,m=(t.width-i.l-i.r)/2,v=(t.height-i.t-i.b)/2/this._getRYMultiplier(l),_=Math.min(m,v),y=s._degToRad(this._getStartAngle(l)),M=y,R=this.events(),P=this.run.data.map(function(t,e){return"number"!=typeof t&&t.hidden&&(this.runFilter.push(e),t.hidden=!1),this.runFilter.some(function(t){return t===e})?"number"==typeof t?0:{y:0,text:t.text}:t},this);this.dyn=[],"radius"in this.opt&&(_=this.opt.radius,g=_);var A,S={cx:i.l+m,cy:i.t+v,r:_};if(u=r.map(P,"x ? Math.max(x.y, 0) : 0"),r.every(u,"<= 0"))return a.createCircle(S).setStroke(l.series.stroke),this.dyn=u.map(function(){return{}}),this;b=r.map(u,"/this",r.foldl(u,"+",0)),this.opt.labels&&(x=b.map(function(t,e){return c.getLabelInfo(this,P[e],l)},this));var L=this.enableHole?(l.series.donutHolePercent||0)/100:0,w=this.enableGap?s._degToRad(l.series.donutGap||0):0;b=this._fixSlices(b,w),this._lastRenderResults={},this._animationInfos=[],this._labelBoxes=[];var T=r.map(P,function(t,e){var i=[this.opt,this.run];return null!=t&&"number"!=typeof t&&i.push(t),this.opt.styleFunc&&i.push(this.opt.styleFunc(t)),l.next("slice",i,!0)},this),k=this._preprocessParams(P,l,_,_*L,m,v,S,b);if(S=k.circle,_=k.r,this.opt.labels)switch(h=0,p=0,x.forEach(function(t,e){h=Math.max(h,t.box.h),p=Math.max(p,t.box.w)}),this.opt.labelStyle){case"outside":var E=_;_=Math.min(m-p,v-h)-5,g=_+p/2,_=Math.max(_,E/2);break;case"inside":var j=(_-_*L)/2+_*L;g=Math.abs(j+(_-p/2))/2;break;case"columns":_=Math.min(m-p-20,v-2*h),g=_}var F=new Array(b.length);if(b.some(function(t,e){t=this._getSliceValueAt(b,e,l);var i,n=P[e],s=T[e];A=_*L;var r=d.createPath(a,M,_,S,e,e+1===b.length,w,L,l,s,y,this._animationInfos)(t),o=r.end;return shape=r.shape,this.dyn.push({fill:void 0,stroke:s.series.stroke}),R&&(i={element:"slice",index:e,run:this.run,shape:shape,x:e,y:"number"==typeof n?n:n.y,cx:S.cx,cy:S.cy,cr:_},this._connectEvents(i),F[e]=i),M=o+w,!1},this),this.opt.labels){var I=o("dojo-bidi")&&this.chart.isRightToLeft();if("outside"===this.opt.labelStyle||"inside"===this.opt.labelStyle){M=y;b.some(function(e,i){e=this._getSliceValueAt(b,i,l);var a=x[i];if(e<=0)return!1;T[i];if(e>=1)return this._labelBoxes.push({x:S.cx-a.box.w/2,y:S.cy+h/2,w:a.box.w,h:a.box.h,text:a.text}),!0;var s=n(M,e,i+1===b.length);if(this.opt.omitLabels&&s-M<.001)return!1;var r=(M+s)/2,o=g;"outside"===this.opt.labelStyle&&(o=1.15*g+(h-p/2-.15*g)*Math.abs(Math.sin(r)));var u=S.cx+o*Math.cos(r),c=S.cy+o*Math.sin(r)+h/2;return this._labelBoxes.push({x:(I?t.width-u:u)-a.box.w/2,y:c-(2===a.numRows?a.box.h/2:0),w:a.box.w,h:a.box.h,text:a.text}),M=s+w,!1},this)}else if("columns"===this.opt.labelStyle){M=y;var B=this.opt.omitLabels,G=[];b.forEach(function(t,e){t=this._getSliceValueAt(b,e,l);var i=n(M,t,e+1===b.length),a=(M+i)/2;G.push({angle:a,left:Math.cos(a)<0,theme:T[e],index:e,omit:!!B&&i-M<.001}),M=i+w},this),this._getProperLabelRadius(G,x[0].box.h,1.1*g);for(var O=0;O<G.length;O++){var V=G[O],W=x[O];if(!V.omit){var C=S.cx-m,H=S.cx+m,Y=W.box.w,q=S.cx+V.labelR*Math.cos(V.angle),z=S.cy+V.labelR*Math.sin(V.angle),D=V.left?C+Y:H-Y,N=V.left?C:D,U=a.createPath().moveTo(S.cx+g*Math.cos(V.angle),S.cy+g*Math.sin(V.angle));U.lineTo(q,z),U.lineTo(D,z).setStroke(V.theme.series.labelWiring),this._labelBoxes.push({x:I?t.width-Y-N:N,y:z,w:W.box.w,h:W.box.h,text:W.text})}}}}this._renderLabels(a,l,t,i);var X=0;return this._eventSeries[this.run.name]=r.map(P,function(t){return t<=0?null:F[X++]}),o("dojo-bidi")&&this._checkOrientation(this.group,t,i),this.dirty=!1,this._lastRenderResults=e.mixin(this._lastRenderResults,{labels:this.opt.labels,radiusInner:A,radiusOuter:_}),this._renderAdditionalElements(P,l,_,A,a,S,b),this.opt.animate&&this._renderAnimation(P,l,_,a,S,b),this},_renderLabels:function(t,e,i,n){this._dataLabels=[],u.fixLabelsOverlap(this._labelBoxes,i,n,this._getFixLabelsParams(),t),this._labelBoxes.forEach(function(i){i.hidden||this._dataLabels.push(this.renderLabel(t,i.x,i.y,i.text,e,!0,"left"))},this)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}},_getStartAngle:function(t){return f.getStartAngle(t,this.startAngleOffset)},_getEndAngle:function(t){return 0},_fixSlices:function(t,e){var i=[],n=0,a=[],s=e/(2*Math.PI)+.001;t.forEach(function(t,e){if(t<s){var r=s-t;t=s,n+=r,a.push(e),i[e]=t}});var r=n/(t.length-a.length);return t.forEach(function(t,e){-1===a.indexOf(e)&&(t-=r,i[e]=t)}),i},_getSliceValueAt:function(t,e,i){return Math.max(0,t[e])*(i.series.donutArcPercent?i.series.donutArcPercent/100:1)},_preprocessParams:function(t,e,i,n,a,s,r,l){return{circle:r,r:i}},_getRYMultiplier:function(t){return Math.max(.625,t.series.donutArcPercent&&100!==t.series.donutArcPercent?(1+Math.cos(s._degToRad(360*(100-t.series.donutArcPercent)/100/2.1)))/2:1)},_renderAdditionalElements:function(t,e,i,n,a,s,r){},_getProperLabelRadius:function(t,e,i){var n,a,s=1,r=1;if(1===t.length)return void(t[0].labelR=i);for(var l=0;l<t.length;l++){var o=Math.abs(Math.sin(t[l].angle));t[l].left?s>=o&&(s=o,n=t[l]):r>=o&&(r=o,a=t[l])}n.labelR=a.labelR=i,this._calculateLabelR(n,t,e),this._calculateLabelR(a,t,e)},_calculateLabelR:function(t,e,i){for(var n,a=t.index,s=e.length,r=t.labelR;!(e[a%s].left^e[(a+1)%s].left);)e[(a+1)%s].omit||(n=(Math.sin(e[a%s].angle)*r+(e[a%s].left?-i:i))/Math.sin(e[(a+1)%s].angle),r=n<t.labelR?t.labelR:n,e[(a+1)%s].labelR=r),a++;a=t.index;for(var l=0===a?s-1:a-1;!(e[a].left^e[l].left);)e[l].omit||(n=(Math.sin(e[a].angle)*r+(e[a].left?i:-i))/Math.sin(e[l].angle),r=n<t.labelR?t.labelR:n,e[l].labelR=r),a--,l--,a=a<0?a+e.length:a,l=l<0?l+e.length:l}})});