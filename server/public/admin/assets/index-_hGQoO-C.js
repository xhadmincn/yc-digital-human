import{d as V,s as q,i as y,j as U,z,o as s,a as A,m as t,w as a,e as o,p as d,B as c,C as m,b as E,D as G,G as H,H as D,I as K,E as J,v as M,q as O,K as Q}from"./index-CCrR8gz-.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-DDaBj0sS.js";import{E as X,a as Y}from"./el-table-column-D7nUoGJX.js";import"./el-checkbox-DAGPPbNY.js";import"./el-tag-Cl2Qmz3l.js";import{E as Z}from"./el-card-D8ZdqwP3.js";import{E as ee,a as te}from"./el-form-DkAfNPH3.js";import"./el-form-item-l0sNRNKZ.js";import{u as ae}from"./usePaging-L7-2Frc5.js";import{a as oe}from"./useDictOptions-BPbpikja.js";import{_ as le,a as ne,b as se}from"./edit.vue_vue_type_script_setup_true_name_dhPackageEdit_lang-B0Eac8I6.js";import"./el-select-CfHlCGCq.js";import"./index-CLznhjfG.js";import"./token-DI9FKtlJ.js";import"./isEqual-JI6aO8r4.js";import"./_Uint8Array-uB5CFG-g.js";import"./_initCloneObject-CPhW_kte.js";import"./_baseClone-BB0WOwCk.js";import"./index-DHgbyyKv.js";import"./index-lIngYJLf.js";const ie={class:"mt-4"},re={class:"flex mt-4 justify-end"},de=V({name:"dhPackageLists"}),Fe=V({...de,setup(me){const u=q(),_=y(!1),f=U({name:""}),b=y([]),x=l=>{b.value=l.map(({id:e})=>e)},{dictData:P}=oe(""),{pager:p,getLists:v,resetParams:$,resetPage:B}=ae({fetchFun:se,params:f}),F=async()=>{var l;_.value=!0,await D(),(l=u.value)==null||l.open("add")},L=async l=>{var e,g;_.value=!0,await D(),(e=u.value)==null||e.open("edit"),(g=u.value)==null||g.setFormData(l)},w=async l=>{await K.confirm("确定要删除？"),await ne({id:l}),v()};return v(),(l,e)=>{const g=J,C=ee,i=M,N=te,h=Z,R=O,r=X,S=Y,T=W,k=z("perms"),I=Q;return s(),A("div",null,[t(h,{class:"!border-none mb-4",shadow:"never"},{default:a(()=>[t(N,{class:"mb-[-16px]",model:o(f),inline:""},{default:a(()=>[t(C,{label:"套餐名称",prop:"name"},{default:a(()=>[t(g,{class:"w-[280px]",modelValue:o(f).name,"onUpdate:modelValue":e[0]||(e[0]=n=>o(f).name=n),clearable:"",placeholder:"请输入套餐名称"},null,8,["modelValue"])]),_:1}),t(C,null,{default:a(()=>[t(i,{type:"primary",onClick:o(B)},{default:a(()=>e[4]||(e[4]=[d("查询")])),_:1},8,["onClick"]),t(i,{onClick:o($)},{default:a(()=>e[5]||(e[5]=[d("重置")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),c((s(),m(h,{class:"!border-none",shadow:"never"},{default:a(()=>[c((s(),m(i,{type:"primary",onClick:F},{icon:a(()=>[t(R,{name:"el-icon-Plus"})]),default:a(()=>[e[6]||(e[6]=d(" 新增 "))]),_:1})),[[k,["digitalhuman.dh_package/add"]]]),c((s(),m(i,{disabled:!o(b).length,onClick:e[1]||(e[1]=n=>w(o(b)))},{default:a(()=>e[7]||(e[7]=[d(" 删除 ")])),_:1},8,["disabled"])),[[k,["digitalhuman.dh_package/delete"]]]),E("div",ie,[t(S,{data:o(p).lists,onSelectionChange:x},{default:a(()=>[t(r,{type:"selection",width:"55"}),t(r,{label:"套餐名称",prop:"name","show-overflow-tooltip":""}),t(r,{label:"套餐价格",prop:"price","show-overflow-tooltip":""}),t(r,{label:"套餐点数",prop:"points","show-overflow-tooltip":""}),t(r,{label:"排序（升序）",prop:"sort","show-overflow-tooltip":""}),t(r,{label:"操作",width:"120",fixed:"right"},{default:a(({row:n})=>[c((s(),m(i,{type:"primary",link:"",onClick:j=>L(n)},{default:a(()=>e[8]||(e[8]=[d(" 编辑 ")])),_:2},1032,["onClick"])),[[k,["digitalhuman.dh_package/edit"]]]),c((s(),m(i,{type:"danger",link:"",onClick:j=>w(n.id)},{default:a(()=>e[9]||(e[9]=[d(" 删除 ")])),_:2},1032,["onClick"])),[[k,["digitalhuman.dh_package/delete"]]])]),_:1})]),_:1},8,["data"])]),E("div",re,[t(T,{modelValue:o(p),"onUpdate:modelValue":e[2]||(e[2]=n=>G(p)?p.value=n:null),onChange:o(v)},null,8,["modelValue","onChange"])])]),_:1})),[[I,o(p).loading]]),o(_)?(s(),m(le,{key:0,ref_key:"editRef",ref:u,"dict-data":o(P),onSuccess:o(v),onClose:e[3]||(e[3]=n=>_.value=!1)},null,8,["dict-data","onSuccess"])):H("",!0)])}}});export{Fe as default};