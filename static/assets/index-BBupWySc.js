import{r as a}from"./index-CnCQNuY4.js";const t=(t,s,e,i)=>a.post({url:"/api/asset/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),s=(t,s,e,i)=>a.post({url:"/api/asset/data/card",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),e=(t,s)=>a.post({url:"/api/asset/statistics/port",data:{search:t,filter:s}}),i=(t,s)=>a.post({url:"/api/asset/statistics/type",data:{search:t,filter:s}}),p=(t,s,e,i)=>a.post({url:"/api/asset/statistics/icon",data:{search:t,filter:s,page:e,size:i}}),r=(t,s)=>a.post({url:"/api/asset/statistics/app",data:{search:t,filter:s}}),d=(t,s)=>a.post({url:"/api/asset/statistics/title",data:{search:t,filter:s}}),l=t=>a.post({url:"/api/asset/detail",data:{id:t}}),o=t=>a.post({url:"/api/asset/changelog",data:{id:t}}),u=(t,s,e)=>a.post({url:"/api/data/update/status",data:{id:t,tp:s,status:e}}),g=(t,s,e,i)=>a.post({url:"/api/subdomain/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),c=(t,s,e,i,p)=>a.post({url:"/api/url/data",data:{search:t,pageIndex:s,pageSize:e,filter:i,sort:p}}),n=(t,s,e,i)=>a.post({url:"/api/crawler/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),f=(t,s,e,i)=>a.post({url:"/api/sensitive/result/data2",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),h=t=>a.post({url:"/api/sensitive/result/body",data:{id:t}}),x=(t,s)=>a.post({url:"/api/sensitive/result/names",data:{search:t,filter:s}}),z=(t,s,e)=>a.post({url:"/api/sensitive/result/info",data:{sid:t,search:s,filter:e}}),I=(t,s,e,i,p)=>a.post({url:"/api/dirscan/result/data",data:{search:t,pageIndex:s,pageSize:e,filter:i,sort:p}}),S=(t,s,e,i)=>a.post({url:"/api/page/monitoring/result",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),m=t=>a.post({url:"/api/page/monitoring/diff",data:{id:t}}),v=(t,s,e,i)=>a.post({url:"/api/subdomaintaker/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),b=(t,s)=>a.post({url:"/api/data/delete",data:{ids:t,index:s}}),j=(t,s,e)=>a.post({url:"/api/data/add/tag",data:{id:t,tp:s,tag:e}}),k=(t,s,e)=>a.post({url:"/api/data/delete/tag",data:{id:t,tp:s,tag:e}});export{j as a,p as b,s as c,k as d,e,i as f,t as g,r as h,n as i,I as j,m as k,S as l,h as m,f as n,z as o,x as p,g as q,v as r,c as s,b as t,u,l as v,o as w,d as x};
