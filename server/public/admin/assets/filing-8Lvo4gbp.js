import{_ as F}from"./index-BRmHD8Bn.js";import{d as w,i as x,z as U,o as i,a as u,m as e,w as t,b as l,F as I,r as N,e as f,C as v,p as g,B as $,I as q,E as z,q as A,v as L}from"./index-CCrR8gz-.js";import{E as P}from"./el-card-D8ZdqwP3.js";import{E as S,a as T}from"./el-form-DkAfNPH3.js";import{_ as j}from"./index-CqfWg3vM.js";import"./el-form-item-l0sNRNKZ.js";import{g as G,s as H}from"./website-CAaWQXpp.js";import"./_baseClone-BB0WOwCk.js";import"./_Uint8Array-uB5CFG-g.js";import"./_initCloneObject-CPhW_kte.js";const J={class:"website-filing"},K={class:"py-4 bg-fill-lighter"},M={class:"w-80"},O={class:"w-80"},Q=w({name:"webFilling"}),ae=w({...Q,setup(R){const n=x([{key:"",value:""}]),p=async()=>{const s=await G();s.length&&(n.value=s)},b=()=>{n.value.push({key:"",value:""})},h=s=>{if(n.value.length<=1)return q.msgError("至少保留一个");n.value.splice(s,1)},y=async()=>{await H({config:n.value}),p()};return p(),(s,o)=>{const _=z,c=S,k=j,C=A,m=L,V=T,E=P,B=F,D=U("perms");return i(),u("div",J,[e(E,{shadow:"never",class:"!border-none"},{default:t(()=>[o[2]||(o[2]=l("div",{class:"mb-5"},"站点底部版权备案信息设置",-1)),e(V,{ref:"form",class:"ls-form","label-width":"100px"},{default:t(()=>[(i(!0),u(I,null,N(f(n),(a,d)=>(i(),v(k,{class:"mb-4",key:d,"show-close":f(n).length>1,onClose:r=>h(d)},{default:t(()=>[l("div",K,[e(c,{label:"显示名称",prop:"icp_link"},{default:t(()=>[l("div",M,[l("div",null,[e(_,{modelValue:a.key,"onUpdate:modelValue":r=>a.key=r,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1024),e(c,{label:"跳转链接",prop:"icp_link"},{default:t(()=>[l("div",O,[l("div",null,[e(_,{modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,placeholder:"请输入链接，例如：http://www.beian.gov.cn"},null,8,["modelValue","onUpdate:modelValue"])]),o[0]||(o[0]=l("div",{class:"form-tips"},"跳转链接不设置，则不跳转",-1))])]),_:2},1024)])]),_:2},1032,["show-close","onClose"]))),128)),l("div",null,[e(m,{type:"primary",onClick:b},{default:t(()=>[e(C,{name:"el-icon-Plus"}),o[1]||(o[1]=g(" 添加 "))]),_:1})])]),_:1},512)]),_:1}),$((i(),v(B,null,{default:t(()=>[e(m,{type:"primary",onClick:y},{default:t(()=>o[3]||(o[3]=[g("保存")])),_:1})]),_:1})),[[D,["setting.web.web_setting/setCopyright"]]])])}}});export{ae as default};