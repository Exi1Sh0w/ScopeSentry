import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D-P66s0b.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-DzS_3tDx.js";import{_ as m}from"./Table.vue_vue_type_script_lang-DdOJsK0_.js";import{a as d}from"./index-aOVIK3QA.js";import"./el-card-CPC624pE.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DlNIkf37.js";import"./el-table-column-CJaSjLdY.js";import"./index-JO37T6o5.js";import"./debounce-DyHqnlru.js";import"./el-checkbox-loHH9uax.js";import"./isArrayLikeObject-Dq1Yzf1q.js";import"./raf-DB262BBG.js";import"./el-tag-_sL1o8Wv.js";import"./el-pagination-DRjingk1.js";import"./el-select-BaMyRQim.js";import"./strings-DPi8fV8r.js";import"./useInput-Bya7PiM9.js";import"./el-image-viewer-DLvPjPaT.js";import"./el-empty-CCoR6p6P.js";import"./tsxHelper-BMdcAgtg.js";import"./el-dropdown-item-CyzgcIYS.js";import"./castArray-TO7858nG.js";import"./refs-CKTz6JAG.js";import"./index-_4DONs8X.js";import"./index-K75Umdvu.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),j=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],u=a(!0);let c=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{u.value=!1}));t&&(c.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(n)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:j,data:p(c),loading:u.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};
