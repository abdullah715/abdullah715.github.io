(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{58:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=(a(58),a(15)),l=a(7),o=a(53),d=a(45),j=a.n(d),b=a(47),u=a(13),m=a(6),O=a(8),h=a(74),x=a(49),p=a(78),v=a(70),g=a(29),f=a(28),y=a(1);function C(e,t,a,n,c){function r(e){var n=t[c];n.length>1&&(n.splice(e,1),console.log(n),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},c,Object(f.a)(n)))})))}return Object(y.jsxs)("div",{children:[t[c].map((function(a,s){return Object(y.jsx)("div",{style:{padding:"8px",background:s%2==0?"#eeeff1":""},children:Object(y.jsx)(e,{field:t,handleChange:n,sec_name:c,idx:s,remover:r})})})),Object(y.jsxs)(v.a,{variant:"warning",className:"float-right my-2 mx-2",size:"sm",onClick:function(){var e=t[c],n=Object.keys(e[0]).reduce((function(e,t){return e=Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t,""))}),{});a((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(u.a)({},c,[].concat(Object(f.a)(e),[n])))}))},children:[" ","+ Add ",c]})]})}var N=a(48),w=a.n(N),k=[{id:1,name:"PHP"},{id:2,name:"Laravel"},{id:3,name:"JavaScript"},{id:4,name:"Mongo DB"},{id:5,name:"Node JS"},{id:6,name:"Python"},{id:7,name:"Java"},{id:8,name:"HTML"},{id:9,name:"CSS"},{id:10,name:"Sass"},{id:11,name:"Wordpress"},{id:12,name:"React JS"},{id:13,name:"Angular JS"},{id:14,name:"MySQL"},{id:15,name:"Ruby"}];function S(e){var t=e.tag,a=e.removeButtonText,n=e.onDelete;return Object(y.jsx)(v.a,{type:"button",size:"sm",variant:"success",className:"mx-1 mb-1",title:a,onClick:n,children:t.name})}function E(e){var t=e.item,a=e.query;return Object(y.jsx)("span",{id:t.id,className:t.name===a?"match":"no-match",children:t.name})}function _(e){var t=e.fields,a=e.setField,r=e.sec_name,s=Object(n.useState)([]),i=Object(O.a)(s,2),l=i[0],o=i[1],d=Object(n.useState)(k),j=Object(O.a)(d,2),b=j[0];j[1];return c.a.useEffect((function(e){console.log("inTAG",t[r]),o(t[r])}),[]),c.a.useEffect((function(e){}),[]),Object(y.jsx)(h.a.Row,{children:Object(y.jsxs)(h.a.Group,{as:x.a,md:"12",controlId:"validationCustom03",children:[Object(y.jsx)(h.a.Label,{children:"Skills"}),Object(y.jsx)(w.a,{placeholderText:"Start Typing",tags:l,tagComponent:S,suggestionComponent:E,classNames:{root:" form-control p-2 tabBar",searchInput:"w-100 p-0 m-0 border-0  "+(0==l.length?"form-control":"")+" react-tags__searchinput"},suggestions:b,onDelete:function(e){var t=l;t.splice(e,1),o(t),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},r,t))}))},onAddition:function(e){o(l?function(t){return[].concat(Object(f.a)(t),[e])}:function(t){return[e]});var t=l?[].concat(Object(f.a)(l),[e]):[e];a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},r,t))}))},minQueryLength:1,allowNew:!0,allowBackspace:!0,inputAttributes:{required:!0,multiline:!0}})]})})}var P=a(26),F=function(e){var t=e.field,a=e.handleChange,n=e.idx,c=e.remover;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{onClick:function(){return c(n)},children:Object(y.jsx)(P.a,{})}),Object(y.jsxs)(h.a.Row,{style:{clear:"both"},children:[Object(y.jsxs)(h.a.Group,{as:x.a,md:"6",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Institute"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"institute ",required:!0,name:"rep_education_institute_"+n,value:t.education[n].institute,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter Institue Name"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"3",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Degree"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Degree ",required:!0,name:"rep_education_degree_"+n,value:t.education[n].degree,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter Degree"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"3",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Year"}),Object(y.jsx)(h.a.Control,{type:"number",min:"1900",max:"2099",step:"1",placeholder:"Year ",required:!0,name:"rep_education_year_"+n,value:t.education[n].year,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter Valid year from 1900 to 2099"})]})]})]})},A=function(e){var t=e.field,a=e.handleChange,n=e.idx,c=e.remover;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{onClick:function(){return c(n)},children:Object(y.jsx)(P.a,{})}),Object(y.jsxs)(h.a.Row,{style:{clear:"both"},children:[Object(y.jsxs)(h.a.Group,{as:x.a,md:"6",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Company"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Company ",required:!0,name:"rep_experience_company_"+n,value:t.experience[n].company,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter Company Name"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"3",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Designation"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Designation ",required:!0,name:"rep_experience_designation_"+n,value:t.experience[n].designation,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter your Designation"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"3",controlId:"validationCustom4",children:[Object(y.jsx)(h.a.Label,{children:"Year"}),Object(y.jsx)(h.a.Control,{type:"number",min:"1900",max:"2099",step:"1",placeholder:"Year ",required:!0,name:"rep_experience_year_"+n,value:t.experience[n].year,onChange:a}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter Valid year from 1900 to 2099"})]})]})]})},R=a(17),I=a(39),D=Object(I.b)({name:"resume",initialState:{value:{1:{name:"Abdullah M",education:[{institute:"Dhaanish Ahmed College of Engineering",degree:"BE",year:"2019"}],experience:[{company:"Congizant Pvt Limited",designation:"Programmer Analyst",year:"2021"}],skills:[{name:"ReactJS"},{name:"Javascript"},{name:"Php"},{name:"Node JS"},{name:"MongoDB"}],email:"m.abdullah715@gmail.com",phone:"9962233222",address:"No 8 Aalady Street, Adirampattinam"}}},reducers:{addResume:function(e,t){console.log(t),console.log(e.value);var a=Object(m.a)(Object(m.a)({},e.value),{},Object(u.a)({},t.payload.id,t.payload.data));console.log(a),e.value=a},deleteResume:function(e,t){var a=t.payload,n=e.value;delete n[a],e.value=n}}}),J=D.actions,L=J.addResume,q=J.deleteResume,G=D.reducer,B=a(77);function M(e){var t=Object(O.a)(e.toggler,2),a=t[0],n=t[1];return Object(y.jsx)(y.Fragment,{children:a.show&&Object(y.jsx)(B.a,{variant:a.type,className:"",onClose:function(){return n((function(e){return Object(m.a)(Object(m.a)({},e),{},{show:!1})}))},dismissible:!0,children:Object(y.jsx)(B.a.Heading,{children:a.msg})})})}var T={name:"",education:[{institute:"",degree:"",year:""}],experience:[{company:"",designation:"",year:""}],skills:[],email:"",phone:"",address:""};var V=function(e){var t=e.id,a=Object(n.useState)(!1),r=Object(O.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(T),d=Object(O.a)(o,2),f=d[0],N=d[1],w=Object(l.f)(),k=Object(R.b)(),S=c.a.useState({type:"",msg:"",show:""}),E=Object(O.a)(S,2),P=E[0],I=E[1],D=Object(R.c)((function(e){return e.resume.value}));console.log(D),c.a.useEffect((function(e){if(void 0!=t){if(console.log("form",D[t]),D[t]){var a=JSON.stringify(D[t]);N(JSON.parse(a))}}else N(T),i(!1),I({type:"",msg:"",show:""})}),[t]);var J=function(e){var t=e.target,a=t.name,n=t.value;if(console.log(a),a.includes("rep")){var c=a.split("_"),r=Object(O.a)(c,4),s=(r[0],r[1]),i=r[2],l=r[3],o=JSON.stringify(f[s]),d=JSON.parse(o);console.log(f[s][l]);var j=Object(m.a)(Object(m.a)({},f[s][l]),{},Object(u.a)({},i,n));console.log(d,j),d[l]=j,N((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},s,d))}))}else N((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a,n))}))};function q(e){var a=e.querySelectorAll(".was-validated :invalid~.invalid-feedback");if(console.log("check",a),a.length>0)console.log("in",a),I({type:"danger",msg:"Please Check all Mandatory Fields",show:"true"});else{console.log("in else",a);var n=void 0==t?parseInt(1e3*Math.random()).toString():t;k(L({id:n,data:f})),I({type:"success",msg:"Resume "+(void 0==t?"Created":"Updated")+" successfully",show:"true"}),w.push("/Edit/"+n)}}c.a.useState((function(e){}));var G=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.currentTarget,console.log("onSubmit",a),!1===a.checkValidity()&&(t.preventDefault(),setTimeout((function(e){return q(a)}),1e3),t.stopPropagation()),i(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M,{toggler:[P,I]}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsxs)(h.a,{noValidate:!0,validated:s,onSubmit:G,children:[Object(y.jsxs)(h.a.Row,{children:[Object(y.jsx)(x.a,{md:12,className:"mb-4",children:Object(y.jsx)("strong",{children:" Personal Detail"})}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"4",controlId:"validationName",children:[Object(y.jsx)(h.a.Label,{children:"First name "}),Object(y.jsx)(h.a.Control,{required:!0,type:"text",placeholder:"First name",name:"name",value:f.name,onChange:J}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Enter Your Name"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"4",controlId:"validationEmail",children:[Object(y.jsx)(h.a.Label,{children:"Email"}),Object(y.jsx)(h.a.Control,{required:!0,type:"email",placeholder:"Email",name:"email",value:f.email,onChange:J}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Enter Valid Email Id"})]}),Object(y.jsxs)(h.a.Group,{as:x.a,md:"4",controlId:"validationPhone",children:[Object(y.jsx)(h.a.Label,{children:"Mobile"}),Object(y.jsx)(h.a.Control,{type:"tel",placeholder:"Phone",pattern:"^\\d{10}$",name:"phone",value:f.phone,onChange:J,required:!0}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please enter a valid Phone number"})]})]}),Object(y.jsx)(h.a.Row,{children:Object(y.jsxs)(h.a.Group,{as:x.a,md:"12",controlId:"validationCustom03",children:[Object(y.jsx)(h.a.Label,{children:"Address"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Address",required:!0,name:"address",value:f.address,onChange:J}),Object(y.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please Enter your Address"})]})}),Object(y.jsxs)(g.a,{defaultActiveKey:"0",className:"mb-4",children:[Object(y.jsxs)(p.a,{className:"mb-4",children:[Object(y.jsx)(g.a.Toggle,{as:p.a.Header,variant:"p",eventKey:"0",children:Object(y.jsx)("strong",{children:"My Education"})}),Object(y.jsx)(g.a.Collapse,{eventKey:"0",children:C(F,f,N,J,"education")})]}),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(g.a.Toggle,{as:p.a.Header,variant:"p",eventKey:"1",children:Object(y.jsx)("strong",{children:" My Experience"})}),Object(y.jsx)(g.a.Collapse,{eventKey:"1",children:C(A,f,N,J,"experience")})]})]}),Object(y.jsx)(_,{setField:N,fields:f,sec_name:"skills"},f.skills),Object(y.jsxs)(v.a,{type:"submit",className:"float-right",children:[void 0==t?"Build":"Update"," Resume"]})]})})})]})},H=function(){var e=Object(l.g)().id;return Object(y.jsx)(V,{id:e})},Y=a(72),K=a(71);function z(e){var t=c.a.useState([]),a=Object(O.a)(t,2),n=a[0],r=a[1],s=c.a.useState([]),i=Object(O.a)(s,2),l=i[0],o=i[1];return c.a.useEffect((function(t){e.data&&(r(Object.keys(e.data[0])),o(e.data)),console.log(e.data)}),[e.data]),Object(y.jsxs)(K.a,{responsive:!0,children:[Object(y.jsx)("thead",{class:"thead-dark",children:Object(y.jsx)("tr",{children:n.map((function(e){return Object(y.jsx)("th",{children:e.charAt(0).toUpperCase()+e.slice(1)})}))})}),Object(y.jsx)("tbody",{children:l.map((function(e,t){return Object(y.jsx)("tr",{children:n.map((function(t){return Object(y.jsx)("td",{children:e[t]})}))})}))})]})}var U=function(){var e=Object(l.g)().id,t=Object(n.useState)({}),a=Object(O.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({}),i=Object(O.a)(s,2),o=(i[0],i[1],Object(R.c)((function(e){return e.resume.value})));return Object(n.useEffect)((function(t){var a=JSON.stringify(o[e]);r(JSON.parse(a))}),[]),Object(y.jsx)("div",{children:Object(y.jsx)(Y.a,{children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)("h4",{children:c.name}),Object(y.jsx)("br",{}),Object(y.jsxs)("p",{children:["Phone : ",c.phone]}),Object(y.jsxs)("p",{children:["Email :",c.email]}),Object(y.jsxs)("p",{children:["Address : ",c.address]}),Object(y.jsx)("hr",{}),Object(y.jsx)("h5",{children:"Education"}),Object(y.jsx)(z,{data:c.education}),Object(y.jsx)("h5",{children:"Experience"}),Object(y.jsx)(z,{data:c.experience}),Object(y.jsx)("h5",{children:"Skills"}),c.skills&&c.skills.map((function(e){return Object(y.jsx)(v.a,{variant:"outline-secondary",className:"mr-2",size:"sm",children:Object.values(e)[0]})}))]})})})},Q=a(73),W=function(){var e=c.a.useState({type:"",msg:"",show:""}),t=Object(O.a)(e,2),a=t[0],n=t[1],r=Object(R.b)(),s=Object(R.c)((function(e){return e.resume.value}));return console.log("home",s),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M,{toggler:[a,n]}),Object(y.jsx)(Q.a,{children:Object(y.jsx)("h1",{className:"header text-center",children:"Welcome To Resume Builder"})}),Object(y.jsxs)(Y.a,{children:[Object.entries(s).length>0?Object.entries(s).map((function(e){var t=Object(O.a)(e,2),a=t[0],c=t[1];return Object(y.jsx)(p.a,{className:"mx-3 my-2 w-100 p-2",children:Object(y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(y.jsx)("h5",{children:c.name}),Object(y.jsxs)("div",{children:[Object(y.jsx)(v.a,{variant:"danger",className:"mr-2",onClick:function(){return e=a,console.log(e),r(q(e)),void n({type:"danger",msg:"Resume Deleted",show:!0});var e},children:"Delete "}),Object(y.jsx)(v.a,{as:i.b,to:"/View/"+a,variant:"secondary",className:"mr-2",children:"View "}),Object(y.jsx)(v.a,{as:i.b,to:"/Edit/"+a,className:"mr-2",children:"Edit "})]})]})})})):Object(y.jsx)(p.a,{className:"mx-3 my-2 w-100 p-2",children:"You Have Not created any Resume"}),Object(y.jsx)(v.a,{className:"mx-3 my-2 w-100 p-2",as:i.b,to:"/New",children:"Create New "})]},Object.entries(s).length)]})},$=a(76),X=a(75);function Z(e){e.match;return Object(y.jsxs)($.a,{className:"Navbar",bg:"",variant:"",style:{justifyContent:"space-between"},children:[Object(y.jsx)($.a.Brand,{as:i.b,to:"/",href:"#home",className:"text-dark font-weight-bold",children:"Resume Builder"}),Object(y.jsxs)(X.a,{className:" float-right",children:[Object(y.jsx)(v.a,{as:i.b,variant:"outline-primary",exact:!0,activeClassName:"btn-primary text-light",className:"mr-2",to:"/",children:"  Home"}),Object(y.jsx)(v.a,{as:i.b,exact:!0,variant:"outline-primary",activeClassName:"btn-primary text-light",className:"",to:"/New",children:" Create New"})]})]})}var ee=function(){return Object(y.jsxs)(i.a,{children:[Object(y.jsx)(Z,{}),Object(y.jsx)(o.a,{className:"mt-2 mb-4 p-2 content-body shadow p-3",children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{path:"/New",children:Object(y.jsx)(H,{})}),Object(y.jsx)(l.a,{path:"/Edit/:id",children:Object(y.jsx)(H,{})}),Object(y.jsx)(l.a,{path:"/View/:id",children:Object(y.jsx)(U,{})}),Object(y.jsx)(l.a,{path:"/",children:Object(y.jsx)(W,{})})]})}),Object(y.jsx)("p",{className:"text-center",children:"Developed by Abdullah M"}),Object(y.jsx)("p",{className:"text-center",children:"+91 9962233222"}),Object(y.jsx)("p",{className:"text-center mb-3",children:"m.abdullah715@gmail.com"})]})},te=Object(I.a)({reducer:{resume:G}});function ae(){return Object(y.jsxs)(R.a,{store:te,children:[" ",Object(y.jsx)(ee,{})," "]})}a(67);s.a.render(Object(y.jsx)(ae,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bc40a65a.chunk.js.map