(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"41f3":function(t,e,n){"use strict";var o=n("f884"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:n("77a9")}}),o("Home")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",[n("b-row",[n("b-col",[n("h1",[t._v("Video Transcriber")])])],1),n("b-row",{staticClass:"justify-content-md-center title-margin"},[n("b-col",{attrs:{cols:"8"}},[n("p",[t._v("This is a sample web app to transribe videos using IBM Watson Speech-to-Text API.")]),n("h4",[t._v("Instructions:")])])],1),n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{attrs:{cols:"8"}},[n("ol",{attrs:{type:"1"}},[n("li",[t._v("Upload your video in mp4, mov, or avi format (max 50mb).")]),n("li",[t._v("Wait for processing (may take up to 5 minutes).")]),n("li",[t._v("Copy the output into your favorite word processing software.")])])])],1),n("b-row",[n("b-col",{staticClass:"mx-auto",attrs:{cols:"8"}},[n("Upload",{staticClass:"title-margin"})],1)],1),n("b-row",[n("b-col",{staticClass:"mx-auto",attrs:{cols:"8"}},[n("Transcript")],1)],1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions}})],1)},l=[],u=n("92c3"),p=n.n(u),f=(n("1e3f"),{name:"Upload",components:{vueDropzone:p.a},data:function(){return{dropzoneOptions:{url:"http://localhost:3000/upload_video",thumbnailWidth:200,maxFilesize:50,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<b-icon-arrow-up></b-icon-arrow-up><h3>Drop a video here to upload</h3><img src='./upload.png' class='upload-icon'/>"}}}}),d=f,b=(n("41f3"),n("2877")),m=Object(b["a"])(d,c,l,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",{staticClass:"mt-5"},[o("b-col",{attrs:{cols:"3"}},[o("h3",[t._v("Transcription")])]),o("b-col",{staticClass:"text-right",attrs:{cols:"9"}},[o("img",{attrs:{src:n("f0d3"),alt:""}})])],1),o("b-row",{staticClass:"pl-3 pr-3"},[o("b-col",{staticClass:"transcript-container"},[o("samp",[t._v("This text is a sample output from the transcription app.")])])],1)],1)},g=[],w={name:"Transcript"},y=w,_=(n("c89b"),Object(b["a"])(y,h,g,!1,null,null,null)),x=_.exports,O={name:"Home",components:{Upload:v,Transcript:x}},j=O,C=(n("8b71"),Object(b["a"])(j,s,i,!1,null,null,null)),T=C.exports,P=(n("f9e3"),n("2dd8"),{name:"App",components:{Home:T}}),z=P,M=(n("034f"),Object(b["a"])(z,r,a,!1,null,null,null)),S=M.exports,$=n("5f5b"),k=n("b1e0");o["default"].config.productionTip=!1,o["default"].use($["a"]),o["default"].use(k["a"]),new o["default"]({render:function(t){return t(S)}}).$mount("#app")},"77a9":function(t,e,n){t.exports=n.p+"img/ibm-logo-white.23ac7116.png"},"85ec":function(t,e,n){},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var o=n("88d7"),r=n.n(o);r.a},"9edf":function(t,e,n){},c89b:function(t,e,n){"use strict";var o=n("9edf"),r=n.n(o);r.a},f0d3:function(t,e,n){t.exports=n.p+"img/powered-by-watson.ac4ea3f9.png"},f884:function(t,e,n){}});
//# sourceMappingURL=app.f9ce5df1.js.map