import{o as e,c as t,w as l,L as s,h as r}from"./index-e4851b67.js";import{_ as a}from"./_plugin-vue_export-helper.1b428a4d.js";const o=a({name:"u-form",props:{model:{type:Object,default:()=>({})},errorType:{type:Array,default:()=>["message","toast"]},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:()=>({})},inputAlign:{type:String,default:"left"},clearable:{type:Boolean,default:!0}},provide(){return{uForm:this}},data:()=>({rules:{}}),created(){this.fields=[]},methods:{setRules(e){this.rules=e},resetFields(){this.fields.map((e=>{e.resetField()}))},validate(e){return new Promise((t=>{let l=!0,s=0,r=[],a=[];this.fields.map((o=>{o.validation("",((o,i)=>{o&&(l=!1,r.push(o),a.push(i)),++s===this.fields.length&&(t(l,a[0]),-1===this.errorType.indexOf("none")&&this.errorType.indexOf("toast")>=0&&r.length&&this.$u.toast(r[0]),"function"==typeof e&&e(l,a[0]))}))}))}))}}},[["render",function(a,o,i,d,n,u){const p=r;return e(),t(p,{class:"u-form"},{default:l((()=>[s(a.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-13626807"]]);export{o as _};