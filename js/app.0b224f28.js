(function(e){function t(t){for(var n,i,c=t[0],l=t[1],o=t[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var l=s[c];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/discord-json-scroller-v2/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("a026"),a=s("2f62"),r=s("fc06");class i{constructor(){this.id=null,this.name=null,this.iconURL=null,this.members=new Map,this.emojis=new Map,this.roles=new Map,this.channels=new Map}}class c{constructor(){this.id=null,this.name=null,this.parentID=null,this.messages=[],this.nsfw=null,this.topic=null,this.position=null,this.type=null}}class l{constructor(){this.id=null,this.authorID=null,this.content=null,this.createdTimestamp=null,this.editedTimestamp=null,this.attachments=[],this.type=null}}class o{constructor(){this.id=null,this.nickname=null,this.roles=[],this.user=null}}class u{constructor(){this.id=null,this.avatarURL=null,this.username=null,this.tag=null}}class m{constructor(){this.id=null,this.name=null,this.color=null,this.permissions=null,this.position=null}}class d{constructor(){this.id=null,this.name=null,this.size=null,this.url=null}}class h{constructor(){this.id=null,this.name=null,this.url=null}}const f=e=>{const t=new i;t.id=e.id,t.name=e.name,t.iconURL=e.iconURL;const s=t.roles;for(const i of e.roles){const e=new m;e.id=i.id,e.name=i.name,e.color=i.color,e.permissions=i.permissions,e.position=i.position,Object.freeze(e),s.set(e.id,e)}const n=t.members;for(const i of e.members){const t=new o;if(t.id=i.id,t.nickname=i.nickname,"archivebot-v1"===e.version||"archivebot-v2"===e.version)for(const e of i.roles)t.roles.push(s.get(e.id));else for(const e of i.roles)t.roles.push(s.get(e));const a=new u;a.id=i.user.id,a.avatarURL=i.user.avatarURL,a.username=i.user.username,a.tag=i.user.tag,t.user=a,Object.freeze(a),Object.freeze(t),n.set(t.id,t)}const a=t.emojis;for(const i of e.emojis){const e=new h;e.id=i.id,e.name=i.name,e.url=i.url,Object.freeze(e),a.set(e.id,e)}const r=t.channels;for(const i of e.channels){const e=new c;if(e.id=i.id,e.name=i.name||i.id,e.parentID=i.parentID||null,e.nsfw=!0===i.nsfw,e.topic=i.topic,e.position=i.position,e.type=i.type,"text"===i.type){const t=e.messages;for(let e=0;e<i.messages.length;e++){const s=i.messages[e],n=new l;if(n.id=s.id,n.authorID=s.author,n.content=s.content,n.createdTimestamp=s.createdTimestamp,n.editedTimestamp=s.editedTimestamp,n.type=s.type||"DEFAULT",s.attachments.length>0)for(const e of s.attachments){const t=new d;t.id=e.id,t.name=e.name,t.size=e.size,t.url=e.url,n.attachments.push(t)}Object.freeze(n),t.push(n)}Object.freeze(t)}Object.freeze(e),r.set(e.id,e)}return t};var p=f;const v=e=>{const t=new i,s=t.members;for(const r of e.members){const e=new o;e.id=r.user.id,e.nickname=r.nickname;const t=new u;t.id=r.user.id,t.username=r.user.username,t.tag=r.user.username+"#"+r.user.discriminator,e.user=t,Object.freeze(t),Object.freeze(e),s.set(e.id,e)}const n=t.emojis;for(const r of e.emojis){const e=new h;e.id=r.id,e.name=r.name,e.url=r.url,Object.freeze(e),n.set(e.id,e)}const a=t.channels;for(const r of e.channels){const e=new c;e.id=r.id,e.name=r.name,e.nsfw=!1,e.topic=r.topic,e.position=r.position,e.type="text";const t=e.messages;for(let s=0;s<r.messages.length;s++){const e=r.messages[s],n=new l;if(n.id=e.id,n.authorID=e.author,n.content=e.content,n.createdTimestamp=e.createdTimestamp,n.editedTimestamp=e.editedTimestamp,n.type="DEFAULT",e.attachments.length>0)for(const t of e.attachments){const e=new d;e.id=t.id,e.name=t.filename,e.size=t.filesize,e.url=t.url,n.attachments.push(e)}Object.freeze(n),t.push(n)}t.reverse(),Object.freeze(t),Object.freeze(e),a.set(e.id,e)}return t};var b=v;const j=e=>{const t=new i,s=t.members,n=t.channels,a=new c;a.id=0,a.name="<only channel>",a.nsfw=!1,a.position=0,a.type="text";const r=a.messages;for(const i of e){const e=JSON.parse(i),t=new l;if(t.id=e.id,t.authorID=e.user.id,t.content=e.content,t.createdTimestamp=e.createdTimestamp,t.editedTimestamp=e.editedTimestamp,t.type="DEFAULT",e.attachments.length>0)for(const s of e.attachments){const e=new d;e.id=s.id,e.name=s.filename,e.size=s.filesize,e.url=s.url,t.attachments.push(e)}if(!s.has(e.user.id)){const t=new o,n=new u;n.id=e.user.id,n.username=e.user.username,n.tag=e.user.username+"#"+e.user.discriminator,Object.freeze(n),t.id=e.user.id,t.user=n,Object.freeze(t),s.set(t.id,t)}Object.freeze(t),r.push(t)}return Object.freeze(r),n.set(a.id,a),t};var g=j;const y=e=>{return e.version?e.version:e instanceof Array?"toonmemebot-channel-snapshot":e.channels&&e.members&&e.emojis?e.id?"archivebot-v1":"toonmemebot-server-snapshot":null},x=e=>{const t=y(e);switch(t){case"archivebot-v1":case"archivebot-v2":case"archivebot-v3":return p(e);case"toonmemebot-server-snapshot":return b(e);case"toonmemebot-channel-snapshot":return g(e);default:throw new Error(`Unknown archive version ${t}`)}};var w=x,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"messages-container"},e._l(e.messages,(function(t){return s("message",{key:t.id,attrs:{message:t,server:e.server}})})),1)},_=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message"},[s("div",{staticClass:"message-data"},[s("div",{staticClass:"username"},[e._v("\n\t\t\t"+e._s(e.getUsername())+"\n\t\t")]),s("div",{staticClass:"timestamp"},[e._v("\n\t\t\t"+e._s(e.formatTimestamp(e.message.createdTimestamp))+"\n\t\t")]),s("div",{staticClass:"index"},[e._v("\n\t\t\t"+e._s(e.message.id)+"\n\t\t")])]),s("div",{staticClass:"message-content"},[s("div",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"message-text"},[e._v("\n\t\t\t"+e._s(e.message.content)+"\n\t\t")]),e.message.attachments?s("div",{staticClass:"message-attachments"},e._l(e.message.attachments,(function(e){return s("Attachment",{key:e.id,attrs:{attachment:e}})})),1):e._e()])])},O=[],z=s("c1df"),M=s.n(z),T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isImage()?s("img",{attrs:{src:e.attachment.url}}):s("div",{staticClass:"attachment"},[s("a",{attrs:{href:e.attachment.url}},[e._v(e._s(e.attachment.name))]),s("span",[e._v(e._s(e.attachment.size)+" bytes")])])])},A=[],B={name:"Attachment",props:{attachment:{type:Object,required:!0}},data:function(){return{}},methods:{isImage(){const e=this.attachment.url.split(".").slice(-1)[0].toLowerCase();return"png"===e||"jpeg"===e||"jpg"===e||"gif"===e}}},F=B,U=s("2877"),I=Object(U["a"])(F,T,A,!1,null,null,null),L=I.exports,P={name:"Message",components:{Attachment:L},props:{message:{type:Object,required:!0},server:{type:Object,required:!0}},data:()=>{return{}},methods:{getUsername:function(){const e=this.server.members.get(this.message.authorID);return e?null!==e.nickname?e.nickname:e.user.username:`<@${this.message.authorID}>`},formatTimestamp:e=>{return M()(parseInt(e)).format("MMM D Y h:mm:ss A")}}},R=P,D=Object(U["a"])(R,C,O,!1,null,null,null),J=D.exports,$={name:"MessageList",components:{Message:J},props:{messages:{type:Array,required:!0}},data:()=>{return{}},computed:{...Object(a["b"])(["server"])}},N=$,S=Object(U["a"])(N,k,_,!1,null,null,null),E=S.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-col",attrs:{id:"channels-panel"}},[s("p",{attrs:{id:"channel-list-header"}},[e._v("\n\t\tChannels:\n\t")]),s("channel-sublist",{attrs:{"channel-hierarchy":e.channelHierarchy}})],1)},H=[],G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"channel-list"},e._l(e.channelHierarchy,(function(t){return s("li",{key:t.channel.id},[s("div",{class:{channel:!0,"text-channel":"text"===t.channel.type,"voice-channel":"voice"===t.channel.type,"category-channel":"category"===t.channel.type,selected:e.$store.state.activeChannelId===t.channel.id},on:{click:function(s){return e.handleClick(t.channel)}}},[s("span",{staticClass:"channel-name"},[e._v(e._s(t.channel.name))])]),0!==t.childChannels.length?s("channel-sublist",{attrs:{"channel-hierarchy":t.childChannels}}):e._e()],1)})),0)},Y=[],K={name:"ChannelSublist",props:{channelHierarchy:{type:Array,required:!0}},data:function(){return{}},methods:{handleClick(e){switch(e.type){case"text":this.$store.commit("setActiveChannel",e.id);break;case"category":break;default:break}}}},Q=K,V=Object(U["a"])(Q,G,Y,!1,null,null,null),W=V.exports;function X(e,t,s){for(const[n,a]of s)a.parentID===t&&e.push({channel:a,childChannels:X([],a.id,s)});return e.sort((e,t)=>{let s=e.channel.position,n=t.channel.position;return"category"===e.channel.type&&s++,"category"===t.channel.type&&n++,s-n}),e}var Z={name:"ChannelList",components:{ChannelSublist:W},data:function(){return{}},computed:{channelHierarchy(){return X([],null,this.server.channels)},...Object(a["b"])(["server"])},methods:{}},ee=Z,te=Object(U["a"])(ee,q,H,!1,null,null,null),se=te.exports,ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-expand flex-shrink flex-col"},[s("div",{staticClass:"flex-row flex-collapse"},[s("div",{attrs:{id:"navigation"}},[s("div",{staticClass:"nav-section"},[s("span",[e._v("From")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.renderRangeMin,expression:"renderRangeMin",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.renderRangeMin},on:{input:function(t){t.target.composing||(e.renderRangeMin=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),s("span",[e._v("message(s) back, to")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.renderRangeMax,expression:"renderRangeMax",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.renderRangeMax},on:{input:function(t){t.target.composing||(e.renderRangeMax=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),s("span",[e._v("message(s) back")]),s("button",{on:{click:e.renderMessages}},[e._v("\n\t\t\t\t\tRender\n\t\t\t\t")])]),s("hr"),s("div",{staticClass:"nav-section"},[s("span",[e._v("Jump to message w/ ID")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.messageJumpId,expression:"messageJumpId"}],attrs:{type:"text"},domProps:{value:e.messageJumpId},on:{input:function(t){t.target.composing||(e.messageJumpId=t.target.value)}}}),s("span",[e._v("with")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.messageJumpContextAmount,expression:"messageJumpContextAmount",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.messageJumpContextAmount},on:{input:function(t){t.target.composing||(e.messageJumpContextAmount=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),s("span",[e._v("surrounding message(s)")]),s("button",{on:{click:e.jumpMessages}},[e._v("\n\t\t\t\t\tJump\n\t\t\t\t")])])])]),s("message-list",{attrs:{messages:e.messages}})],1)},ae=[],re={name:"ChannelMessagesPanel",components:{MessageList:E},data:()=>{return{renderRangeMin:1,renderRangeMax:10,messageJumpId:"",messageJumpContextAmount:1,messages:[]}},computed:{...Object(a["b"])(["server"])},methods:{renderMessages(){const e=this.server.channels.get(this.$store.state.activeChannelId),t=e.messages.slice(e.messages.length-(this.renderRangeMax-1),e.messages.length-(this.renderRangeMin-1));this.messages=t},jumpMessages(){const e=this.messageJumpId;let t,s;const n=this.server.channels;for(const[i,c]of n)if(t=c.messages.findIndex(t=>t.id===e),-1!==t){s=c;break}if(-1===t)return;const a=this.messageJumpContextAmount,r=s.messages.slice(Math.max(0,t-a),t+a+1);this.$store.commit("setActiveChannel",s.id),this.messages=r}}},ie=re,ce=Object(U["a"])(ie,ne,ae,!1,null,null,null),le=ce.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{"flex-col":!0,collapsed:!e.visible},attrs:{id:"find-panel"}},[s("div",{staticClass:"flex-row",attrs:{id:"find-controls"}},[s("div",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filterByText,expression:"filterByText"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.filterByText)?e._i(e.filterByText,null)>-1:e.filterByText},on:{change:function(t){var s=e.filterByText,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);n.checked?i<0&&(e.filterByText=s.concat([r])):i>-1&&(e.filterByText=s.slice(0,i).concat(s.slice(i+1)))}else e.filterByText=a}}}),s("span",[e._v(" Contains text: ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.textFilter,expression:"textFilter"}],attrs:{type:"text"},domProps:{value:e.textFilter},on:{input:function(t){t.target.composing||(e.textFilter=t.target.value)}}})]),s("div",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filterByUser,expression:"filterByUser"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.filterByUser)?e._i(e.filterByUser,null)>-1:e.filterByUser},on:{change:function(t){var s=e.filterByUser,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);n.checked?i<0&&(e.filterByUser=s.concat([r])):i>-1&&(e.filterByUser=s.slice(0,i).concat(s.slice(i+1)))}else e.filterByUser=a}}}),s("span",[e._v(" From user (name or ID): ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userFilter,expression:"userFilter"}],attrs:{type:"text"},domProps:{value:e.userFilter},on:{input:function(t){t.target.composing||(e.userFilter=t.target.value)}}})]),s("div",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filterByChannel,expression:"filterByChannel"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.filterByChannel)?e._i(e.filterByChannel,null)>-1:e.filterByChannel},on:{change:function(t){var s=e.filterByChannel,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);n.checked?i<0&&(e.filterByChannel=s.concat([r])):i>-1&&(e.filterByChannel=s.slice(0,i).concat(s.slice(i+1)))}else e.filterByChannel=a}}}),s("span",[e._v(" From channel: ")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.channelFilter,expression:"channelFilter"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.channelFilter=t.target.multiple?s:s[0]}}},e._l(e.server.channels.values(),(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v("\n\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t")])})),0)]),s("div",[s("button",{on:{click:e.searchMessages}},[e._v("\n\t\t\t\tFind\n\t\t\t")])])]),s("message-list",{attrs:{messages:e.foundMessages}}),s("div",{attrs:{id:"find-toggle"},on:{click:function(t){e.visible=!e.visible}}},[e._v("\n\t\t🔍\n\t")])],1)},ue=[],me={name:"FindPanel",components:{MessageList:E},props:[],data:()=>{return{filterByText:!1,filterByUser:!1,filterByChannel:!1,textFilter:"",userFilter:"",channelFilter:"",visible:!1,foundMessages:[]}},computed:{...Object(a["b"])(["server"])},methods:{searchMessages(){const e=1e4;let t=[];const s=this.server.channels;for(const[n,a]of s){if("text"!==a.type||this.filterByChannel&&this.channelFilter!==a.id)continue;let e=a.messages;if(this.filterByText){const t=this.textFilter.toLowerCase();e=e.filter(e=>e.content.toLowerCase().includes(t))}const s=this.server.members;this.filterByUser&&(e=e.filter(e=>e.author===this.userFilter||s[e.author].username===this.userFilter)),t=t.concat(e)}t.length>e?alert(`More than ${e} messages found. Not displaying results.`):this.foundMessages=t.sort((e,t)=>e.createdTimestamp-t.createdTimestamp)}}},de=me,he=Object(U["a"])(de,oe,ue,!1,null,null,null),fe=he.exports;n["a"].use(a["a"]);const pe=e=>{return new Promise((t,s)=>{const n=new FileReader;n.addEventListener("load",e=>{t(JSON.parse(e.target.result))}),n.addEventListener("error",e=>{s(e.target.error)}),n.readAsText(e)})},ve=new a["a"].Store({state:{server:{channels:[],members:[]},activeChannelId:null},mutations:{setServer(e,t){e.server=t},setActiveChannel(e,t){e.activeChannelId=t}}}),be=(e,t)=>{e=r(e,t.value)};n["a"].directive("linkified",be),document.addEventListener("DOMContentLoaded",()=>{new n["a"]({el:"#app",store:ve,components:{MessageList:E,ChannelListPanel:se,ChannelMessagesPanel:le,FindPanel:fe},data:{},computed:{...Object(a["b"])(["server"])},methods:{loadJSONFromFile(e){const t=e.target.files[0];t&&pe(t).then(this.loadServer)},loadServer(e){const t=w(e);this.$store.commit("setServer",t)}}})})}});
//# sourceMappingURL=app.0b224f28.js.map