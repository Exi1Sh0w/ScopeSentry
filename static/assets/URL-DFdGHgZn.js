import{d as e,r as t,s as l,e as a,z as i,S as s,v as r,A as o,B as n,H as p,o as u,c as d,a as m,w as c,I as g,F as j,J as f,l as v,ai as x,_ as h}from"./index-C6fb_XFi.js";import{u as y}from"./useTable-CijeIiBB.js";import{E as b}from"./el-card-B37ahJ8o.js";import{E as _}from"./el-pagination-FWx5cl5J.js";import{E as S}from"./el-tag-C_oEQYGz.js";import"./el-select-vbM8Rxr1.js";import"./el-popper-CeVwVUf9.js";import{E,a as w}from"./el-col-Dl4_4Pn5.js";import{E as C}from"./el-text-BnUG9HvL.js";import{_ as k}from"./Table.vue_vue_type_script_lang-7Pp5E_zy.js";import{u as L}from"./useCrudSchemas-CEXr0LRM.js";import{a as z,d as U,s as V}from"./index-BBupWySc.js";import H from"./Csearch-B51tl_vU.js";import"./index-BWEJ0epC.js";import"./strings-BiUeKphX.js";import"./useInput-IB6tFdGu.js";import"./debounce-BwgdhaaK.js";import"./el-table-column-C9CkC7I1.js";import"./el-checkbox-CvJzNe2E.js";import"./isArrayLikeObject-zBQ5eq7G.js";import"./raf-DGOAeO92.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-DrhdpOg4.js";import"./el-empty-jJjDxScx.js";import"./tsxHelper-CeCzRM_x.js";import"./el-dropdown-item-DpH7Woj3.js";import"./castArray-DRqY4cIf.js";import"./refs-3HtnmaOD.js";import"./index-ghAu5K8t.js";import"./tree-BfZhwLPs.js";import"./index-CnCQNuY4.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-B-a8-WPJ.js";import"./el-divider-Bw95UAdD.js";import"./el-tree-select-D8i5b8X5.js";import"./index-w1A_Rrgh.js";/* empty css                */import"./el-switch-Bh7JeorW.js";import"./Dialog.vue_vue_type_style_index_0_lang-DjaYHddI.js";import"./useIcon-BxqaCND-.js";import"./exportData.vue_vue_type_script_setup_true_lang-C3cw41xZ.js";import"./el-tab-pane-DDoZFwPS.js";import"./el-form-C2Y6uNCj.js";import"./el-radio-group-hI5DSxSU.js";import"./el-space-CdSK6Ce1.js";/* empty css                          */import"./AddTask.vue_vue_type_script_setup_true_lang-BJlN6j_-.js";import"./el-virtual-list-D7NvYvyu.js";import"./el-select-v2-CaMVABoW.js";import"./el-input-number-DVs4I2j5.js";import"./index-CBLGyxDn.js";import"./index-B40b3p-m.js";import"./DetailTemplate-Dao-XeZd.js";import"./index-DWlzJn9A.js";import"./index-fOwuVARc.js";const R=h(e({__name:"URL",props:{projectList:{}},setup(e){const{t:h}=v(),R=[{keyword:"url",example:'url="http://example.com"',explain:h("searchHelp.url")},{keyword:"input",example:'input="example.com"',explain:h("searchHelp.inpur")},{keyword:"source",example:'source="exapmle.com/example.js"',explain:h("searchHelp.source")},{keyword:"type",example:'type="linkfinder"',explain:h("searchHelp.urlType")},{keyword:"project",example:'project="Hackerone"',explain:h("searchHelp.project")}],T=t(""),W=e=>{T.value=e,q()},A=l({}),I=l([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:h("tableDemo.index"),type:"index",minWidth:55},{field:"url",label:"URL",minWidth:250},{field:"status",label:h("dirScan.status"),columnKey:"status",minWidth:120,formatter:(e,t,l)=>{if(null==l)return a("div",null,[i("-")]);let r="";return r=l<300?"#2eb98a":"#ff5252",a(w,{gutter:20},{default:()=>[a(E,{span:1},{default:()=>[a(s,{icon:"clarity:circle-solid",color:r,size:10,style:"transform: translateY(8%)"},null)]}),a(E,{span:2},{default:()=>{return[a(C,null,(e=l,"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)?l:{default:()=>[l]}))];var e}})]})},filters:[{text:"200",value:200},{text:"201",value:201},{text:"204",value:204},{text:"301",value:301},{text:"302",value:302},{text:"304",value:304},{text:"400",value:400},{text:"401",value:401},{text:"403",value:403},{text:"404",value:404},{text:"500",value:500},{text:"502",value:502},{text:"503",value:503},{text:"504",value:504}]},{field:"length",label:"Length",minWidth:120,sortable:"custom"},{field:"source",label:h("URL.source"),minWidth:100},{field:"type",label:h("URL.type"),minWidth:100},{field:"input",label:h("URL.input"),minWidth:200},{field:"tags",label:"TAG",fit:"true",formatter:(e,l,a)=>{null==a&&(a=[]),A[e.id]||(A[e.id]={inputVisible:!1,inputValue:"",inputRef:t(null)});const i=A[e.id],s=async()=>{i.inputValue&&(a.push(i.inputValue),z(e.id,O,i.inputValue)),i.inputVisible=!1,i.inputValue=""};return r(w,{},(()=>[...a.map((t=>r(E,{span:24,key:t},(()=>[r("div",{onClick:e=>((e,t)=>{e.target.classList.contains("el-tag__close")||oe("tags",t)})(e,t)},[r(S,{closable:!0,onClose:()=>(async t=>{const l=a.indexOf(t);l>-1&&a.splice(l,1),U(e.id,O,t)})(t)},(()=>t))])])))),r(E,{span:24},i.inputVisible?()=>r(o,{ref:i.inputRef,modelValue:i.inputValue,"onUpdate:modelValue":e=>i.inputValue=e,class:"w-20",size:"small",onKeyup:e=>{"Enter"===e.key&&s()},onBlur:s}):()=>r(n,{class:"button-new-tag",size:"small",onClick:()=>(i.inputVisible=!0,void x((()=>{})))},(()=>"+ New Tag")))]))},minWidth:"130"},{field:"time",label:h("asset.time"),minWidth:200}]);let O="UrlScan";I.forEach((e=>{e.hidden=e.hidden??!1}));let P=t(!1);const D=({field:e,hidden:t})=>{const l=I.findIndex((t=>t.field===e));-1!==l&&(I[l].hidden=t),(()=>{const e=I.reduce(((e,t)=>(e[t.field]=t.hidden,e)),{});e.statisticsHidden=P.value,localStorage.setItem(`columnConfig_${O}`,JSON.stringify(e))})()};(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${O}`)||"{}");I.forEach((t=>{void 0!==e[t.field]&&"select"!=t.field&&(t.hidden=e[t.field])})),P.value=e.statisticsHidden})();const{allSchemas:F}=L(I),{tableRegister:N,tableState:$,tableMethods:B}=y({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=$,l=await V(T.value,e.value,t.value,ae,Z);return{list:l.data.list,total:l.data.total}},immediate:!1}),{loading:J,dataList:K,total:M,currentPage:G,pageSize:Y}=$,{getList:q,getElTableExpose:X}=B;function Q(){return{background:"var(--el-fill-color-light)"}}Y.value=20,p((()=>{le(),window.addEventListener("resize",le)}));const Z=l({}),ee=async e=>{const t=e.prop,l=e.order;Z[t]=l,q()},te=t(0),le=()=>{const e=window.innerHeight||document.documentElement.clientHeight;te.value=.7*e},ae=l({}),ie=(e,t)=>{Object.assign(ae,t),T.value=e,q()},se=async e=>{Object.assign(ae,e),q()},re=t([]),oe=(e,t)=>{const l=`${e}=${t}`;re.value=[...re.value,l]},ne=e=>{if(re.value){const[t,l]=e.split("=");t in ae&&Array.isArray(ae[t])&&(ae[t]=ae[t].filter((e=>e!==l)),0===ae[t].length&&delete ae[t]),re.value=re.value.filter((t=>t!==e))}},pe=()=>ae;return(e,t)=>(u(),d(j,null,[a(H,{getList:m(q),handleSearch:W,searchKeywordsData:R,index:"UrlScan",getElTableExpose:m(X),projectList:e.$props.projectList,handleFilterSearch:ie,crudSchemas:I,dynamicTags:re.value,handleClose:ne,onUpdateColumnVisibility:D,searchResultCount:m(M),getFilter:pe},null,8,["getList","getElTableExpose","projectList","crudSchemas","dynamicTags","searchResultCount"]),a(m(w),null,{default:c((()=>[a(m(E),null,{default:c((()=>[a(m(b),null,{default:c((()=>[a(m(k),{pageSize:m(Y),"onUpdate:pageSize":t[0]||(t[0]=e=>g(Y)?Y.value=e:null),currentPage:m(G),"onUpdate:currentPage":t[1]||(t[1]=e=>g(G)?G.value=e:null),columns:m(F).tableColumns,data:m(K),"max-height":te.value,stripe:"",border:!0,loading:m(J),resizable:!0,onSortChange:ee,onRegister:m(N),onFilterChange:se,headerCellStyle:Q,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),a(m(E),{":span":24},{default:c((()=>[a(m(b),null,{default:c((()=>[a(m(_),{pageSize:m(Y),"onUpdate:pageSize":t[2]||(t[2]=e=>g(Y)?Y.value=e:null),currentPage:m(G),"onUpdate:currentPage":t[3]||(t[3]=e=>g(G)?G.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m(M)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-6e3a49fc"]]);export{R as default};
