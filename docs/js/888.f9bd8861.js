"use strict";(self["webpackChunkpjcan"]=self["webpackChunkpjcan"]||[]).push([[888],{8233:function(e,t,l){l.d(t,{Z:function(){return v}});var s=l(3396),i=l(7139),n=l(5101),a=l(401),o=l(1489),u=l(1888),r=l(1334);const d={class:"pl-4 pr-4 text-h5 text-uppercase"};function p(e,t,l,p,m,c){const b=(0,s.up)("menu-dots");return(0,s.wg)(),(0,s.j4)(o._,{class:"card"},{default:(0,s.w5)((()=>[(0,s.Wm)(u.Z,{class:"card__text"},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"body",{},void 0,!0)])),_:3}),(0,s.Wm)(r.h,{class:"justify-space-between"},{default:(0,s.w5)((()=>[(0,s._)("div",d,(0,i.zw)(l.title),1),(0,s.Wm)(a.Y,{class:"border-dialog-btns"},{default:(0,s.w5)((()=>[void 0!==l.custom?((0,s.wg)(),(0,s.j4)(n.T,{key:0,icon:l.custom,color:"primary",onClick:t[0]||(t[0]=t=>e.$emit("click:custom"))},null,8,["icon"])):(0,s.kq)("",!0),void 0!==l.like?((0,s.wg)(),(0,s.j4)(n.T,{key:1,icon:"mdi-heart",color:"primary",onClick:t[1]||(t[1]=t=>e.$emit("click:like"))})):(0,s.kq)("",!0),l.menu&&l.menu.length>0?((0,s.wg)(),(0,s.j4)(b,{key:2,menu:l.menu,color:"primary","onClick:item":t[2]||(t[2]=t=>e.$emit("click:menu",t))},null,8,["menu"])):(0,s.kq)("",!0)])),_:1})])),_:1})])),_:3})}var m=l(4465),c={name:"Card",components:{MenuDots:m.Z},props:{title:String,menu:Array,like:{type:Boolean,default:void 0},custom:{type:String,default:void 0}},emits:["click:custom","click:like","click:menu"]},b=l(89);const g=(0,b.Z)(c,[["render",p],["__scopeId","data-v-1e57cac7"]]);var v=g},8769:function(e,t,l){l.d(t,{Z:function(){return d}});var s=l(3396),i=l(165);function n(e,t,l,n,a,o){return(0,s.wg)(),(0,s.j4)(i.h,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),label:l.label,hint:l.hint,variant:"underlined",type:"number",min:l.min,max:l.max,oninput:"\r\n\t\t\tif(Number(this.value) > Number(this.max)) { this.value = this.max; }\r\n\t\t\telse if (Number(this.value) < Number(this.min)) { this.value = ''; }\r\n\t\t","persistent-hint":"",dense:"",onBlur:n.onBlur,disabled:l.disabled},null,8,["modelValue","label","hint","min","max","onBlur","disabled"])}var a=l(4870),o={name:"NumberField",props:{modelValue:Number,label:String,hint:String,min:{type:Number,default:1},max:{type:Number,default:300},defaultValue:{type:Number,default:3},disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:l,min:i,max:n,defaultValue:o}=(0,a.BK)(e),u=(0,s.Fl)({get:()=>l.value?.toString()??"",set:e=>t("update:modelValue",Number(e))});(0,s.YP)(u,(e=>{Number(e)<i.value?u.value="":Number(e)>n.value&&(u.value=n.value)}));const r=()=>{Number(u.value)<i.value&&(u.value=o.value)};return{value:u,onBlur:r}}},u=l(89);const r=(0,u.Z)(o,[["render",n]]);var d=r},4888:function(e,t,l){l.r(t),l.d(t,{default:function(){return $}});var s=l(3396),i=l(7139);function n(e,t,l,n,a,o){const u=(0,s.up)("settings-card"),r=(0,s.up)("flicking"),d=(0,s.up)("button-definition-dialog");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{ref:"flicking",class:"buttons",options:{bound:!0,align:"prev"}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.list,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:`buttons-${t}`,class:(0,i.C_)(["mr-4",`flicking-${n.display}`])},[(0,s.Wm)(u,{class:(0,i.C_)(`settings-card-${t}`),title:e.title,"in-r":e.inR,"onUpdate:in-r":t=>e.inR=t,"press-single":e.pressSingle,"onUpdate:press-single":t=>e.pressSingle=t,"press-dual":e.pressDual,"onUpdate:press-dual":t=>e.pressDual=t,"press-triple":e.pressTriple,"onUpdate:press-triple":t=>e.pressTriple=t,"press-hold":e.pressHold,"onUpdate:press-hold":t=>e.pressHold=t,release:e.release,"onUpdate:release":t=>e.release=t,"is-loaded-config":n.isLoadedConfig,icon:e.icon,onChange:n.onButtonConfigChange},null,8,["class","title","in-r","onUpdate:in-r","press-single","onUpdate:press-single","press-dual","onUpdate:press-dual","press-triple","onUpdate:press-triple","press-hold","onUpdate:press-hold","release","onUpdate:release","is-loaded-config","icon","onChange"])],2)))),128))])),_:1},512),(0,s.Wm)(d,{modelValue:n.visibleButtonDefinitionDialog,"onUpdate:modelValue":t[0]||(t[0]=e=>n.visibleButtonDefinitionDialog=e),list:n.list,resistance:n.resistanceButtonDefinition,type:n.typeButtonDefinition,"onClick:apply":n.onButtonDefinitionApply},null,8,["modelValue","list","resistance","type","onClick:apply"])],64)}var a=l(4870),o=l(8157),u=l(3780),r=l(9497),d=l(7637),p=l(6824),m=l(8521),c=l(240);function b(e,t,l,i,n,a){const o=(0,s.up)("number-field"),u=(0,s.up)("card");return(0,s.wg)(),(0,s.j4)(u,{class:"settings-card",title:l.title,custom:l.icon},{body:(0,s.w5)((()=>[(0,s.Wm)(p.o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m.D,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{modelValue:i.modelResistance,"onUpdate:modelValue":t[0]||(t[0]=e=>i.modelResistance=e),label:e.$t("buttons.resistance.title"),hint:e.$t("buttons.resistance.description"),max:3999,disabled:!l.isLoadedConfig,onChange:t[1]||(t[1]=t=>e.$emit("change"))},null,8,["modelValue","label","hint","disabled"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:i.modelPressSingle,"onUpdate:modelValue":t[2]||(t[2]=e=>i.modelPressSingle=e),label:e.$t("buttons.pressSingle.title"),items:i.functionsList,hint:e.$t("buttons.pressSingle.description"),variant:"underlined","item-title":"label","item-value":"value","persistent-hint":"",disabled:!l.isLoadedConfig,onChange:t[3]||(t[3]=t=>e.$emit("change"))},null,8,["modelValue","label","items","hint","disabled"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:i.modelPressDual,"onUpdate:modelValue":t[4]||(t[4]=e=>i.modelPressDual=e),label:e.$t("buttons.pressDual.title"),items:i.functionsList,hint:e.$t("buttons.pressDual.description"),variant:"underlined","item-title":"label","item-value":"value","persistent-hint":"",disabled:!l.isLoadedConfig,onChange:t[5]||(t[5]=t=>e.$emit("change"))},null,8,["modelValue","label","items","hint","disabled"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:i.modelPressTriple,"onUpdate:modelValue":t[6]||(t[6]=e=>i.modelPressTriple=e),label:e.$t("buttons.pressTriple.title"),items:i.functionsList,hint:e.$t("buttons.pressTriple.description"),variant:"underlined","item-title":"label","item-value":"value","persistent-hint":"",disabled:!l.isLoadedConfig,onChange:t[7]||(t[7]=t=>e.$emit("change"))},null,8,["modelValue","label","items","hint","disabled"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:i.modelPressHold,"onUpdate:modelValue":t[8]||(t[8]=e=>i.modelPressHold=e),label:e.$t("buttons.pressHold.title"),items:i.functionsList,hint:e.$t("buttons.pressHold.description"),variant:"underlined","item-title":"label","item-value":"value","persistent-hint":"",disabled:!l.isLoadedConfig,onChange:t[9]||(t[9]=t=>e.$emit("change"))},null,8,["modelValue","label","items","hint","disabled"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:i.modelRelease,"onUpdate:modelValue":t[10]||(t[10]=e=>i.modelRelease=e),label:e.$t("buttons.release.title"),items:i.functionsList,hint:e.$t("buttons.release.description"),variant:"underlined","item-title":"label","item-value":"value","persistent-hint":"",disabled:!l.isLoadedConfig,onChange:t[11]||(t[11]=t=>e.$emit("change"))},null,8,["modelValue","label","items","hint","disabled"])])),_:1})])),_:1})])),_:1},8,["title","custom"])}l(7658);var g=l(8233),v=l(8769),f={name:"SettingsCard",components:{Card:g.Z,NumberField:v.Z},props:{title:{type:String,required:!0},inR:Number,pressSingle:Number,pressDual:Number,pressTriple:Number,pressHold:Number,release:Number,isLoadedConfig:Boolean,icon:String},emits:["change","update:inR","update:pressSingle","update:pressDual","update:pressTriple","update:pressHold","update:release"],setup(e,{emit:t}){const{inR:l,pressSingle:i,pressDual:n,pressTriple:o,pressHold:r,release:d}=(0,a.BK)(e),p=(0,s.Fl)((()=>{const e=[],t=(0,u.Ib)("buttons.functions");for(const l in t)e.push({label:t[l],value:Number(l)});return e})),m=(0,s.Fl)({get:()=>l.value??0,set:e=>t("update:inR",e)}),c=(0,s.Fl)({get:()=>i.value??0,set:e=>t("update:pressSingle",e)}),b=(0,s.Fl)({get:()=>n.value??0,set:e=>t("update:pressDual",e)}),g=(0,s.Fl)({get:()=>o.value??0,set:e=>t("update:pressTriple",e)}),v=(0,s.Fl)({get:()=>r.value??0,set:e=>t("update:pressHold",e)}),f=(0,s.Fl)({get:()=>d.value??0,set:e=>t("update:release",e)});return{functionsList:p,modelResistance:m,modelPressSingle:c,modelPressDual:b,modelPressTriple:g,modelPressHold:v,modelRelease:f}}},h=l(89);const y=(0,h.Z)(f,[["render",b]]);var D=y,V=l(5101);function S(e,t,l,n,a,o){const u=(0,s.up)("number-field"),r=(0,s.up)("dialog-template");return(0,s.wg)(),(0,s.j4)(r,{modelValue:n.visible,"onUpdate:modelValue":t[3]||(t[3]=e=>n.visible=e),"content-class":"button-definition-dialog",icon:"mdi-gesture-tap-button",title:e.$t("buttons.definition.title"),width:"550px",text:"",actions:""},{body:(0,s.w5)((()=>[(0,s.Wm)(p.o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m.D,{cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{modelValue:l.resistance,"onUpdate:modelValue":t[0]||(t[0]=e=>l.resistance=e),label:e.$t("buttons.resistance.title"),hint:e.$t("buttons.resistance.description"),max:3999},null,8,["modelValue","label","hint"])])),_:1}),(0,s.Wm)(m.D,{cols:"12",class:"pt-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.r,{modelValue:n.modelType,"onUpdate:modelValue":t[1]||(t[1]=e=>n.modelType=e),label:e.$t("buttons.definition.type.title"),items:l.list,hint:e.$t("buttons.definition.type.description"),variant:"underlined","item-title":"title","item-value":"type","persistent-hint":""},null,8,["modelValue","label","items","hint"])])),_:1})])),_:1})])),btns:(0,s.w5)((()=>[(0,s.Wm)(V.T,{color:"primary",onClick:n.onApplyClick,disabled:n.disabled},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("btn.apply")),1)])),_:1},8,["onClick","disabled"]),(0,s.Wm)(V.T,{color:"primary",onClick:t[2]||(t[2]=e=>n.visible=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("btn.cancel")),1)])),_:1})])),_:1},8,["modelValue","title"])}var _=l(1572),k={name:"ButtonDefinitionDialog",components:{DialogTemplate:_.Z,NumberField:v.Z},props:{modelValue:{type:Boolean,default:!1},list:{type:Array,required:!0},resistance:Number,type:Number},emits:["update:modelValue","click:apply"],setup(e,{emit:t}){const{modelValue:l,type:i}=(0,a.BK)(e),n=(0,s.Fl)({get:()=>l.value,set:e=>t("update:modelValue",e)}),o=(0,a.iH)(void 0),u=(0,s.Fl)((()=>void 0===o.value));(0,s.YP)(n,(e=>{e&&(o.value=i.value>=0?i.value:void 0)}));const r=()=>{n.value=!1,t("click:apply",o.value)};return{visible:n,modelType:o,disabled:u,onApplyClick:r}}};const C=(0,h.Z)(k,[["render",S],["__scopeId","data-v-5c57bb78"]]);var T=C,w=l(1483),P={name:"buttons",components:{Flicking:d.Co,SettingsCard:D,ButtonDefinitionDialog:T},setup(){const{name:e}=(0,o.AW)(),t=(0,a.iH)(null);(0,s.JJ)("flicking",t);const l=(0,a.iH)(!1),i=(0,a.iH)(!1),n=(0,a.iH)(-1),d=(0,a.iH)(0),p=(0,a.iH)([{title:(0,u.$t)("buttons.mode"),type:w.SM.BUTTON_MODE,icon:"mdi-menu",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0},{title:(0,u.$t)("buttons.seekUp"),type:w.SM.BUTTON_SEEK_UP,icon:"mdi-play",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0},{title:(0,u.$t)("buttons.seekDown"),type:w.SM.BUTTON_SEEK_DOWN,icon:"mdi-play",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0},{title:(0,u.$t)("buttons.volUp"),type:w.SM.BUTTON_VOL_UP,icon:"mdi-volume-plus",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0},{title:(0,u.$t)("buttons.volDown"),type:w.SM.BUTTON_VOL_DOWN,icon:"mdi-volume-minus",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0},{title:(0,u.$t)("buttons.volMute"),type:w.SM.BUTTON_VOL_MUTE,icon:"mdi-volume-mute",inR:0,pressSingle:0,pressDual:0,pressTriple:0,pressHold:0,release:0}]),m=e=>{e!==r.ZP.configs.buttons.sendValue&&(r.ZP.configs.buttons.sendValue=e,r.ZP.queryConfigsButtons())},c=e=>{l.value=e.isData,e.isData&&(e.items?.forEach(((e,t)=>{const l=p.value[t];l.inR=e.inR,l.pressSingle=e.exec[w.AV.PRESS_SINGLE],l.pressDual=e.exec[w.AV.PRESS_DUAL],l.pressTriple=e.exec[w.AV.PRESS_TRIPLE],l.pressHold=e.exec[w.AV.PRESS_HOLD],l.release=e.exec[w.AV.RELEASE]})),m(!0))},b=e=>{e.isData&&!i.value&&(n.value=e.index,d.value=e.r,i.value=!0)};(0,s.bv)((()=>{r.ZP.addListener(r.Zy,c),r.ZP.addListener(r.lK,b),c(r.ZP.configs.buttons)})),(0,s.Ah)((()=>{r.ZP.removeListener(r.Zy,c),r.ZP.removeListener(r.lK,b),m(!1)}));const g=()=>{const{items:e}=r.ZP.configs.buttons;p.value.forEach(((t,l)=>{const s=e[l];s.inR=t.inR,s.exec[w.AV.PRESS_SINGLE]=t.pressSingle,s.exec[w.AV.PRESS_DUAL]=t.pressDual,s.exec[w.AV.PRESS_TRIPLE]=t.pressTriple,s.exec[w.AV.PRESS_HOLD]=t.pressHold,s.exec[w.AV.RELEASE]=t.release})),r.ZP.queryConfigsButtons()},v=e=>{r.ZP.configs.buttons.items[e].inR=d.value,r.ZP.queryConfigsButtons(),c(r.ZP.configs.buttons)};return{flicking:t,display:e,isLoadedConfig:l,list:p,visibleButtonDefinitionDialog:i,resistanceButtonDefinition:d,typeButtonDefinition:n,onButtonConfigChange:g,onButtonDefinitionApply:v}}};const U=(0,h.Z)(P,[["render",n],["__scopeId","data-v-02346477"]]);var $=U}}]);