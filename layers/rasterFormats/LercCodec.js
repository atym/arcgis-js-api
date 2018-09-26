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

define([],function(){var e={};e.defaultNoDataValue=-3.4027999387901484e38,e.decode=function(l,s){s=s||{};var r=s.encodedMaskData||null===s.encodedMaskData,o=a(l,s.inputOffset||0,r),f=null!=s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=t(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),m={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(m.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(m.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(m.fileInfo=i(o),s.computeUsedBitDepths&&(m.fileInfo.bitDepths=n(o))),m};var t=function(e,t,i,n,a){var s,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),m=Math.floor(e.height/f),d=2*e.maxZError,c=Number.MAX_VALUE;i=i||(e.mask?e.mask.bitset:null);var g,h;g=new t(e.width*e.height),a&&i&&(h=new Uint8Array(e.width*e.height));for(var k,x,w=new Float32Array(u*m),p=0;p<=f;p++){var y=p!==f?m:e.height%f;if(0!==y)for(var V=0;V<=o;V++){var v=V!==o?u:e.width%o;if(0!==v){var B,U,D,M=p*e.width*m+V*u,b=e.width-v,I=e.pixels.blocks[r];I.encoding<2?(0===I.encoding?B=I.rawData:(l(I.stuffedData,I.bitsPerPixel,I.numValidPixels,I.offset,d,w,e.pixels.maxValue),B=w),U=0):D=2===I.encoding?0:I.offset;var A;if(i)for(x=0;x<y;x++){for(7&M&&(A=i[M>>3],A<<=7&M),k=0;k<v;k++)7&M||(A=i[M>>3]),128&A?(h&&(h[M]=1),s=I.encoding<2?B[U++]:D,c=c>s?s:c,g[M++]=s):(h&&(h[M]=0),g[M++]=n),A<<=1;M+=b}else if(I.encoding<2)for(x=0;x<y;x++){for(k=0;k<v;k++)s=B[U++],c=c>s?s:c,g[M++]=s;M+=b}else for(c=c>D?D:c,x=0;x<y;x++){for(k=0;k<v;k++)g[M++]=D;M+=b}if(1===I.encoding&&U!==I.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:g,resultMask:h,minValue:c}},i=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:this.noDataValue}}},n=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},a=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24;var s;if(!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){s=new Uint8Array(Math.ceil(n.width*n.height/8)),l=new DataView(e,t,n.mask.numBytes);var r=l.getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,d=n.pixels.numBlocksY,c=m+(n.width%m>0?1:0),g=d+(n.height%d>0?1:0);n.pixels.blocks=new Array(c*g);for(var h=0,k=0;k<g;k++)for(var x=0;x<c;x++){var w=0,p=e.byteLength-t;l=new DataView(e,t,Math.min(10,p));var y={};n.pixels.blocks[h++]=y;var V=l.getUint8(0);if(w++,y.encoding=63&V,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==V&&2!==V){if(V>>=6,y.offsetType=V,2===V)y.offset=l.getInt8(1),w++;else if(1===V)y.offset=l.getInt16(1,!0),w+=2;else{if(0!==V)throw"Invalid block offset type";y.offset=l.getFloat32(1,!0),w+=4}if(1===y.encoding)if(V=l.getUint8(w),w++,y.bitsPerPixel=63&V,V>>=6,y.numValidPixelsType=V,2===V)y.numValidPixels=l.getUint8(w),w++;else if(1===V)y.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==V)throw"Invalid valid pixel count type";y.numValidPixels=l.getUint32(w,!0),w+=4}}if(t+=w,3!=y.encoding){var v,B;if(0===y.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),B=new Uint8Array(v),B.set(new Uint8Array(e,t,4*U));var D=new Float32Array(v);y.rawData=D,t+=4*U}else if(1===y.encoding){var M=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),b=Math.ceil(M/4);v=new ArrayBuffer(4*b),B=new Uint8Array(v),B.set(new Uint8Array(e,t,M)),y.stuffedData=new Uint32Array(v),t+=M}}}else t++}return n.eofOffset=t,n},l=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,d=0,c=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===d&&(f=e[m++],d=32),d>=t)o=f>>>d-t&u,d-=t;else{var h=t-d;o=(f&u)<<h&u,f=e[m++],d=32-h,o+=f>>>d}l[r]=o<c?n+o*a:s}return l};return e});