(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[291],{8803:function(t,s,e){
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(s,i){t.exports=i(e(1884),e(4130),e(9069),e(1437))})(0,(function(t,s,e,i){"use strict";const a="toast",o="bs.toast",n=`.${o}`,r=`mouseover${n}`,l=`mouseout${n}`,c=`focusin${n}`,d=`focusout${n}`,h=`hide${n}`,m=`hidden${n}`,u=`show${n}`,g=`shown${n}`,f="fade",p="hide",_="show",b="showing",v={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class y extends t{constructor(t,s){super(t,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return v}static get NAME(){return a}show(){const t=s.trigger(this._element,u);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(f);const e=()=>{this._element.classList.remove(b),s.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(p),i.reflow(this._element),this._element.classList.add(_,b),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=s.trigger(this._element,h);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(p),this._element.classList.remove(b,_),s.trigger(this._element,m)};this._element.classList.add(b),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_),super.dispose()}isShown(){return this._element.classList.contains(_)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,s){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=s;break;case"focusin":case"focusout":this._hasKeyboardInteraction=s;break}if(s)return void this._clearTimeout();const e=t.relatedTarget;this._element===e||this._element.contains(e)||this._maybeScheduleHide()}_setListeners(){s.on(this._element,r,(t=>this._onInteraction(t,!0))),s.on(this._element,l,(t=>this._onInteraction(t,!1))),s.on(this._element,c,(t=>this._onInteraction(t,!0))),s.on(this._element,d,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const s=y.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t](this)}}))}}return e.enableDismissTrigger(y),i.defineJQueryPlugin(y),y}))},9069:function(t,s,e){
/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){i(s,e(4130),e(7317),e(1437))})(0,(function(t,s,e,i){"use strict";const a=(t,a="hide")=>{const o=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;s.on(document,o,`[data-bs-dismiss="${n}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),i.isDisabled(this))return;const o=e.getElementFromSelector(this)||this.closest(`.${n}`),r=t.getOrCreateInstance(o);r[a]()}))};t.enableDismissTrigger=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}))},8557:function(t,s,e){"use strict";e.d(s,{Z:function(){return o}});e(560);function i(t){return{all:t=t||new Map,on:function(s,e){var i=t.get(s);i?i.push(e):t.set(s,[e])},off:function(s,e){var i=t.get(s);i&&(e?i.splice(i.indexOf(e)>>>0,1):t.set(s,[]))},emit:function(s,e){var i=t.get(s);i&&i.slice().map((function(t){t(e)})),(i=t.get("*"))&&i.slice().map((function(t){t(s,e)}))}}}const a=i();var o=a},886:function(t,s,e){"use strict";e.d(s,{Z:function(){return I}});var i=e(3396);const a={class:"position-fixed top-0 end-0 m-5",style:{"z-index":"1056"}};function o(t,s,e,o,n,r){const l=(0,i.up)("Toast");return(0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.messages,((t,s)=>((0,i.wg)(),(0,i.j4)(l,{"toast-msg":t,ToastId:s,key:"msg"+s},null,8,["toast-msg","ToastId"])))),128))])}e(560);var n=e(7139);const r={class:"m-0 text-white"},l={class:"toast-body d-flex"},c={class:"d-flex"},d={key:0,class:"bi bi-check-circle me-2 text-success"},h={key:1,class:"bi bi-exclamation-triangle me-2 text-danger"},m={class:"m-0",style:{"text-align":"justify"}};function u(t,s,e,a,o,u){return(0,i.wg)(),(0,i.iD)("div",{ref:`toast-${e.ToastId}`,class:"toast mb-2 toastPosition"},[e.toastMsg.title?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,n.C_)(["toast-header d-flex","error"===e.toastMsg.status?"bg-danger":"bg-success"])},[(0,i._)("p",r,(0,n.zw)(e.toastMsg.title),1),(0,i._)("button",{type:"button",class:"btn-close btn-close-sm ms-auto",onClick:s[0]||(s[0]=(...t)=>u.hideToast&&u.hideToast(...t))})],2)):(0,i.kq)("",!0),(0,i._)("div",l,[(0,i._)("div",c,["success"===e.toastMsg.status?((0,i.wg)(),(0,i.iD)("i",d)):((0,i.wg)(),(0,i.iD)("i",h)),(0,i._)("p",m,(0,n.zw)(e.toastMsg.message),1)]),e.toastMsg.title?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,type:"button",class:"btn-close btn-close-sm ms-auto pe-3",onClick:s[1]||(s[1]=(...t)=>u.hideToast&&u.hideToast(...t))}))]),(0,i._)("div",{class:(0,n.C_)(["toastBar rounded-bottom",{"bg-success":"success"===e.toastMsg.status,"bg-danger":"error"===e.toastMsg.status}])},null,2)],512)}var g=e(8803),f=e.n(g),p={data(){return{toastItem:{}}},props:["toastMsg","ToastId"],methods:{hideToast(){this.toastItem.hide()}},mounted(){this.toastItem=f().getOrCreateInstance(this.$refs[`toast-${this.ToastId}`],{delay:2500}),this.toastItem.show()}},_=e(89);const b=(0,_.Z)(p,[["render",u]]);var v=b,w={data(){return{messages:[]}},inject:["emitter"],methods:{addMessage(t,s,e){this.messages.push({message:t,status:s,title:e})}},components:{Toast:v},created(){this.emitter.on("sendMsg",(t=>{this.addMessage(t.message,t.status,t.title)}))}};const y=(0,_.Z)(w,[["render",o]]);var I=y},2291:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return H}});var i=e(3396);const a={class:"homeView d-flex flex-column",style:{"min-height":"100vh"}};function o(t,s,e,o,n,r){const l=(0,i.up)("WebNav"),c=(0,i.up)("ToastList"),d=(0,i.up)("router-view"),h=(0,i.up)("WebFooter");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(l),(0,i.Wm)(c),(0,i.Wm)(d),(0,i.Wm)(h,{class:"mt-auto"})])}var n=e(7139);const r={class:"webNav sticky-top bg-primary-subtle",ref:"webNav"},l={class:"container"},c={class:"navbar navbar-expand-lg align-items-baseline"},d={class:"d-flex align-items-baseline"},h=(0,i._)("h1",{class:"m-0 fs-3 logo"},[(0,i.Uk)(" macar"),(0,i._)("i",{class:"bi bi-egg-fill"}),(0,i.Uk)("n ")],-1),m=(0,i._)("p",{class:"m-0 fw-bolder d-none d-sm-block"},"頂級法式馬卡龍",-1),u=(0,i._)("span",{class:"navbar-toggler-icon"},null,-1),g=[u],f={class:"collapse navbar-collapse",ref:"navbarNav"},p={class:"navbar-nav d-flex w-100 justify-content-end text-primary-emphasis fw-bolder"},_={class:"nav-item mx-2"},b=(0,i._)("i",{class:"bi bi-list-task me-1"},null,-1),v={class:"nav-item mx-2"},w=(0,i._)("i",{class:"bi bi-suit-heart-fill me-1"},null,-1),y={class:"nav-item mx-2"},I=(0,i._)("i",{class:"bi bi-person-fill me-1"},null,-1),C={class:"nav-item ms-2"},x=(0,i._)("i",{class:"bi bi-cart-fill me-1"},null,-1),k={class:"toTop d-flex align-items-center justify-content-center opacity-0",ref:"toTop"};function T(t,s,e,a,o,u){const T=(0,i.up)("WebLoading"),$=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(T,{"is-loading":o.isLoading},null,8,["is-loading"]),(0,i._)("nav",r,[(0,i._)("div",l,[(0,i._)("div",c,[(0,i._)("div",d,[(0,i.Wm)($,{class:"navbar-brand me-2",to:"/home"},{default:(0,i.w5)((()=>[h])),_:1}),m]),(0,i._)("button",{class:"navbar-toggler",type:"button",onClick:s[0]||(s[0]=(...t)=>u.toggleCollapse&&u.toggleCollapse(...t))},g),(0,i._)("div",f,[(0,i._)("ul",p,[(0,i._)("li",_,[(0,i.Wm)($,{class:"nav-link ps-2 ps-lg-0 my-2 my-lg-0",to:"/products",onClick:s[1]||(s[1]=t=>u.closeNav(!0))},{default:(0,i.w5)((()=>[b,(0,i.Uk)("產品列表")])),_:1})]),(0,i._)("li",v,[(0,i.Wm)($,{class:"nav-link ps-2 ps-lg-0 my-2 my-lg-0",to:"/collect",onClick:u.closeNav},{default:(0,i.w5)((()=>[w,(0,i.Uk)("我的收藏")])),_:1},8,["onClick"])]),(0,i._)("li",y,[(0,i.Wm)($,{class:"nav-link ps-2 ps-lg-0 my-2 my-lg-0",to:"/orderSearch",onClick:u.closeNav},{default:(0,i.w5)((()=>[I,(0,i.Uk)("訂單查詢")])),_:1},8,["onClick"])]),(0,i._)("li",C,[(0,i.Wm)($,{class:"nav-link ps-2 ps-lg-0 my-2 my-lg-0",to:"/cart",onClick:u.closeNav},{default:(0,i.w5)((()=>[x,(0,i.Uk)("購物車("+(0,n.zw)(isNaN(u.totalQty)?"-":u.totalQty)+")",1)])),_:1},8,["onClick"])])])],512)])])],512),(0,i._)("div",k,[(0,i._)("button",{class:"btn btn-sm btn-primary h-100 w-100",type:"button",onClick:s[2]||(s[2]=(...t)=>u.scrollToTop&&u.scrollToTop(...t))}," TOP ")],512)],64)}e(560);var $={data(){return{cartInfo:{},filterStore:"",API_CART:"https://vue3-course-api.hexschool.io/api/nn_macaron/cart",isLoading:!1,collect:"",date:""}},inject:["emitter"],computed:{totalQty(){return this.cartInfo.carts&&this.cartInfo.carts.length>0?this.cartInfo.carts.reduce(((t,s)=>(t+=s.qty,t)),0):0}},methods:{toggleCollapse(){this.$refs.navbarNav.classList.toggle("show")},getCartInfo(){this.axios.get(this.API_CART).then((t=>{t.data.success?(this.cartInfo=t.data.data,this.sendCartInfo()):this.sendErrorMsg(`購物車資料無法取得：${t.data.messages}`)})).catch((t=>{this.sendErrorMsg(`購物車資料無法取得：${t}`)}))},addCart(t){let s=!1,e={};const i=this.cartInfo.carts.findIndex((s=>s.product_id===t.product_id));if(i>-1){if(10===this.cartInfo.carts[i].qty)return void this.emitter.emit("sendMsg",{message:"購物車訂購數量已達上限(數量10)，如有大量訂購需求，歡迎來電詢問！",status:"error",title:this.cartInfo.carts[i].product.title});this.cartInfo.carts[i].qty+t.qty>10&&(t.qty=10-this.cartInfo.carts[i].qty,s=!0,e={message:"訂購數量上限為10，如有大量訂購需求，歡迎來電詢問！",status:"error",title:this.cartInfo.carts[i].product.title})}this.isLoading=!0,this.axios.post(this.API_CART,{data:t}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:t.data.message,status:"success"}),s&&this.emitter.emit("sendMsg",e),this.getCartInfo()):this.sendErrorMsg(`無法加入購物車：${t.data.message}`)})).catch((t=>{this.isLoading=!1,this.sendErrorMsg(`無法加入購物車：${t}`)}))},cartAdjustNum(t,s){this.isLoading=!0,this.axios.put(`${this.API_CART}/${s}`,{data:t}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:t.data.message,status:"success"}),this.getCartInfo()):this.sendErrorMsg(`無法更新購物車：${t.data.message}`)})).catch((t=>{this.isLoading=!1,this.sendErrorMsg(`無法更新購物車：${t}`)}))},cartDeleteItem(t){this.isLoading=!0,this.axios.delete(`${this.API_CART}/${t}`).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"已刪除品項",status:"success"}),this.getCartInfo()):this.sendErrorMsg(`無法更新購物車：${t.data.message}`)})).catch((t=>{this.isLoading=!1,this.sendErrorMsg(`無法更新購物車：${t}`)}))},cartReset(){this.isLoading=!0,this.axios.delete(`${this.API_CART}s`).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"已清空購物車",status:"success"}),this.getCartInfo()):this.sendErrorMsg(`無法清空購物車：${t.data.message}`)})).catch((t=>{this.isLoading=!1,this.sendErrorMsg(`無法清空購物車：${t}`)}))},sendErrorMsg(t){this.emitter.emit("sendMsg",{message:t,status:"error"})},sendCartInfo(){this.cartInfo.carts&&this.emitter.emit("cartInfo",this.cartInfo)},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},closeNav(t=!1){this.$refs.navbarNav.classList.remove("show"),t&&(this.filterStore="")},getCollect(){const t=document.cookie.split("; ").find((t=>t.startsWith("macarOnCollect=")))?.split("=")[1];this.collect=t?t.split(","):[],document.cookie=`macarOnCollect=${this.collect}; expires=${this.date}`,this.getCollectInfo()},setCollect(t){if(t){this.getCollect();const s=this.collect.findIndex((s=>s===t));s<0?this.collect.push(t):this.collect.splice(s,1)}else this.collect=[];document.cookie=`macarOnCollect=${this.collect}; expires=${this.date}`,this.getCollectInfo()},getCollectInfo(){""!==this.collect&&this.emitter.emit("collectInfo",this.collect)},navStyle(){0!==window.scrollY?(this.$refs.webNav.classList.add("shadow"),this.$refs.toTop.classList.remove("opacity-0")):(this.$refs.webNav.classList.remove("shadow"),this.$refs.toTop.classList.add("opacity-0"))}},created(){this.date=new Date,this.date.setMonth(this.date.getMonth()+6),this.date.setDate(1),this.getCartInfo(),this.emitter.on("addCart",(t=>this.addCart(t))),this.emitter.on("cartAdjustNum",(t=>this.cartAdjustNum(t.data,t.cartId))),this.emitter.on("cartDeleteItem",(t=>this.cartDeleteItem(t))),this.emitter.on("cartReset",(()=>this.cartReset())),this.emitter.on("getCartInfo",(()=>this.sendCartInfo())),this.emitter.on("updateCart",(()=>this.getCartInfo())),this.emitter.on("setFilterStore",(t=>{this.filterStore=t})),this.emitter.on("getFilterStore",(()=>this.emitter.emit("filterStore",this.filterStore))),this.getCollect(),this.emitter.on("setCollect",(t=>this.setCollect(t))),this.emitter.on("getCollectInfo",(()=>this.getCollectInfo()))},mounted(){window.addEventListener("scroll",this.navStyle)},beforeUnmount(){window.removeEventListener("scroll",this.navStyle)}},M=e(89);const L=(0,M.Z)($,[["render",T]]);var N=L;const E={class:"bg-light"},D={class:"container text-md-center py-3"},A=(0,i._)("div",{class:"mb-3"},[(0,i._)("a",{href:"#",class:"fs-3 logo fw-medium text-decoration-none"},[(0,i.Uk)("macar"),(0,i._)("i",{class:"bi bi-egg-fill"}),(0,i.Uk)("n "),(0,i._)("h1",{class:"m-0 fs-3 logo"})])],-1),S={class:"d-none d-md-flex flex-wrap w-100 justify-content-center fw-bolder list-unstyled"},W=(0,i.uE)('<div class="d-md-flex flex-wrap justify-content-center text-start"><p class="me-3"><span class="me-2 fw-semibold">營業時間:</span>每週二至週日 11:00~21:00 (周一公休) </p><p class="me-3"><span class="me-2 fw-semibold">地址:</span>330桃園市桃園區桃園路1號 </p><p class="me-3"><span class="me-2 fw-semibold">電話:</span><a href="tel:+" class="text-primary-emphasis text-decoration-none">03-3344-5566</a></p><p><span class="me-2 fw-semibold">Email:</span><a href="mailto:" class="text-primary-emphasis text-decoration-none">marcaron@email.com</a></p></div><p class="text-gray border-top border-primary mb-0 pt-3"> 本網站無商業用途，僅供練習使用 </p>',2);function j(t,s){const e=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",D,[A,(0,i._)("ul",S,[(0,i._)("li",null,[(0,i.Wm)(e,{class:"text-primary-emphasis text-decoration-none px-3 border-end border-2",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("使用條款")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(e,{class:"text-primary-emphasis text-decoration-none px-3 border-end border-2",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("隱私權政策")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(e,{class:"text-primary-emphasis text-decoration-none px-3",to:"/login"},{default:(0,i.w5)((()=>[(0,i.Uk)("後台登入")])),_:1})])]),W])])}const P={},U=(0,M.Z)(P,[["render",j]]);var q=U,R=e(886),O=e(8557),Z={components:{WebNav:N,WebFooter:q,ToastList:R.Z},provide(){return{emitter:O.Z}},updated(){window.scrollTo({top:0,behavior:"instant"})}};const F=(0,M.Z)(Z,[["render",o]]);var H=F}}]);
//# sourceMappingURL=291.67ee19d9.js.map