import{d as i,o as e,a as s,m as _,w as l,F as p,r as f,C as x,b as V,t as h,eJ as g,eL as k,x as v}from"./index-CCrR8gz-.js";const y={class:"pages-menu"},B=i({__name:"menu",props:{menus:{type:Object,default:()=>({})},modelValue:{type:String,default:"1"}},emits:["update:modelValue"],setup(t,{emit:o}){const c=o,u=a=>{c("update:modelValue",a)};return(a,S)=>{const d=g,m=k;return e(),s("div",y,[_(m,{"default-active":t.modelValue,class:"w-[160px] min-h-[668px]",onSelect:u},{default:l(()=>[(e(!0),s(p,null,f(t.menus,(n,r)=>(e(),x(d,{index:r,key:n.id},{default:l(()=>[V("span",null,h(n.name),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])])}}}),C=v(B,[["__scopeId","data-v-2f7567ae"]]);export{C as default};