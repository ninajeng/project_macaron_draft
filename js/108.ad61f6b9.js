"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[108],{7108:function(t,e,s){s.r(e),s.d(e,{default:function(){return nt}});var r=s(3396),a=s(7139);const l=(0,r._)("div",{class:"pt-4 py-3"},[(0,r._)("h2",{class:"m-0 text-secondary fw-bolder"},"訂單列表")],-1),d={class:"table table-hover align-middle"},o=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"訂單日期"),(0,r._)("th",null,"訂單編號"),(0,r._)("th",null,"訂單狀態"),(0,r._)("th",null,"訂購人"),(0,r._)("th",null,"使用優惠券"),(0,r._)("th",{class:"text-end"},"訂單金額"),(0,r._)("th",{width:"250",class:"text-center"},"查看內容/刪除")])],-1),n={key:0},i={class:"text-end"},c={class:"text-center"},u={class:"btn-group btn-group-sm",role:"group","aria-label":"Basic example"},p=["onClick"],_=["onClick"];function h(t,e,s,h,m,g){const b=(0,r.up)("LoadingVue"),f=(0,r.up)("OrderModal"),w=(0,r.up)("pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(b,{active:m.isLoading,style:{"z-index":"1056"}},null,8,["active"]),(0,r.Wm)(f,{"temp-order":m.tempOrder,onUpdateOrder:g.updateOrder,ref:"orderModal"},null,8,["temp-order","onUpdateOrder"]),l,(0,r._)("table",d,[o,m.orderList.length>0?((0,r.wg)(),(0,r.iD)("tbody",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.orderList,((e,s)=>((0,r.wg)(),(0,r.iD)("tr",{key:"order"+s},[(0,r._)("td",null,(0,a.zw)(this.$filters.unixToDate(e.create_at)),1),(0,r._)("td",null,(0,a.zw)(e.id),1),(0,r._)("td",{class:(0,a.C_)({"text-danger":!e.is_paid})},(0,a.zw)(e.is_paid?"訂單已完成":"尚未付款"),3),(0,r._)("td",null,(0,a.zw)(e.user.name),1),(0,r._)("td",null,(0,a.zw)(Object.values(e.products)[0].coupon?Object.values(e.products)[0].coupon.title:"無"),1),(0,r._)("td",i,(0,a.zw)(`$${t.$filters.currency(e.total)}`),1),(0,r._)("td",c,[(0,r._)("div",u,[(0,r._)("button",{type:"button",class:"btn btn-outline-success",onClick:t=>g.editProduct(e)}," 查看內容 ",8,p),(0,r._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>g.deleteOrder(e)}," 刪除 ",8,_)])])])))),128))])):(0,r.kq)("",!0)]),(0,r.Wm)(w,{"page-info":m.pageInfo,onSetPage:g.getOrderList},null,8,["page-info","onSetPage"])],64)}const m={class:"modal fade",tabindex:"-1",ref:"orderModal"},g={class:"modal-dialog modal-lg modal-dialog-scrollable"},b={class:"modal-content"},f={class:"modal-header bg-secondary"},w=(0,r._)("h1",{class:"modal-title fs-5 text-white"},"訂單內容",-1),y={key:0,class:"modal-body"},x={class:"m-3 p-3 bg-secondary-subtle rounded"},v=(0,r._)("h5",{class:"fw-bolder text-secondary"},"訂單總覽",-1),O={class:"d-flex mb-1"},$={class:"me-5"},z={class:"mb-0 me-2 py-1"},k=(0,r._)("span",{class:"fw-bolder pe-3"},"訂單狀態",-1),I={class:"mb-2 mt-1"},M=(0,r._)("span",{class:"fw-bolder pe-3"},"訂單日期",-1),L={class:"mb-2"},C=(0,r._)("span",{class:"fw-bolder pe-3"},"訂單編號",-1),D={class:"d-flex"},j=(0,r._)("p",{class:"mb-0 py-1"},[(0,r._)("span",{class:"fw-bolder pe-3"},"修改狀態")],-1),S={class:"table border-dark mb-2"},U=(0,r._)("thead",null,[(0,r._)("tr",{class:"text-center"},[(0,r._)("th",null,"商品數量"),(0,r._)("th",null,"小計"),(0,r._)("th",null,"運費"),(0,r._)("th",null,"訂單優惠券"),(0,r._)("th",null,"優惠券折抵"),(0,r._)("th",null,"總計")])],-1),q={class:"text-center"},H=(0,r._)("td",null,"活動免運",-1),J={class:"m-3 p-3 bg-secondary-subtle rounded"},N=(0,r._)("h5",{class:"fw-bolder text-secondary"},"訂購品項",-1),P={class:"table table-hover border-dark mb-2 text-center"},W=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"品名"),(0,r._)("th",null,"產品代碼"),(0,r._)("th",null,"數量"),(0,r._)("th",null,"商品特價"),(0,r._)("th",{class:"text-end"},"單價"),(0,r._)("th",{class:"text-end"},"小計")])],-1),Y={class:"text-end"},T={class:"text-end"},Z={class:"m-3 p-3 bg-secondary-subtle rounded"},K=(0,r._)("h5",{class:"fw-bolder text-secondary"},"訂購人資料",-1),V={class:"mb-2"},B=(0,r._)("span",{class:"fw-bolder pe-3"},"配送方式",-1),A={class:"mb-2"},E=(0,r._)("span",{class:"fw-bolder pe-3"},"訂單備註",-1),F={class:"table border-dark mb-2 text-center"},G=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"姓名"),(0,r._)("th",null,"連絡電話"),(0,r._)("th",null,"聯絡信箱")])],-1),Q={class:"modal-footer"};function R(t,e,s,l,d,o){const n=(0,r.up)("LoadingVue");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{active:d.isLoading,style:{"z-index":"1056"}},null,8,["active"]),(0,r._)("div",m,[(0,r._)("div",g,[(0,r._)("div",b,[(0,r._)("div",f,[w,(0,r._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>o.hideModal&&o.hideModal(...t))})]),d.order.user?((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",x,[v,(0,r._)("div",O,[(0,r._)("div",$,[(0,r._)("p",z,[k,(0,r._)("span",{class:(0,a.C_)({"text-danger":!d.order.is_paid})},(0,a.zw)(d.order.is_paid?"訂單已完成":"尚未付款"),3)]),(0,r._)("p",I,[M,(0,r.Uk)((0,a.zw)(this.$filters.unixToDatetime(d.order.create_at)),1)]),(0,r._)("p",L,[C,(0,r.Uk)((0,a.zw)(d.order.id),1)])]),(0,r._)("div",D,[j,(0,r._)("button",{type:"button",class:(0,a.C_)(["btn btn-sm btn-success py-1 me-2 align-self-start",{disabled:d.order.is_paid}]),onClick:e[1]||(e[1]=e=>t.$emit("updateOrder",d.order))}," 已完成 ",2),(0,r._)("button",{type:"button",class:(0,a.C_)(["btn btn-sm btn-danger py-1 align-self-start",{disabled:!d.order.is_paid}]),onClick:e[2]||(e[2]=e=>t.$emit("updateOrder",d.order))}," 未完成 ",2)])]),(0,r._)("table",S,[U,(0,r._)("tbody",null,[(0,r._)("tr",q,[(0,r._)("td",null," 共 "+(0,a.zw)(d.orderItems.reduce(((t,e)=>t+e.qty),0))+" 件 ",1),(0,r._)("td",null,(0,a.zw)(`${t.$filters.currency(d.order.total+d.couponInfo.total)} 元`),1),H,(0,r._)("td",null,(0,a.zw)(d.couponInfo.title),1),(0,r._)("td",null,(0,a.zw)(`- ${t.$filters.currency(d.couponInfo.total)} 元`),1),(0,r._)("td",null,(0,a.zw)(`$ ${t.$filters.currency(d.order.total)} 元`),1)])])])]),(0,r._)("div",J,[N,(0,r._)("table",P,[W,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.orderItems,((e,s)=>((0,r.wg)(),(0,r.iD)("tr",{key:"orderItems"+s},[(0,r._)("td",null,(0,a.zw)(e.product.title),1),(0,r._)("td",null,(0,a.zw)(e.product.id),1),(0,r._)("td",null,(0,a.zw)(e.qty),1),(0,r._)("td",null,(0,a.zw)(e.product.price===e.product.origin_price?"無":`${Math.floor(e.product.price/e.product.origin_price*10)}折`),1),(0,r._)("td",Y,(0,a.zw)(t.$filters.currency(e.product.price)),1),(0,r._)("td",T,(0,a.zw)(t.$filters.currency(e.final_total)),1)])))),128))])])]),(0,r._)("div",Z,[K,(0,r._)("p",V,[B,(0,r.Uk)((0,a.zw)(d.order.user.address),1)]),(0,r._)("p",A,[E,(0,r.Uk)((0,a.zw)(d.order.message?d.order.message:"無"),1)]),(0,r._)("table",F,[G,(0,r._)("tbody",null,[(0,r._)("tr",null,[(0,r._)("td",null,(0,a.zw)(d.order.user.name),1),(0,r._)("td",null,(0,a.zw)(d.order.user.tel),1),(0,r._)("td",null,(0,a.zw)(d.order.user.email),1)])])])])])):(0,r.kq)("",!0),(0,r._)("div",Q,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=(...t)=>o.hideModal&&o.hideModal(...t))}," 關閉 ")])])])],512)],64)}var X=s(7972),tt=s.n(X),et={data(){return{modal:{},order:{},orderItems:[],couponInfo:{total:"",title:""},isLoading:!1}},props:["tempOrder"],emits:["updateOrder"],watch:{tempOrder(){this.getData()}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide(),this.getData()},getData(){this.order=JSON.parse(JSON.stringify(this.tempOrder)),this.orderItems=Object.values(this.order.products),this.orderItems[0].coupon?(this.couponInfo.total=this.order.total/(this.orderItems[0].coupon.percent/100)-this.order.total,this.couponInfo.title=`${this.orderItems[0].coupon.code} ${this.orderItems[0].coupon.title}`):(this.couponInfo.total=0,this.couponInfo.title="無")}},mounted(){this.modal=new(tt())(this.$refs.orderModal,{backdrop:"static"})}},st=s(89);const rt=(0,st.Z)(et,[["render",R]]);var at=rt,lt=s(6567),dt={data(){return{orderList:[],tempOrder:{},isLoading:!1,pageInfo:{}}},components:{OrderModal:at,pagination:lt.Z},inject:["emitter"],methods:{getOrderList(t=1){this.isLoading=!0,window.scrollTo({top:0});const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/admin/orders?page=${t}`;this.axios.get(e).then((t=>{this.isLoading=!1,t.data.success?(this.orderList=t.data.orders,this.pageInfo=t.data.pagination):this.emitter.emit("sendMsg",{message:`訂單讀取失敗：${t.data.message}`,status:"error"})})).catch((t=>{this.emitter.emit("sendMsg",{message:`訂單讀取失敗：${t}`,status:"error"})}))},editProduct(t){this.tempOrder=t,this.$refs.orderModal.showModal()},deleteOrder(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/admin/order/${t.id}`;this.axios.delete(e).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"訂單已刪除",status:"success"}),this.getOrderList(this.pageInfo.current_page)):this.emitter.emit("sendMsg",{message:`訂單刪除失敗：${t.data.message}`,status:"error"})})).catch((t=>{this.emitter.emit("sendMsg",{message:`訂單刪除失敗：${t}`,status:"error"})}))},updateOrder(t){const e=JSON.parse(JSON.stringify(t));e.is_paid=!e.is_paid;const s=`https://vue3-course-api.hexschool.io/api/nn_macaron/admin/order/${e.id}`;this.axios.put(s,{data:e}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"已更新訂單資訊",status:"success"}),this.tempOrder=e,this.getOrderList(this.pageInfo.current_page)):this.emitter.emit("sendMsg",{message:`訂單更新失敗：${t.data.message}`,status:"error"})})).catch((t=>{this.emitter.emit("sendMsg",{message:`訂單更新失敗：${t}`,status:"error"})}))}},created(){this.getOrderList()}};const ot=(0,st.Z)(dt,[["render",h]]);var nt=ot}}]);
//# sourceMappingURL=108.ad61f6b9.js.map