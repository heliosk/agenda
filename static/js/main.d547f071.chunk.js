(this.webpackJsonpagenda=this.webpackJsonpagenda||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/ic-logo.190ff2d8.svg"},26:function(e,t,a){e.exports=a.p+"static/media/ic-search.8fd12e49.svg"},27:function(e,t,a){e.exports=a.p+"static/media/ic-book.de526db5.svg"},33:function(e,t,a){e.exports=a(56)},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=a(31),i=a(1),s=a(4),u=a(6),m=a(32),d=function(e,t){switch(t.type){case"ADD_CONTACT":return{contacts:[].concat(Object(m.a)(e.contacts),[t.payload])};case"FIND_CONTACT":return Object(u.a)({},e,{filtered:e.contacts.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.name.match(a)||e.email.match(a)||e.phone.match(a)}))});case"UPDATE_CONTACT":return Object(u.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"DELETE_CONTACT":return Object(u.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});default:return e}},p={contacts:[]},f=Object(n.createContext)(),b=function(e){var t=e.children,a=Object(n.useReducer)(d,p),r=Object(s.a)(a,2),o=r[0],l=r[1];return c.a.createElement(f.Provider,{value:{contactState:o,contactDispatch:l}},t)},E=a(10),h=a(11),g=a.n(h),v=a(23),O=a(59),C=a(24),y=a.n(C),N=a(12),j=a.n(N),x={content:{padding:0,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",boxShadow:"0 16px 10px 0 rgba(0, 0, 0, 0.16)",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"}},T=function(e){var t=e.isOpen,a=e.closeModal,r=e.currentId,o=Object(n.useContext)(f),l=o.contactState,i=o.contactDispatch,m=Object(n.useState)(!1),d=Object(s.a)(m,2),p=d[0],b=d[1],h={id:Object(O.a)(),name:"",email:"",phone:""},C=Object(n.useState)(h),N=Object(s.a)(C,2),T=N[0],k=N[1],D=function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,n,c,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,l.contacts.filter((function(e){return e.id===r}));case 3:t=e.sent,a=t[0],n=a.id,c=a.name,o=a.email,i=a.phone,k(Object(u.a)({},T,{id:n,name:c,email:o,phone:i})),b(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){k(Object(u.a)({},T,Object(E.a)({},e.target.name,e.target.value)))},A=function(){k(h),a()},w=function(){return Object.values(T).every((function(e){return""===e}))};return c.a.createElement(j.a,{appElement:document.getElementById("root"),id:"contact-modal",isOpen:t,onAfterOpen:D,onRequestClose:a,style:x},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=T.id,a=T.name,n=T.email,c=T.phone;i(p?{type:"UPDATE_CONTACT",payload:{id:t,name:a,email:n,phone:c}}:{type:"ADD_CONTACT",payload:{id:t,name:a,email:n,phone:c}}),A()}},c.a.createElement("div",{className:"header"},c.a.createElement("p",null,"Criar novo contato")),c.a.createElement("div",{className:"body"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"name"},"Nome"),c.a.createElement("input",{name:"name",type:"text",value:T.name,onChange:S})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"email"},"E-mail"),c.a.createElement("input",{name:"email",type:"email",value:T.email,onChange:S})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"phone"},"Telefone"),c.a.createElement(y.a,{mask:"(99)99999-9999",name:"phone",type:"text",className:"phone",value:T.phone,onChange:S}))),c.a.createElement("div",{className:"footer"},c.a.createElement("button",{className:"button default",onClick:A},"Cancelar"),c.a.createElement("button",{type:"submit",className:"button ".concat(w()?"disabled":"success"),disabled:w()},"Salvar"))))},k=function(e){var t=e.text,a=e.icon,n=e.styles,r=e.onClick;return c.a.createElement("button",{className:"button ".concat(n),onClick:r},a,t)},D=a(25),S=a.n(D),A=a(26),w=a.n(A),R=function(){var e=Object(n.useContext)(f),t=e.contactState,a=e.contactDispatch,r=Object(n.useState)(!1),o=Object(s.a)(r,2),l=o[0],i=o[1],u=Object(n.useRef)(""),m=function(){i(!l)};return c.a.createElement("header",null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:S.a,alt:"logo"})),c.a.createElement("div",{className:"create-user"},t.contacts.length>0&&c.a.createElement(k,{icon:c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}),styles:"primary slim",text:"Criar contato",onClick:m})),c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",placeholder:"Buscar...",onChange:function(){a({type:"FIND_CONTACT",payload:u.current.value})},ref:u}),c.a.createElement("img",{src:w.a,alt:"buscar"})),c.a.createElement(T,{isOpen:l,closeModal:m}))},I=a(30),P=function(e){var t=e.name,a=function(){return t.charAt(0).toUpperCase()};return c.a.createElement("div",{className:"round-avatar ".concat(function(){var e=a(),t=[{color:"orange",letters:["A","I","Q","W"]},{color:"green",letters:["B","J","R","Z"]},{color:"blue",letters:["C","K","S"]},{color:"egg",letters:["D","L","T"]},{color:"purple",letters:["E","M","U"]},{color:"pink",letters:["F","N","V"]},{color:"cyan",letters:["G","O","X"]},{color:"shrimp",letters:["H","P","Y"]}].filter((function(t){return t.letters.includes(e)}));return t.length>0?t[0].color:"grey"}())},a())},H=a(27),M=a.n(H),_=a(28),B={content:{padding:0,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",boxShadow:"0 16px 10px 0 rgba(0, 0, 0, 0.16)",borderRadius:"16px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"}},F=function(e){var t=e.isOpen,a=e.closeModal,r=e.currentId,o=Object(n.useContext)(f).contactDispatch;return c.a.createElement(j.a,{appElement:document.getElementById("root"),id:"contact-remove-modal",isOpen:t,onRequestClose:a,style:B},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"DELETE_CONTACT",payload:r}),a()}},c.a.createElement("div",{className:"header"},c.a.createElement("p",null,"Excluir contato")),c.a.createElement("div",{className:"body"},"Deseja realmente excluir este contato?"),c.a.createElement("div",{className:"footer"},c.a.createElement("button",{className:"button default",onClick:a},"Cancelar"),c.a.createElement("button",{type:"submit",className:"button success"},"Excluir"))))},U=function(){var e=Object(n.useContext)(f).contactState,t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),b=p[0],E=p[1],h=[{Header:"",accessor:"avatar",Cell:function(e){var t=e.row;return c.a.createElement(P,{name:t.original.name})}},{Header:"Nome",accessor:"name"},{Header:"E-mail",accessor:"email"},{Header:"Telefone",accessor:"phone"},{Header:"",accessor:"options",Cell:function(e){var t=e.row;return c.a.createElement("div",{className:"contact-options"},c.a.createElement("i",{className:"fas fa-pencil-alt",onClick:function(){return v(t.original.id)}}),c.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return O(t.original.id)}}))}}],g=function(){r&&E(null),o(!r)},v=function(e){E(e),o(!0)},O=function(e){E(e),m(!0)},C=function(){var t=e.filtered?e.filtered:e.contacts,a=Object(n.useMemo)((function(){return h}),[]),r=Object(n.useMemo)((function(){return t}),[t]),o=Object(_.useTable)({columns:a,data:r}),l=o.getTableProps,i=o.getTableBodyProps,s=o.headerGroups,u=o.rows,m=o.prepareRow;return c.a.createElement("table",Object.assign({},l(),{className:"contact-table"}),c.a.createElement("thead",null,s.map((function(e){return c.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return c.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),c.a.createElement("tbody",i(),u.map((function(e){m(e);var t=Number(e.id)===u.length-1;return c.a.createElement(I.a.tr,Object.assign({},e.getRowProps(),function(e){return e?{animate:{backgroundColor:["#fff3f2","#f8f9fd"]},transition:{delay:"10",duration:1}}:{}}(t)),e.cells.map((function(e){return c.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))};return c.a.createElement("div",{id:"contact-list-container"},e.contacts.length<1?c.a.createElement("div",{id:"contact-create"},c.a.createElement("img",{src:M.a,alt:"contato"}),c.a.createElement("p",null,"Nenhum contato foi criado ainda."),c.a.createElement(k,{icon:c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}),styles:"primary",text:"Criar contato",onClick:g})):c.a.createElement(C,null),c.a.createElement(T,{isOpen:r,closeModal:g,currentId:b}),c.a.createElement(F,{isOpen:u,closeModal:function(){u&&E(null),m(!u)},currentId:b}))},G=function(){return c.a.createElement(b,null,c.a.createElement("div",{id:"home-screen-container"},c.a.createElement(R,null),c.a.createElement(U,null)))},J=(a(52),function(){return c.a.createElement(l.a,null,c.a.createElement(i.a,{path:"/agenda",exact:!0,component:G}))});o.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d547f071.chunk.js.map