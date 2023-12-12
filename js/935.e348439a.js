"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[935],{1462:function(t,e,i){i.d(e,{Z:function(){return $}});var r=i(3396),s=i(7139),a=i(9242);const l={class:"card h-100"},o={class:"zIndex position-absolute end-0 text-end p-2 icon-bg",style:{height:"5rem",width:"5rem"}},c=(0,r._)("i",{class:"bi bi-suit-heart"},null,-1),n=[c],d={key:0,class:"zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"},p={key:1,class:"zIndex position-absolute mt-3 p-2 text-white smallTag"},u=["src","alt"],g={class:"card-body position-relative"},h={class:"d-flex flex-column justify-content-between h-100"},m={class:"card-title fw-bolder"},f={class:"mb-2"},y={key:0,class:"mb-2"},w={key:1,class:"mb-2"},_={class:"text-gray me-2"},C={class:"text-danger"},b=(0,r._)("i",{class:"bi bi-cart-plus me-2"},null,-1);function v(t,e,i,c,v,k){const D=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",o,[(0,r._)("a",{href:"#",class:(0,s.C_)(["link-dark fs-4",{collected:k.isCollected}]),onClick:e[0]||(e[0]=(0,a.iM)((t=>k.setCollect(i.product.id)),["prevent"]))},n,2)]),"期間限定"===i.product.category?((0,r.wg)(),(0,r.iD)("p",d," 期間限定 ")):i.product.origin_price!==i.product.price?((0,r.wg)(),(0,r.iD)("p",p," 特價 "+(0,s.zw)(Math.floor(i.product.price/i.product.origin_price*10))+" 折 ",1)):(0,r.kq)("",!0),(0,r.Wm)(D,{to:`/product/${i.product.id}`,class:"overflow-hidden rounded-top"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:i.product.imageUrl,class:"card-img-top productImg",alt:i.product.title,style:{height:"300px","object-fit":"cover"}},null,8,u)])),_:1},8,["to"]),(0,r._)("div",g,[(0,r.Wm)(D,{to:`/product/${i.product.id}`,class:"stretched-link"},null,8,["to"]),(0,r._)("div",h,[(0,r._)("h5",m,(0,s.zw)(i.product.title),1),(0,r._)("div",null,[(0,r._)("p",f,(0,s.zw)(i.product.unit),1),i.product.origin_price===i.product.price?((0,r.wg)(),(0,r.iD)("p",y," NT$"+(0,s.zw)(t.$filters.currency(i.product.origin_price))+"元 ",1)):((0,r.wg)(),(0,r.iD)("p",w,[(0,r._)("del",_,"NT$"+(0,s.zw)(t.$filters.currency(i.product.origin_price))+"元",1),(0,r._)("span",C,"NT$"+(0,s.zw)(t.$filters.currency(i.product.price))+"元",1)])),(0,r._)("a",{href:"#",class:"zIndex position-relative btn btn-outline-secondary w-100",onClick:e[1]||(e[1]=(0,a.iM)((t=>this.emitter.emit("addCart",{product_id:i.product.id,qty:1})),["prevent"]))},[b,(0,r.Uk)("加到購物車")])])])])])}var k={data(){return{collect:""}},computed:{isCollected(){return this.collect.findIndex((t=>t===this.product.id))>-1}},props:["product"],inject:["emitter"],methods:{setCollect(t){this.emitter.emit("setCollect",t)}},created(){this.emitter.on("collectInfo",(t=>{this.collect=t})),this.emitter.emit("getCollectInfo")}},D=i(89);const x=(0,D.Z)(k,[["render",v]]);var $=x},5935:function(t,e,i){i.r(e),i.d(e,{default:function(){return q}});var r=i(3396),s=i(7139);const a={class:"container my-5"},l={class:"row justify-content-between gx-5"},o={class:"col-lg-3"},c={class:"col-lg-9"},n={key:0,class:"alert alert-danger d-flex"},d=(0,r._)("i",{class:"bi bi-exclamation-triangle-fill me-1"},null,-1),p={class:"mb-0"},u={key:0},g={class:"row row-cols-1 row-cols-lg-3 g-3"};function h(t,e,i,h,m,f){const y=(0,r.up)("WebLoading"),w=(0,r.up)("ProductCategory"),_=(0,r.up)("ProductCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(y,{"is-loading":m.isLoading},null,8,["is-loading"]),(0,r._)("div",a,[(0,r._)("div",l,[(0,r._)("div",o,[(0,r.Wm)(w,{categories:m.categories,filter:m.filter,onSetFilter:f.setFilter,class:"sticky-sm-top",style:{top:"110px","z-index":"1"}},null,8,["categories","filter","onSetFilter"])]),(0,r._)("div",c,[0===f.filterData.length?((0,r.wg)(),(0,r.iD)("div",n,[d,(0,r._)("p",p,[(0,r.Uk)(" 找不到產品 "),m.filter?((0,r.wg)(),(0,r.iD)("span",u,'(關鍵字："'+(0,s.zw)(m.filter)+'")，請使用其他關鍵字搜尋',1)):(0,r.kq)("",!0)])])):(0,r.kq)("",!0),(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.filterData,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:"product"+e},[(0,r.Wm)(_,{product:t,onAddCart:f.addCart},null,8,["product","onAddCart"])])))),128))])])])])],64)}var m=i(1462),f=i(9242);const y={class:"list-group mb-5"},w=(0,r._)("i",{class:"bi bi-caret-down me-2"},null,-1),_={key:0},C={class:"fw-bolder"},b={class:"collapse",id:"collapseCategory"},v=["onClick"],k=(0,r._)("i",{class:"bi bi-caret-down me-2"},null,-1),D={class:"fw-bolder"},x={id:"collapseSearch",class:"collapse"},$={class:"input-group"},z={type:"text",class:"form-control border-primary",placeholder:"輸入關鍵字，如巧克力",ref:"searchInput"},I=(0,r._)("i",{class:"bi bi-search me-1"},null,-1),K=[I];function S(t,e,i,a,l,o){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("a",{class:"list-group-item list-group-item-action list-group-item-secondary rounded-0",href:"#",onClick:e[0]||(e[0]=(0,f.iM)(((...t)=>l.collapseCategory.toggle&&l.collapseCategory.toggle(...t)),["prevent"]))},[w,(0,r.Uk)("分類篩選"),l.searchKey?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",_,[(0,r.Uk)(" ："),(0,r._)("span",C,(0,s.zw)(i.filter?i.filter:"全部產品"),1)]))]),(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.categories,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{href:"#",class:(0,s.C_)(["list-group-item list-group-item-action list-group-item-primary",{active:i.filter===e&&!l.searchKey}]),key:"type"+e,onClick:(0,f.iM)((t=>o.setCategory(e)),["prevent"])},(0,s.zw)(e||"全部產品")+" ("+(0,s.zw)(t)+") ",11,v)))),128))]),(0,r._)("a",{class:"list-group-item list-group-item-action list-group-item-secondary",href:"#",onClick:e[1]||(e[1]=(0,f.iM)(((...t)=>l.collapseSearch.toggle&&l.collapseSearch.toggle(...t)),["prevent"]))},[k,(0,r.Uk)("關鍵字搜尋"),(0,r._)("span",D,(0,s.zw)(l.searchKey?`："${l.searchKey}"`:""),1)]),(0,r._)("div",x,[(0,r._)("div",{class:(0,s.C_)(["list-group-item list-group-item-action list-group-item-primary",{active:l.searchKey}])},[(0,r._)("div",$,[(0,r._)("input",z,null,512),(0,r._)("button",{class:"btn btn-primary",type:"button",onClick:e[2]||(e[2]=t=>o.search())},K)])],2)])])}var j=i(3455),F={data(){return{collapseCategory:{},collapseSearch:{},searchKey:""}},props:["categories","filter"],methods:{setCategory(t){this.searchKey="",this.$refs.searchInput.value="",this.$emit("setFilter",t)},search(){this.searchKey=this.$refs.searchInput.value,this.$emit("setFilter",this.searchKey)}},mounted(){const t=window.innerWidth<992;this.collapseCategory=new j.Collapse("#collapseCategory",{toggle:!t}),this.collapseSearch=new j.Collapse("#collapseSearch",{toggle:!t})},updated(){window.scrollTo({top:0})}},M=i(89);const W=(0,M.Z)(F,[["render",S]]);var L=W,T={data(){return{allData:[],filter:"",categories:{},isLoading:!1}},emits:["addCart"],inject:["emitter"],components:{ProductCard:m.Z,ProductCategory:L},computed:{filterData(){return""===this.filter?this.allData:this.allData.filter((t=>t.category===this.filter||t.title.indexOf(this.filter)>-1))}},methods:{getData(){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/products/all";this.isLoading=!0,this.axios.get(t).then((t=>{this.isLoading=!1,t.data.success?(this.allData=t.data.products,this.getCategories()):this.getDataError(`(${t.data.message})`)})).catch((t=>{this.isLoading=!1,this.getDataError(`(${t})`)}))},getDataError(t=""){this.emitter.emit("sendMsg",{message:`產品無法載入 ${t}`,status:"error"})},getCategories(){this.categories[""]=this.allData.length,this.allData.forEach((t=>{-1===Object.keys(this.categories).indexOf(t.category)?this.categories[t.category]=1:this.categories[t.category]+=1}))},setFilter(t){this.filter=t},addCart(t){this.$emit("addCart",t)}},created(){this.getData(),this.emitter.on("filterStore",(t=>{this.filter=t})),this.emitter.emit("getFilterStore")}};const U=(0,M.Z)(T,[["render",h]]);var q=U}}]);
//# sourceMappingURL=935.e348439a.js.map