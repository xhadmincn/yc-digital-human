import{_ as e}from"./page-meta.d3be293c.js";import{k as a,U as t,z as s,o as r,b as l,a as o,w as p,F as u,r as m,q as d,s as n,h as i,c,f as g,t as _}from"./index-e4851b67.js";import{_ as f}from"./z-paging.32dbd147.js";import{b as x}from"./recharge.94e84478.js";import"./_plugin-vue_export-helper.1b428a4d.js";const y=a({__name:"recharge_record",setup(a){const y=t(),h=s([]),b=async(e,a)=>{try{const t=await x({page_no:e,page_size:a});y.value.complete(t.lists)}catch(t){y.value.complete(!1)}};return(a,t)=>{const s=d(n("page-meta"),e),x=i,j=d(n("z-paging"),f);return r(),l(u,null,[o(s,{"page-style":a.$theme.pageStyle},null,8,["page-style"]),o(j,{ref_key:"paging",ref:y,modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),onQuery:b,"show-loading-more-when-reload":!0},{default:p((()=>[o(x,{class:"pt-2.5"},{default:p((()=>[(r(!0),l(u,null,m(h.value,(e=>(r(),c(x,{key:e.id,class:"bg-white border-solid border-b border-0 border-light px-[26rpx] py-[24rpx]"},{default:p((()=>[o(x,{class:"flex justify-between"},{default:p((()=>[o(x,{class:"mr-2"},{default:p((()=>[g(_(e.tips),1)])),_:2},1024),o(x,{class:"text-lg text-primary"},{default:p((()=>[g(" +"+_(e.order_amount),1)])),_:2},1024)])),_:2},1024),o(x,{class:"text-sm text-muted mr-1"},{default:p((()=>[g(_(e.create_time),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])],64)}}});export{y as default};