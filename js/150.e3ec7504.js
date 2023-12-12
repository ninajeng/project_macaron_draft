"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[150],{9812:function(e,t,r){r.d(t,{Z:function(){return M}});var s=r(3396),i=r(7139);const o={key:0},a={key:0,class:"alert alert-danger rounded-0 border-0 d-flex"},d=(0,s._)("i",{class:"bi bi-exclamation-triangle-fill me-2"},null,-1),c=(0,s._)("p",{class:"mb-0"},"訂單尚未完成，請完成付款手續",-1),l=[d,c],n={key:1,class:"alert alert-success rounded-0 border-0 d-flex"},u=(0,s._)("i",{class:"bi bi-check-circle me-2"},null,-1),p={class:"mb-0"},m={class:"row g-2 g-sm-3"},h={key:0,class:"col-12 border-secondary border-bottom pb-3"},g=(0,s._)("h5",{class:"fw-bolder"},"選擇付款方式",-1),b={class:"input-group"},_={class:"form-select"},w=(0,s._)("option",{value:"線上刷卡"},"線上刷卡",-1),f=(0,s._)("option",{value:"ATM轉帳"},"ATM轉帳",-1),y={value:"門市付款"},v=(0,s._)("div",{class:"col-sm-4"},[(0,s._)("h5",{class:"fw-bolder mb-0 mt-2 mt-sm-0"},"訂單狀態")],-1),k={class:"col-sm-8"},x={class:"mb-0"},D=(0,s._)("div",{class:"col-sm-4"},[(0,s._)("h5",{class:"fw-bolder mt-2 mt-sm-0 mb-0"},"訂購人資料")],-1),C={class:"col-sm-8"},$={class:"mb-1"},z={class:"mb-1"},I={class:"mb-1"},L={key:0,class:"mb-0"};function W(e,t,r,d,c,W){const j=(0,s.up)("WebLoading");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(j,{"is-loading":c.isLoading},null,8,["is-loading"]),c.order.user?((0,s.wg)(),(0,s.iD)("div",o,[c.order.is_paid?((0,s.wg)(),(0,s.iD)("div",n,[u,(0,s._)("p",p," 訂單已成立！"+(0,i.zw)(c.order.user.address.indexOf("門市取貨")>-1?"商品將於七個工作天內完成，我們將與您聯繫確認取貨日期。":"商品將於七個工作天內送達。"),1)])):((0,s.wg)(),(0,s.iD)("div",a,l)),(0,s._)("div",{class:(0,i.C_)(["container p-4 bg-light text-secondary",{"mb-3":!c.order.is_paid,rounded:!c.order.is_paid,"bg-secondary-subtle":!c.order.is_paid,"border-secondary":!c.order.is_paid,border:!c.order.is_paid}])},[(0,s._)("div",m,[c.order.is_paid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",h,[g,(0,s._)("div",b,[(0,s._)("select",_,[w,f,(0,s._)("option",y,(0,i.zw)(c.order.user.address.indexOf("門市取貨")>-1?"門市取貨付款":"門市付款"),1)]),(0,s._)("button",{class:"btn btn-secondary",type:"button",onClick:t[0]||(t[0]=(...e)=>W.payment&&W.payment(...e))}," 付款 ")])])),v,(0,s._)("div",k,[(0,s._)("p",x,(0,i.zw)(c.order.is_paid?"訂單已成立":"尚未付款"),1)]),D,(0,s._)("div",C,[(0,s._)("p",$,(0,i.zw)(c.order.user.name),1),(0,s._)("p",z,(0,i.zw)(c.order.user.tel),1),(0,s._)("p",I,(0,i.zw)(c.order.user.email),1),(0,s._)("p",{class:(0,i.C_)(["mb-0",{"mb-1":c.order.message}])},(0,i.zw)(c.order.user.address),3),c.order.message?((0,s.wg)(),(0,s.iD)("p",L,' 訂單備註："'+(0,i.zw)(c.order.message)+'" ',1)):(0,s.kq)("",!0)])])],2)])):(0,s.kq)("",!0)],64)}r(560);var j={data(){return{order:{},orderProducts:{},orderId:"",isLoading:!1}},inject:["emitter"],emits:["orderData","getError"],props:["isSearch"],methods:{getOrder(e){const t=`https://vue3-course-api.hexschool.io/api/nn_macaron/order/${e}`;this.isLoading=!0,this.axios.get(t).then((t=>{this.isLoading=!1,t.data.success?(t.data.order.is_paid&&"complete"!==this.$route.name?this.$router.push(`/order/complete/${e}`):t.data.order.is_paid||"payment"===this.$route.name||this.$router.push(`/order/payment/${e}`),this.order=t.data.order,this.orderProducts.carts=Object.values(t.data.order.products),this.orderProducts.final_total=t.data.order.total,this.orderProducts.total=this.orderProducts.carts.reduce(((e,t)=>(e+=t.total,e)),0),this.$emit("orderData",this.orderProducts)):this.getOrderFail()})).catch((()=>{this.isLoading=!1,this.getOrderFail()}))},getOrderFail(){this.isSearch?this.$emit("getError"):(this.emitter.emit("sendMsg",{message:"無此訂單",status:"error"}),this.$router.replace("/cart"))},payment(){const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/pay/${this.$route.params.id}`;this.isLoading=!0,this.axios.post(e).then((e=>{this.isLoading=!1,e.data.success?this.$router.push(`/order/complete/${this.$route.params.id}`):this.emitter.emit("sendMsg",{message:"付款失敗，請聯繫店家",status:"error"})})).catch((e=>{this.isLoading=!1,alert(e)}))}},created(){this.isSearch||this.getOrder(this.$route.params.id)}},O=r(89);const E=(0,O.Z)(j,[["render",W]]);var M=E},1462:function(e,t,r){r.d(t,{Z:function(){return $}});var s=r(3396),i=r(7139),o=r(9242);const a={class:"card h-100"},d={class:"zIndex position-absolute end-0 text-end p-2 icon-bg",style:{height:"5rem",width:"5rem"}},c=(0,s._)("i",{class:"bi bi-suit-heart"},null,-1),l=[c],n={key:0,class:"zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"},u={key:1,class:"zIndex position-absolute mt-3 p-2 text-white smallTag"},p=["src","alt"],m={class:"card-body position-relative"},h={class:"d-flex flex-column justify-content-between h-100"},g={class:"card-title fw-bolder"},b={class:"mb-2"},_={key:0,class:"mb-2"},w={key:1,class:"mb-2"},f={class:"text-gray me-2"},y={class:"text-danger"},v=(0,s._)("i",{class:"bi bi-cart-plus me-2"},null,-1);function k(e,t,r,c,k,x){const D=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",d,[(0,s._)("a",{href:"#",class:(0,i.C_)(["link-dark fs-4",{collected:x.isCollected}]),onClick:t[0]||(t[0]=(0,o.iM)((e=>x.setCollect(r.product.id)),["prevent"]))},l,2)]),"期間限定"===r.product.category?((0,s.wg)(),(0,s.iD)("p",n," 期間限定 ")):r.product.origin_price!==r.product.price?((0,s.wg)(),(0,s.iD)("p",u," 特價 "+(0,i.zw)(Math.floor(r.product.price/r.product.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0),(0,s.Wm)(D,{to:`/product/${r.product.id}`,class:"overflow-hidden rounded-top"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:r.product.imageUrl,class:"card-img-top productImg",alt:r.product.title,style:{height:"300px","object-fit":"cover"}},null,8,p)])),_:1},8,["to"]),(0,s._)("div",m,[(0,s.Wm)(D,{to:`/product/${r.product.id}`,class:"stretched-link"},null,8,["to"]),(0,s._)("div",h,[(0,s._)("h5",g,(0,i.zw)(r.product.title),1),(0,s._)("div",null,[(0,s._)("p",b,(0,i.zw)(r.product.unit),1),r.product.origin_price===r.product.price?((0,s.wg)(),(0,s.iD)("p",_," NT$"+(0,i.zw)(e.$filters.currency(r.product.origin_price))+"元 ",1)):((0,s.wg)(),(0,s.iD)("p",w,[(0,s._)("del",f,"NT$"+(0,i.zw)(e.$filters.currency(r.product.origin_price))+"元",1),(0,s._)("span",y,"NT$"+(0,i.zw)(e.$filters.currency(r.product.price))+"元",1)])),(0,s._)("a",{href:"#",class:"zIndex position-relative btn btn-outline-secondary w-100",onClick:t[1]||(t[1]=(0,o.iM)((e=>this.emitter.emit("addCart",{product_id:r.product.id,qty:1})),["prevent"]))},[v,(0,s.Uk)("加到購物車")])])])])])}var x={data(){return{collect:""}},computed:{isCollected(){return this.collect.findIndex((e=>e===this.product.id))>-1}},props:["product"],inject:["emitter"],methods:{setCollect(e){this.emitter.emit("setCollect",e)}},created(){this.emitter.on("collectInfo",(e=>{this.collect=e})),this.emitter.emit("getCollectInfo")}},D=r(89);const C=(0,D.Z)(x,[["render",k]]);var $=C},436:function(e,t,r){r.d(t,{Z:function(){return $}});var s=r(3396),i=r(7139);const o={class:"container py-5"},a={class:"d-flex flex-wrap justify-content-between align-items-center mb-3"},d={class:"fw-bolder text-primary-emphasis mb-0"},c=(0,s._)("i",{class:"bi bi-caret-right-fill"},null,-1),l={class:"row row-cols-md-3 row-cols-lg-5 g-4"},n={key:0,class:"card border-0"},u=["src","alt"],p={class:"position-absolute bottom-0"},m={key:0,class:"fs-6 ms-3 badge rounded-pill text-bg-primary"},h={key:1,class:"fs-6 ms-3 badge rounded-pill text-bg-secondary"},g={class:"card-img-overlay p-0"},b={class:"d-flex justify-content-center align-items-center rounded py-3 d-lg-none",style:{background:"linear-gradient(\r\n                    rgba(41, 41, 43, 0.5) 20%,\r\n                    transparent\r\n                  )"}},_={class:"fw-bolder text-white px-2 fs-5 text-center"},w={class:"h-100 d-none d-lg-flex flex-column justify-content-center align-items-center rounded productTitle",style:{"background-color":"rgba(41, 41, 43, 0.5)"}},f={class:"fw-bolder text-white px-3 fs-5 text-center mb-5"},y=(0,s._)("p",{class:"fw-bolder text-white fs-5 linkIcon"},[(0,s._)("i",{class:"bi bi-search"})],-1);function v(e,t,r,v,k,x){const D=(0,s.up)("router-link"),C=(0,s.up)("ProductCard");return k.showData.length>0?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)({"bg-primary-subtle":r.bgColor})},[(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("h5",d,[(0,s.WI)(e.$slots,"title",{},(()=>[(0,s.Uk)("推薦給您 ...")]))]),(0,s.Wm)(D,{to:"/products",class:"link-secondary text-decoration-none",onClick:t[0]||(t[0]=e=>x.emitter.emit("setFilterStore",""))},{default:(0,s.w5)((()=>[(0,s.Uk)("看更多產品"),c])),_:1})]),(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(k.showData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-12 flex-fill",key:"showData"+t},[r.classicType?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("img",{src:e.imageUrl,class:"card-img productImg",alt:e.title,style:{height:"300px","object-fit":"cover"}},null,8,u),(0,s._)("div",p,["期間限定"===e.category?((0,s.wg)(),(0,s.iD)("p",m," 期間限定 ")):e.origin_price!==e.price?((0,s.wg)(),(0,s.iD)("p",h," 特價 "+(0,i.zw)(Math.floor(e.price/e.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0)]),(0,s._)("div",g,[(0,s._)("div",b,[(0,s._)("p",_,(0,i.zw)(e.title),1)]),(0,s.Wm)(D,{to:`/product/${e.id}`,class:"stretched-link productLink"},null,8,["to"]),(0,s._)("div",w,[(0,s._)("p",f,(0,i.zw)(e.title),1),y])])])):((0,s.wg)(),(0,s.j4)(C,{key:1,product:e,onAddCart:x.addCart},null,8,["product","onAddCart"]))])))),128))])])],2)):(0,s.kq)("",!0)}var k=r(1462),x={data(){return{allData:[],showData:[],isLoading:!1}},inject:["emitter"],props:["num","bgColor","isRandom","classicType"],emits:["addCart"],components:{ProductCard:k.Z},methods:{getData(){const e="https://vue3-course-api.hexschool.io/api/nn_macaron/products/all";this.isLoading=!0,this.axios.get(e).then((e=>{this.isLoading=!1,e.data.success?(this.allData=e.data.products,this.setShowData()):this.getDataError(`(${e.data.message})`)})).catch((e=>{this.isLoading=!1,this.getDataError(`(${e})`)}))},getDataError(e=""){this.emitter.emit("sendMsg",{message:`產品無法載入 ${e}`,status:"error"})},setShowData(){let e=0;this.isRandom&&(e=Math.floor(Math.random()*(this.allData.length-this.num))),this.showData=this.allData.slice(e,e+this.num)},addCart(e){this.$emit("addCart",e)}},created(){this.getData()}},D=r(89);const C=(0,D.Z)(x,[["render",v]]);var $=C},2150:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var s=r(3396),i=r(7139);const o={class:"bg-secondary-subtle"},a={class:"container py-5"},d={class:"row justify-content-center"},c={class:"col-lg-6"},l={class:"p-4 text-secondary"},n=(0,s._)("h5",{class:"fw-bolder mb-2"},"訂單查詢",-1),u=(0,s._)("p",{class:"mb-2"},"訂單編號共20碼，如-NjG2OZDCN4TI73iPtWb",-1),p={key:0,class:"alert alert-danger d-flex border-danger"},m=(0,s._)("i",{class:"bi bi-x-circle me-2"},null,-1),h={class:"mb-0"},g={class:"input-group"},b=["onClick"],_=(0,s._)("i",{class:"bi bi-search me-2"},null,-1),w=(0,s._)("div",{class:"col-12 text-center d-none d-md-block position-relative"},[(0,s._)("p",{style:{"font-size":"15rem"},class:"text-light"},[(0,s._)("i",{class:"bi bi-book"})])],-1),f={class:"d-none"};function y(e,t,r,y,v,k){const x=(0,s.up)("WebLoading"),D=(0,s.up)("VField"),C=(0,s.up)("ErrorMessage"),$=(0,s.up)("VForm"),z=(0,s.up)("OrderStatus"),I=(0,s.up)("WebRecommand");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(x,{"is-loading":v.isLoading},null,8,["is-loading"]),(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("div",l,[n,u,v.searchError?((0,s.wg)(),(0,s.iD)("div",p,[m,(0,s._)("p",h,' 查無此訂單"'+(0,i.zw)(v.errorId)+'"。請確認訂單號碼是否正確，或來電由專人為您服務。 ',1)])):(0,s.kq)("",!0),(0,s.Wm)($,null,{default:(0,s.w5)((({errors:e,validate:r})=>[(0,s._)("div",g,[(0,s.Wm)(D,{name:"訂單編號",class:(0,i.C_)(["form-control border border-secondary border-end-0 rounded-0",{"is-invalid":e["訂單編號"]}]),placeholder:"請輸入20碼訂單編號",modelValue:v.orderId,"onUpdate:modelValue":t[0]||(t[0]=e=>v.orderId=e),rules:"length:20"},null,8,["class","modelValue"]),(0,s._)("button",{class:"btn btn-secondary rounded-0",type:"button",onClick:e=>k.search(r)},[_,(0,s.Uk)("查詢 ")],8,b),(0,s.Wm)(C,{name:"訂單編號",class:"invalid-feedback"})])])),_:1})]),w])])])]),(0,s._)("div",f,[(0,s.Wm)(z,{onGetError:k.getError,isSearch:!0,ref:"OrderStatus"},null,8,["onGetError"])]),(0,s.Wm)(I,{num:5,bgColor:!1,isRandom:!0,classicType:!0})],64)}var v=r(9812),k=r(436),x={data(){return{orderId:"",searchError:!1,errorId:"",isLoading:!1}},components:{OrderStatus:v.Z,WebRecommand:k.Z},methods:{async search(e){try{const t=await e();if(!t.valid)return;this.isLoading=!0,this.$refs.OrderStatus.getOrder(this.orderId),this.errorId=this.orderId}catch(t){this.emitter.emit("sendMsg",{message:"訂單編號格式驗證失敗",status:"error"})}},getError(){this.isLoading=!1,this.searchError=!0}},mounted(){window.scrollTo({top:0})}},D=r(89);const C=(0,D.Z)(x,[["render",y]]);var $=C}}]);
//# sourceMappingURL=150.e3ec7504.js.map