import{P as e,g as t,U as a}from"./PanelGroup-BZTxz-ho.js";import{s as l,v as o,x as s,y as r,d as n,z as i,A as u,r as p,B as d,C as m,o as c,i as f,w as v,f as y,n as g,a as _,D as h,F as x,G as b,j as k,H as j,t as w,e as S,I as C,J as T,K as B,L as N,M as U,N as V,O as A,P as E,Q as I,c as F,R as M,S as z,l as P,_ as $}from"./index-DI3N4DDI.js";import{E as H,a as R}from"./el-col-BEOU1v5m.js";import{E as D}from"./el-card-CCD9TSoE.js";import{E as L}from"./el-progress-BfuMY75K.js";import{E as O}from"./el-text-CnhbgniK.js";import"./el-tooltip-l0sNRNKZ.js";import{u as G,E as J}from"./el-popper-B9xEIKf9.js";/* empty css                   */import{E as Q,a as K}from"./el-form-Bgr1UCE8.js";import{_ as X}from"./Table.vue_vue_type_script_lang-DW90GZY1.js";import{E as Y}from"./el-tag-CQw-CsVu.js";import{_ as Z}from"./Dialog.vue_vue_type_style_index_0_lang-CB0H7wcP.js";import{g as q}from"./index-B53TvVVO.js";import{g as W}from"./index-Czp1rAbc.js";import{c as ee}from"./index-DGBbPKmX.js";import"./el-skeleton-item-CGWmjVTr.js";import"./CountTo.vue_vue_type_script_setup_true_lang-Dal-qC6P.js";import"./index-C6HOZMRK.js";import"./castArray-CHejV_tG.js";import"./el-table-column-BeBSjzmc.js";import"./index-CMEhF4Ek.js";import"./debounce-C9rnDQym.js";import"./el-checkbox-Df5USE6T.js";import"./isArrayLikeObject-jQ3Se21q.js";import"./raf-Bj5h1035.js";import"./el-pagination-D9CRNaLC.js";import"./el-select-D7UeB03W.js";import"./strings-BdiANRsY.js";import"./useInput-BJ8eDgPK.js";import"./el-image-viewer-CL3Ie8Xn.js";import"./el-empty-CMQh976C.js";import"./tsxHelper-BxOdfN3f.js";import"./el-dropdown-item-CS2CnWdl.js";import"./refs-CW4D39DO.js";import"./index-DUf0N3jf.js";const te=l({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:o,default:"primary"},cancelButtonType:{type:String,values:o,default:"text"},icon:{type:s,default:()=>r},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:G.teleported,persistent:G.persistent,width:{type:[String,Number],default:150}}),ae={confirm:e=>e instanceof MouseEvent,cancel:e=>e instanceof MouseEvent},le=n({name:"ElPopconfirm"});const oe=U(N(n({...le,props:te,emits:ae,setup(e,{emit:t}){const a=e,{t:l}=i(),o=u("popconfirm"),s=p(),r=()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.onClose)||t.call(e)},n=d((()=>({width:m(a.width)}))),N=e=>{t("confirm",e),r()},U=e=>{t("cancel",e),r()},V=d((()=>a.confirmButtonText||l("el.popconfirm.confirmButtonText"))),A=d((()=>a.cancelButtonText||l("el.popconfirm.cancelButtonText")));return(e,t)=>(c(),f(_(J),B({ref_key:"tooltipRef",ref:s,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${_(o).namespace.value}-popover`,"popper-style":_(n),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:v((()=>[y("div",{class:g(_(o).b())},[y("div",{class:g(_(o).e("main"))},[!e.hideIcon&&e.icon?(c(),f(_(h),{key:0,class:g(_(o).e("icon")),style:x({color:e.iconColor})},{default:v((()=>[(c(),f(b(e.icon)))])),_:1},8,["class","style"])):k("v-if",!0),j(" "+w(e.title),1)],2),y("div",{class:g(_(o).e("action"))},[S(_(C),{size:"small",type:"text"===e.cancelButtonType?"":e.cancelButtonType,text:"text"===e.cancelButtonType,onClick:U},{default:v((()=>[j(w(_(A)),1)])),_:1},8,["type","text"]),S(_(C),{size:"small",type:"text"===e.confirmButtonType?"":e.confirmButtonType,text:"text"===e.confirmButtonType,onClick:N},{default:v((()=>[j(w(_(V)),1)])),_:1},8,["type","text"])],2)],2)])),default:v((()=>[e.$slots.reference?T(e.$slots,"reference",{key:0}):k("v-if",!0)])),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}}),[["__file","popconfirm.vue"]])),se={class:"flex flex-col gap-2"},re=$(n({__name:"Analysis",setup(l){const{t:o}=P(),s=p(!0),r=V([{field:"nodeName",label:o("node.nodeName")},{field:"taskCount",label:o("node.taskCount"),formatter:(e,t,a)=>A(Y,{round:!0,effect:"dark"},(()=>a))},{field:"nodeStatus",label:o("node.nodeStatus"),formatter:(e,t,a)=>A(Y,{type:"1"===a?"success":"2"===a?"warning":"danger",effect:"dark"},(()=>o("1"==a?"node.statusRun":"2"==a?"node.statusStop":"node.statusError")))}]),n=V([{field:"name",label:o("task.taskName")},{field:"taskNum",label:o("task.taskCount"),formatter:(e,t,a)=>A(Y,{round:!0,effect:"dark"},(()=>a))},{field:"progress",label:o("task.taskProgress"),formatter:(e,t,a)=>A(L,{percentage:a,type:"line",striped:!0,status:a<100?"":"success",stripedFlow:a<100})},{field:"creatTime",label:o("task.createTime")}]),i=V([{field:"nodeName",label:o("node.nodeName")},{field:"nodeUsageCpu",label:o("node.nodeUsageCpu"),formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),A(L,{percentage:l,type:"dashboard",color:l<50?"#26a33f":l<=80?"#fe9900":"#df2800"})}},{field:"nodeUsageMemory",label:o("node.nodeUsageMemory"),formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),A(L,{percentage:l,type:"dashboard",color:l<50?"#26a33f":l<80?"#fe9900":"#df2800"})}}]),u=V([{field:"name",label:o("common.name")},{field:"cversion",label:o("common.cversion")},{field:"lversion",label:o("common.lversion"),formatter:(e,t,a)=>{if(e.cversion!=e.lversion){G.value=!0;const t=e.msg.split("\\n");let l="";return t.forEach((e=>{l+=`<div>${e}</div>`})),A(J,{placement:"top",content:l,rawContent:!0},[A(O,{type:"danger"},a)])}return A(O,a)}}]);let d=p([]);const m=p([]),g=async()=>{try{const e=await q();e&&e.data&&Array.isArray(e.data.list)&&(m.value=e.data.list.map((e=>({nodeName:e.name,taskCount:e.running,nodeStatus:e.state,nodeUsageCpu:e.cpuNum,nodeUsageMemory:e.memNum}))),d.value=V(e.data.list.map((e=>({nodeName:e.name,nodeUsageCpu:e.cpuNum,nodeUsageMemory:e.memNum})))))}catch(e){}finally{s.value=!1}},h=p([]),x=async()=>{const e=await W("",1,10);h.value=V(e.data.list.map((e=>({name:e.name,taskNum:e.taskNum,progress:e.progress,creatTime:e.creatTime}))))},b=p([]),T=async()=>{await Promise.all([g(),x()]),s.value=!1};(async()=>{const e=await t();b.value=V(e.data.list.map((e=>({name:e.name,cversion:e.cversion,lversion:e.lversion,msg:e.msg}))))})(),T();const B=setInterval(T,1e4);E((()=>{clearInterval(B)}));const N=p(""),U=async()=>{localStorage.getItem("plugin_key")?ae.value=!0:le.value=!0},$=async()=>{if(N.value){200==(await ee(N.value)).code&&(localStorage.setItem("plugin_key",N.value),le.value=!1,ae.value=!0)}},G=p(!1),te=p({server:"https://github.com/Autumn-27/ScopeSentry/archive/refs/heads/main.zip",scan:""}),ae=p(!1),le=p(!1);async function re(){const e=localStorage.getItem("plugin_key");505==(await a(te.value.server,te.value.scan,e)).code&&localStorage.removeItem("plugin_key")}return(t,a)=>{const l=I("BaseButton");return c(),F(z,null,[S(e),S(_(R),{gutter:20,justify:"space-between"},{default:v((()=>[S(_(H),{xl:12,lg:12,md:24,sm:24,xs:24},{default:v((()=>[S(_(D),{shadow:"hover",class:"mb-20px"},{header:v((()=>[y("span",null,w(_(o)("dashboard.nodeInfo")),1)])),default:v((()=>[S(_(X),{columns:r,data:m.value,stripe:"",border:!1,height:250},null,8,["columns","data"])])),_:1})])),_:1}),S(_(H),{xl:12,lg:12,md:24,sm:24,xs:24},{default:v((()=>[S(_(D),{shadow:"hover",class:"mb-20px"},{header:v((()=>[y("span",null,w(_(o)("dashboard.taskInfo")),1)])),default:v((()=>[S(_(X),{columns:n,data:h.value,stripe:"",border:!1,height:250,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0}},null,8,["columns","data"])])),_:1})])),_:1}),S(_(H),{span:12},{default:v((()=>[S(_(D),{shadow:"hover",class:"mb-25px"},{header:v((()=>[y("div",null,[y("span",null,w(_(o)("node.nodeUsageStatus")),1)])])),default:v((()=>[S(_(X),{columns:i,data:_(d),highlightCurrentRow:!1,stripe:"",border:!1,height:600},null,8,["columns","data"])])),_:1})])),_:1}),S(_(H),{span:12},{default:v((()=>[S(_(D),{shadow:"hover",class:"mb-25px"},{header:v((()=>[S(_(R),null,{default:v((()=>[S(_(H),{span:12},{default:v((()=>[y("div",null,[y("span",null,w(_(o)("common.version")),1),G.value?(c(),f(_(O),{key:0,type:"danger",size:"small",style:{position:"relative",left:"1rem"}},{default:v((()=>[j("*"+w(_(o)("common.updatemsg")),1)])),_:1})):k("",!0)])])),_:1}),G.value?(c(),f(_(H),{key:0,span:3,offset:8},{default:v((()=>[S(_(oe),{title:"Are you sure?",onConfirm:U},{reference:v((()=>[S(_(C),{color:"#626aef"},{default:v((()=>[j(w(_(o)("common.update")),1)])),_:1})])),_:1})])),_:1})):k("",!0)])),_:1})])),default:v((()=>[S(_(X),{columns:u,data:b.value,stripe:"",border:!1,height:600},null,8,["columns","data"])])),_:1})])),_:1})])),_:1}),S(_(Z),{modelValue:ae.value,"onUpdate:modelValue":a[2]||(a[2]=e=>ae.value=e),title:"Update",center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:430},{default:v((()=>[S(_(O),{type:"danger",size:"small",style:{position:"relative",left:"1rem"}},{default:v((()=>[j("*更新目前只支持docker容器搭建的程序，输入的url地址确保docker内可访问，节点最新版在github中releases的linux版本")])),_:1}),S(_(Q),{model:te.value,"label-width":"120px",class:"upload-form"},{default:v((()=>[S(_(K),{label:"server url"},{default:v((()=>[S(_(M),{modelValue:te.value.server,"onUpdate:modelValue":a[0]||(a[0]=e=>te.value.server=e),placeholder:"server url"},null,8,["modelValue"])])),_:1}),S(_(K),{label:"scan url"},{default:v((()=>[S(_(M),{modelValue:te.value.scan,"onUpdate:modelValue":a[1]||(a[1]=e=>te.value.scan=e),placeholder:"scan url(https://github.com/Autumn-27/ScopeSentry-Scan/releases/download/vx.x.x/ScopeSentry-Scan_linux_amd64_vx.x.x.zip)"},null,8,["modelValue"])])),_:1}),S(_(K),null,{default:v((()=>[S(_(C),{type:"primary",onClick:re},{default:v((()=>[j("Submit")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),S(_(Z),{modelValue:le.value,"onUpdate:modelValue":a[4]||(a[4]=e=>le.value=e),title:_(o)("plugin.key"),center:"",width:"30%",style:{"max-width":"400px",height:"200px"}},{default:v((()=>[y("div",se,[S(_(J),{class:"item",effect:"dark",content:_(o)("plugin.keyMsg"),placement:"top"},{default:v((()=>[S(_(M),{modelValue:N.value,"onUpdate:modelValue":a[3]||(a[3]=e=>N.value=e)},null,8,["modelValue"])])),_:1},8,["content"]),S(l,{onClick:$,type:"primary",class:"w-full"},{default:v((()=>[j("确定")])),_:1})])])),_:1},8,["modelValue","title"])],64)}}}),[["__scopeId","data-v-eea83ea9"]]);export{re as default};
