(function(t){function e(e){for(var o,i,n=e[0],u=e[1],c=e[2],d=0,m=[];d<n.length;d++)i=n[d],r[i]&&m.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,n=1;n<s.length;n++){var u=s[n];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0dfe":function(t,e,s){},"48bd":function(t,e,s){"use strict";var o=s("0dfe"),r=s.n(o);r.a},"524a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",[s("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"top"}},[s("div",{staticClass:"container"},[s("b-navbar-brand",{attrs:{href:"#"}},[t._v("Sistema de Gerenciamento de Patrimônio")]),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("b-nav-item-dropdown",{attrs:{right:"",text:"Listar"}},[s("b-dropdown-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/equipamento"}},[t._v("Equipamento")])],1),s("b-dropdown-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/usuario"}},[t._v("Usuário")])],1),s("b-dropdown-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/setor"}},[t._v("Setor")])],1)],1)],1)],1)],1)])],1),s("router-view")],1)},a=[],i={name:"app"},n=i,u=s("2877"),c=Object(u["a"])(n,r,a,!1,null,null,null),l=c.exports,d=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"container"},[s("b-jumbotron",{attrs:{header:"Bem vindo!"}},[s("p",{staticClass:"lead"},[t._v("Este é um sistema simples de gerenciamento de patrimônio de uma empresa de pequeno porte, desenvolvido em Node.JS, VueJS, Express e MongoDB.")])])],1)])},h=[],f={name:"home"},v=f,b=(s("8b71"),Object(u["a"])(v,m,h,!1,null,null,null)),p=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4",attrs:{id:"body"}},[[s("div",[t.message.error?s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"danger"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n      "+t._s(t.message.error)+"\n      ")]):t._e()],1)],[s("div",[t.message.success?s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n      "+t._s(t.message.success)+"\n      ")]):t._e()],1)],s("b-row",[s("b-col",[s("h3",[t._v("Lista de Setores")])]),s("b-col",[s("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.openSetor()}}},[t._v("Adicionar")])],1)],1),s("b-row",[s("b-col",[s("b-table",{staticClass:"text-center",attrs:{striped:"",hover:"",items:t.setores,fields:t.fields},scopedSlots:t._u([{key:"editar",fn:function(e){return[s("a",{attrs:{href:"#"},on:{click:function(s){return t.openSetor(e.item._id)}}},[t._v("Editar")])]}},{key:"excluir",fn:function(e){return[s("b-button",{attrs:{variant:"danger"},on:{click:function(s){return t.deleteSetor(e.item._id)}}},[t._v("Excluir")])]}}])}),0==t.setores?s("h3",{staticClass:"text-center"},[t._v("Nenhum setor encontrado")]):t._e()],1)],1),s("div",[s("b-modal",{ref:"modalSetor",attrs:{title:"Setor"}},[s("b-form",[s("div",{staticClass:"d-block"},[s("label",{attrs:{for:"input-default"}},[t._v("Nome:")]),s("b-form-input",{model:{value:t.nomeSetor,callback:function(e){t.nomeSetor=e},expression:"nomeSetor"}})],1)]),s("div",{staticClass:"float-right",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{staticClass:"ml-1",on:{click:t.hideModal}},[t._v("Fechar")]),s("b-button",{staticClass:"ml-1",attrs:{variant:"primary"},on:{click:t.saveSetor}},[t._v("Salvar")])],1)],1)],1)],2)},_=[],w=s("bc3a"),S=s.n(w),C="api/setor/",U={name:"setor",data:function(){return{setores:[],fields:["editar","nome","excluir"],message:{error:"",success:""},idSetor:"",nomeSetor:"",dismissSecs:5,dismissCountDown:0}},created:function(){this.getSetores()},methods:{getSetores:function(){var t=this;S.a.get(C).then(function(e){t.setores=e.data.setores})},openSetor:function(t){var e=this;t?S.a.get(C+t).then(function(t){e.idSetor=t.data.setor._id,e.nomeSetor=t.data.setor.nome,e.showModal()}):(this.idSetor="",this.nomeSetor="",this.showModal())},saveSetor:function(){var t=this;this.idSetor?this.nomeSetor?S.a.put(C+this.idSetor,{nome:this.nomeSetor}).then(function(e){t.hideModal(),e.data.success_msg?(t.message.success=e.data.success_msg,t.showAlert()):(t.message.error=e.data.error_msg,t.showAlert())}):alert("Nome é obrigatório!"):this.nomeSetor?S.a.post(C,{nome:this.nomeSetor}).then(function(e){t.hideModal(),e.data.success_msg?(t.message.success=e.data.success_msg,t.showAlert()):(t.message.error=e.data.error_msg,t.showAlert())}):alert("Nome é obrigatório!"),this.message.success="",this.message.error="",this.getSetores()},deleteSetor:function(t){var e=this,s=confirm("Você deseja excluir este registro?");s&&S.a.delete(C+t).then(function(t){t.data.success_msg?(e.message.success=t.data.success_msg,e.showAlert()):(e.message.error=t.data.error_msg,e.showAlert())}),this.message.success="",this.message.error="",this.getSetores()},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},showModal:function(){this.$refs.modalSetor.show()},hideModal:function(){this.$refs.modalSetor.hide()}}},x=U,k=(s("6a73"),Object(u["a"])(x,g,_,!1,null,null,null)),y=k.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4",attrs:{id:"body"}},[[s("div",[t.message.error?s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"danger"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n      "+t._s(t.message.error)+"\n      ")]):t._e()],1)],[s("div",[t.message.success?s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n      "+t._s(t.message.success)+"\n      ")]):t._e()],1)],s("b-row",[s("b-col",[s("h3",[t._v("Lista de Usuários")])]),s("b-col",[s("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.openUsuario()}}},[t._v("Adicionar")])],1)],1),s("b-row",[s("b-col",[s("b-table",{staticClass:"text-center",attrs:{striped:"",hover:"",items:t.usuarios,fields:t.fields},scopedSlots:t._u([{key:"editar",fn:function(e){return[s("a",{attrs:{href:"#"},on:{click:function(s){return t.openUsuario(e.item._id)}}},[t._v("Editar")])]}},{key:"excluir",fn:function(e){return[s("b-button",{attrs:{variant:"danger"},on:{click:function(s){return t.deleteUsuario(e.item._id)}}},[t._v("Excluir")])]}}])}),0==t.usuarios?s("h3",{staticClass:"text-center"},[t._v("Nenhum usuário encontrado")]):t._e()],1)],1),s("div",[s("b-modal",{ref:"modalUsuario",attrs:{title:"Usuários"}},[s("b-form",[s("div",{staticClass:"d-block"},[s("label",{attrs:{for:"input-default"}},[t._v("Nome:")]),s("b-form-input",{model:{value:t.nomeUsuario,callback:function(e){t.nomeUsuario=e},expression:"nomeUsuario"}}),s("label",{attrs:{for:"input-default"}},[t._v("Setor:")]),s("b-form-select",{attrs:{options:t.setores},model:{value:t.setorUsuario,callback:function(e){t.setorUsuario=e},expression:"setorUsuario"}})],1)]),s("div",{staticClass:"float-right",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{staticClass:"ml-1",on:{click:t.hideModal}},[t._v("Fechar")]),s("b-button",{staticClass:"ml-1",attrs:{variant:"primary"},on:{click:t.saveUsuario}},[t._v("Salvar")])],1)],1)],1)],2)},M=[],j="api/usuario/",A={name:"usuario",data:function(){return{usuarios:[],setores:[],fields:{editar:{label:"Editar"},nome:{label:"Nome"},"setor.nome":{label:"Setor"},excluir:{label:"Excluir"}},message:{error:"",success:""},idUsuario:"",nomeUsuario:"",setorUsuario:"",dismissSecs:5,dismissCountDown:0}},created:function(){this.getUsuarios(),this.getSetores()},methods:{getUsuarios:function(){var t=this;S.a.get(j).then(function(e){t.usuarios=e.data.usuarios})},openUsuario:function(t){var e=this;t?S.a.get(j+t).then(function(t){e.idUsuario=t.data.usuario._id,e.nomeUsuario=t.data.usuario.nome,e.setorUsuario=t.data.usuario.setor,e.showModal()}):(this.idUsuario="",this.nomeUsuario="",this.setorUsuario="",this.showModal())},getSetores:function(){var t=this,e="api/setor/";S.a.get(e).then(function(e){t.setores=e.data.setores.map(function(t){return{value:t._id,text:t.nome}})})},saveUsuario:function(){var t=this;this.idUsuario?this.nomeUsuario?this.setorUsuario?S.a.put(j+this.idUsuario,{nome:this.nomeUsuario,setor:this.setorUsuario}).then(function(e){t.hideModal(),e.data.success_msg?(t.message.success=e.data.success_msg,t.showAlert()):(t.message.error=e.data.error_msg,t.showAlert())}):alert("Setor é obrigatório!"):alert("Nome é obrigatório!"):this.nomeUsuario?this.setorUsuario?S.a.post(j,{nome:this.nomeUsuario,setor:this.setorUsuario}).then(function(e){t.hideModal(),e.data.success_msg?(t.message.success=e.data.success_msg,t.showAlert()):(t.message.error=e.data.error_msg,t.showAlert())}):alert("Setor é obrigatório!"):alert("Nome é obrigatório!"),this.message.success="",this.message.error="",this.getUsuarios()},deleteUsuario:function(t){var e=this,s=confirm("Você deseja excluir este registro?");s&&S.a.delete(j+t).then(function(t){t.data.success_msg?(e.message.success=t.data.success_msg,e.showAlert()):(e.message.error=t.data.error_msg,e.showAlert())}),this.message.success="",this.message.error="",this.getUsuarios()},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},showModal:function(){this.$refs.modalUsuario.show()},hideModal:function(){this.$refs.modalUsuario.hide()}}},E=A,O=(s("efee"),Object(u["a"])(E,D,M,!1,null,null,null)),$=O.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"equipamento"},[o("div",{staticClass:"container"},[o("img",{attrs:{src:s("c603")}})])])}],P={name:"equipamento"},J=P,L=(s("48bd"),Object(u["a"])(J,N,q,!1,null,null,null)),T=L.exports;o["a"].use(d["a"]);var V=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:p},{path:"/setor",name:"setor",component:y},{path:"/usuario",name:"usuario",component:$},{path:"/equipamento",name:"equipamento",component:T}]}),B=s("9f7b"),F=s.n(B);s("f9e3"),s("2dd8");o["a"].use(F.a),o["a"].config.productionTip=!1,new o["a"]({router:V,render:function(t){return t(l)}}).$mount("#app")},"6a73":function(t,e,s){"use strict";var o=s("daa5"),r=s.n(o);r.a},"8b71":function(t,e,s){"use strict";var o=s("e3a2"),r=s.n(o);r.a},c603:function(t,e,s){t.exports=s.p+"img/pagina-em-construcao.ae198710.png"},daa5:function(t,e,s){},e3a2:function(t,e,s){},efee:function(t,e,s){"use strict";var o=s("524a"),r=s.n(o);r.a}});
//# sourceMappingURL=app.d7dcdda1.js.map