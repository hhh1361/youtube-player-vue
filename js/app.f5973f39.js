(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/youtube-player-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"04b8":function(t,e,n){},"14a8":function(t,e,n){"use strict";var r=n("3111"),i=n.n(r);i.a},1569:function(t,e,n){},3111:function(t,e,n){},"3f64":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("5f5b"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"app-container"},[n("div",{staticClass:"player-section"},[n("GoogleOauth"),n("Player")],1),n("div",{staticClass:"search-section"},[n("Search"),n("List")],1)])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[t.playerEnabled?n("iframe",{staticClass:"iframe",attrs:{title:"iframe",width:"620",height:"340",src:t.url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}}):t._e()])},c=[],u={name:"Player",computed:{url:function(){return"https://www.youtube.com/embed/".concat(this.$store.state.currentVideo)},playerEnabled:function(){return!!this.$store.state.currentVideo}},methods:{}},l=u,p=(n("c977"),n("2877")),d=Object(p["a"])(l,s,c,!1,null,"272cf862",null),f=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list",on:{scroll:t.loadMoreVideos}},[t._l(t.list,(function(e,r){return n("ListItem",{key:e.etag+r,attrs:{id:e.id,snippet:e.snippet,etag:e.etag}},[t._v(" /> ")])})),n("div",{class:t.spinnerClassName})],2)},g=[],m=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"list-item",attrs:{fluid:""}},[n("div",{staticClass:"list-item_author"},[t._v(" "+t._s(t.author)+" ")]),n("div",{staticClass:"list-item_preview",style:{backgroundImage:"url('"+t.snippet.thumbnails.high.url+"')"},on:{click:t.chooseVideo}}),n("div",{staticClass:"list-item_description"},[t._v(" "+t._s(t.description)+" ")])])},b=[],y={name:"ListItem",props:{etag:{type:String,default:"",required:!0},id:{type:Object,default:function(){},required:!0},snippet:{type:Object,default:function(){},required:!0}},computed:{author:function(){return this.snippet.channelTitle},description:function(){return this.snippet.title}},methods:{chooseVideo:function(){console.log(this.snippet),this.$store.commit("chooseVideo",this.id.videoId)}}},w=y,x=(n("14a8"),Object(p["a"])(w,v,b,!1,null,"1a410a63",null)),_=x.exports;n("99af"),n("d3b7");function O(t,e){return k.apply(this,arguments)}function k(){return k=Object(m["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="AIzaSyDr_ETbJ4lZMciyedL_PSI1VgtxlbNMnRU",i="https://www.googleapis.com/youtube/v3/search?key=".concat(r,"&type=video&part=snippet&maxResults=15&q=").concat(e),n&&(i+="&pageToken=".concat(n)),t.next=5,fetch(i);case 5:if(a=t.sent,console.log(a),!a.ok){t.next=13;break}return t.next=10,a.json();case 10:return o=t.sent,console.log(o),t.abrupt("return",o);case 13:return console.log("Ошибка: ".concat(a.status)),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}var L={name:"List",components:{ListItem:_},computed:{list:function(){return this.$store.state.list},text:function(){return this.$store.state.searchInfo.searchText},token:function(){return this.$store.state.searchInfo.nextPageToken},isLoading:function(){return this.$store.state.isLoading},spinnerClassName:function(){return this.isLoading?"spinner":"hide"}},methods:{loadMoreVideos:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isLoading){n.next=10;break}if(r=t.target,!(r.scrollTop+r.clientHeight>=r.scrollHeight-500)){n.next=10;break}return e.$store.commit("isLoading",!0),n.next=6,O(e.text,e.token);case 6:i=n.sent,e.$store.commit("addVideos",i.items),e.$store.commit("updateToken",i.nextPageToken),e.$store.commit("isLoading",!1);case 10:case"end":return n.stop()}}),n)})))()}}},T=L,j=(n("a2e4"),Object(p["a"])(T,h,g,!1,null,"79a969e4",null)),$=j.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("input",{staticClass:"search",attrs:{placeholder:"Type to search..."},on:{keyup:t.setList,change:t.setList}}),n("input",{staticClass:"searchSubmit",attrs:{type:"button",value:"Find"},on:{change:t.setList}})])},S=[],I={name:"Search",data:function(){return{timer:null,searchText:null}},methods:{setList:function(t){var e=this;clearTimeout(this.timer),this.searchText!==t.target.value&&t.target.value&&("keyup"===t.type?this.timer=setTimeout((function(){e.applyDataFromApi(t)}),2e3):this.applyDataFromApi(t))},applyDataFromApi:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$store.commit("isLoading",!0),e.$store.commit("setList",[]),e.searchText=t.target.value,n.next=5,O(t.target.value);case 5:r=n.sent,e.$store.commit("isLoading",!1),e.$store.commit("setList",r.items),e.$store.commit("setSearchInfo",{searchText:t.target.value,nextPageToken:r.nextPageToken});case 9:case"end":return n.stop()}}),n)})))()}}},P=I,V=(n("ea5b"),Object(p["a"])(P,C,S,!1,null,"127de29e",null)),E=V.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"app-container"},[n("div",{staticClass:"nav"},[t.profile?t._e():n("div",{attrs:{id:"google-signin-btn"}})]),n("div",{staticClass:"profile"},[t.profile?n("div",{staticClass:"profile-avatar",style:{backgroundImage:t.avatar}}):t._e(),t.profile?n("div",{staticClass:"profile-description"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t.profile?n("button",{staticClass:"sign-out",attrs:{id:"sign-out"},on:{click:t.signOut}},[t._v(" Sign out ")]):t._e()])])},R=[],A=(n("a4d3"),n("e01a"),{name:"GoogleOauth",components:{},data:function(){return{profile:!1,avatar:null,description:null}},mounted:function(){window.addEventListener("google-loaded",this.renderGoogleLoginButton)},methods:{onSignIn:function(t){var e=t.getBasicProfile();this.profile=e,this.avatar="url('".concat(e.hL,"')"),this.description="Signed as ".concat(this.profile.Bd)},signOut:function(){var t=this,e=window.gapi.auth2.getAuthInstance();e.signOut().then((function(){t.profile=null,window.location.reload(!0)}))},renderGoogleLoginButton:function(){window.gapi.signin2.render("google-signin-btn",{onsuccess:this.onSignIn})}}}),B=A,F=(n("73b4"),Object(p["a"])(B,M,R,!1,null,null,null)),G=F.exports,q={name:"App",components:{Player:f,List:$,Search:E,GoogleOauth:G}},D=q,J=(n("034f"),Object(p["a"])(D,a,o,!1,null,null,null)),N=J.exports,H=n("5530"),z=n("2f62");r["default"].config.productionTip=!1,r["default"].config.devtools=!0,r["default"].use(z["a"]);var U=new z["a"].Store({state:{list:[],currentVideo:"",searchInfo:{searchText:"",nextPageToken:""},isLoading:!1},getters:{},mutations:{setList:function(t,e){t.list=e},addVideos:function(t,e){t.list=t.list.concat(e)},chooseVideo:function(t,e){t.currentVideo=e},setSearchInfo:function(t,e){t.searchInfo=e},updateToken:function(t,e){t.searchInfo=Object(H["a"])(Object(H["a"])({},t.searchInfo),{},{nextPageToken:e})},isLoading:function(t,e){t.isLoading=e}},actions:{}});n("f9e3"),n("2dd8");r["default"].use(i["a"]),new r["default"]({store:U,render:function(t){return t(N)}}).$mount("#app")},"73b4":function(t,e,n){"use strict";var r=n("bedc"),i=n.n(r);i.a},"85ec":function(t,e,n){},a2e4:function(t,e,n){"use strict";var r=n("04b8"),i=n.n(r);i.a},bedc:function(t,e,n){},c977:function(t,e,n){"use strict";var r=n("3f64"),i=n.n(r);i.a},ea5b:function(t,e,n){"use strict";var r=n("1569"),i=n.n(r);i.a}});
//# sourceMappingURL=app.f5973f39.js.map