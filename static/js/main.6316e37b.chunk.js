(this["webpackJsonprestaurant-tracker-client"]=this["webpackJsonprestaurant-tracker-client"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(30),c=n.n(s),o=(n(77),n(2)),i=n(54),u=n(9),l=n(10),d=n(13),h=n(12),j=n(11),b=n(110),m=n(3),g=n(1),O=["user","component","render"],p=function(e){var t=e.user,n=e.component,a=e.render,r=Object(m.a)(e,O);return t&&a?Object(g.jsx)(j.b,Object(o.a)(Object(o.a)({},r),{},{render:a})):Object(g.jsx)(j.b,Object(o.a)(Object(o.a)({},r),{},{render:function(e){return t?Object(g.jsx)(n,Object(o.a)({},e)):Object(g.jsx)(j.a,{to:"/"})}}))},x=n(60),f=(n(86),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(g.jsx)(x.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(x.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),v=n(72),y=n(44),w=n(16),C=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(w.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(w.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(g.jsx)(w.c,{to:"/add-rests",className:"nav-link",children:"Add Restaurant"}),Object(g.jsx)(w.c,{to:"/your-rests",className:"nav-link",children:"Your Restaurants"})]}),S=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(w.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(w.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(w.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(y.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(y.a.Brand,{children:Object(g.jsx)(w.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Restaurant Tracker"})}),Object(g.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),k,t?C:S]})})]})},P=n(6),W="https://aqueous-atoll-85096.herokuapp.com",N="http://localhost:4741",F="localhost"===window.location.hostname?N:W,I=n(20),U=n.n(I),D=function(e){return U()({url:F+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},R=n(8),T=n(37),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,c=n.setUser;(t=a.state,U()({method:"POST",url:F+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return D(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(R.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(R.a.Group,{controlId:"email",children:[Object(g.jsx)(R.a.Label,{children:"Email address"}),Object(g.jsx)(R.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(R.a.Group,{controlId:"password",children:[Object(g.jsx)(R.a.Label,{children:"Password"}),Object(g.jsx)(R.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(R.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(R.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(R.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),L=Object(j.f)(E),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;D(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(R.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(R.a.Group,{controlId:"email",children:[Object(g.jsx)(R.a.Label,{children:"Email address"}),Object(g.jsx)(R.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(R.a.Group,{controlId:"password",children:[Object(g.jsx)(R.a.Label,{children:"Password"}),Object(g.jsx)(R.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),G=Object(j.f)(B),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return U()({url:F+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),Y=Object(j.f)(q),_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return U()({url:F+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(R.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(R.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(R.a.Label,{children:"Old password"}),Object(g.jsx)(R.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(R.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(R.a.Label,{children:"New Password"}),Object(g.jsx)(R.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),z=Object(j.f)(_);function M(e){var t=e.restaurant,n=e.handleSubmit,a=e.handleChange;return Object(g.jsxs)("form",{onSubmit:n,children:[Object(g.jsxs)("label",{children:["Restaurant name:",Object(g.jsx)("input",{type:"text",name:"name",value:t.name||"",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Rating:",Object(g.jsxs)("select",{type:"number",name:"rating",value:t.rating,onChange:a,children:[Object(g.jsx)("option",{value:"null"}),Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Thoughts:",Object(g.jsx)("input",{type:"text",name:"thoughts",value:t.thoughts||"",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Cocktails:",Object(g.jsx)("input",{type:"string",name:"cocktails",value:t.cocktails||"",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Mom worthy?:",Object(g.jsx)("label",{children:"Yes:"}),Object(g.jsx)("input",{type:"radio",name:"momWorthy",value:"yes",onChange:a}),Object(g.jsx)("label",{children:"No:"}),Object(g.jsx)("input",{type:"radio",name:"momWorthy",value:"no",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Fam worthy?:",Object(g.jsx)("label",{children:"Yes:"}),Object(g.jsx)("input",{type:"radio",name:"famWorthy",value:"yes",onChange:a}),Object(g.jsx)("label",{children:"No:"}),Object(g.jsx)("input",{type:"radio",name:"famWorthy",value:"no",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Stranger worthy?:",Object(g.jsx)("label",{children:"Yes:"}),Object(g.jsx)("input",{type:"radio",name:"friendWorthy",value:"yes",onChange:a}),Object(g.jsx)("label",{children:"No:"}),Object(g.jsx)("input",{type:"radio",name:"friendWorthy",value:"no",onChange:a})]}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"submit"})]})}var H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history;(function(e,t){return U()({method:"POST",url:F+"/add-rests/",headers:{Authorization:"Bearer ".concat(t.token)},data:{restaurant:{name:e.name,thoughts:e.thoughts,rating:e.rating,cocktails:e.cocktails,momWorthy:e.momWorthy,famWorthy:e.famWorthy,friendWorthy:e.friendWorthy}}})})(a.state,n).then((function(e){return s.push("/your-rests/"+e.data.restaurant._id)})).then((function(){return r({heading:"Restaurant Added!",message:"Nice work, go check out your restaurant.",variant:"success"})})).catch((function(e){r({heading:"Restaurant addition failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={name:"",thoughts:"",rating:"",cocktails:"",momWorthy:"",famWorthy:"",friendWorthy:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Add Restaurant info here!"}),Object(g.jsx)(M,{restaurant:this.state,handleSubmit:this.handleSubmit,handleChange:this.handleChange})]})}}]),n}(a.Component),J=Object(j.f)(H);function K(e){var t=e.user,n=e.msgAlert,a=e.id;return Object(g.jsx)("div",{children:Object(g.jsx)("button",{value:"submit",onClick:function(e){U()({url:F+"/your-rests/".concat(a),method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){return e})).then((function(){return n({heading:"Deleted Successfully",message:"you have successfully removed a restaurant",variant:"success"})})).catch((function(e){n({heading:"Delete Failed with error: "+e.message,message:"Failed to delete a restaurant. Check your routes",variant:"danger"})}))},children:"Delete"})})}var Q=n(15);function V(e){var t=e.user,n=e.msgAlert,r=e.id,s=Object(a.useState)(""),c=Object(Q.a)(s,2),o=c[0],i=c[1],u=Object(a.useState)(""),l=Object(Q.a)(u,2),d=l[0],h=l[1];return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{id:"restaurant_id",name:"restaurant.name",onChange:function(e){i(e.target.value)},type:"text",placeholder:"Restaurant Name",value:o.name}),Object(g.jsx)("input",{id:"restaurant_id",name:"restaurant.thoughts",onChange:function(e){h(e.target.value)},type:"text",placeholder:"Change of heart?",value:d.thoughts}),Object(g.jsx)("button",{value:"submit",onClick:function(e){e.preventDefault();var a={name:o,thoughts:d};U()({url:F+"/your-rests/".concat(r),method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{updateData:a}}).then((function(e){return e})).then((function(){return n({heading:"Updated Successfully",message:"You have updated your restaurant info! Change of mind?",variant:"success"})})).catch((function(e){n({heading:"Update Failed with error: "+e.message,message:"Nah. Your thoughts will stay here as is",variant:"danger"})}))},children:"Update"})]})})}var X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={restaurant:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return U()({method:"GET",url:F+"/add-rests/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({restaurant:t.data.restaurant})})).then((function(){return a({heading:"Index success",message:"Here're the all the restaurants you've added",variant:"success"})})).catch((function(e){return a({heading:"Index failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.restaurant,n=this.props,a=n.user,r=n.msgAlert;return null===t?"Loading...":(e=0===t.length?"No restaurants added, go eat somewhere":t.map((function(e){return Object(g.jsxs)("div",{children:["Restaurant: ",e.name,Object(g.jsx)("br",{}),"Summary: ",e.thoughts,Object(g.jsx)("br",{}),"Rating, ",e.rating," out of 5",Object(g.jsx)("br",{}),"Any good drinks? ",e.cocktails,Object(g.jsx)("br",{}),"Mom Worthy? ",e.momWorthy,Object(g.jsx)("br",{}),"Fam Worthy? ",e.famWorthy,Object(g.jsx)("br",{}),"Friend Worthy? ",e.friendWorthy,Object(g.jsx)("br",{}),Object(g.jsx)(K,{msgAlert:r,user:a,id:e._id}),Object(g.jsx)(V,{msgAlert:r,user:a,id:e._id})]},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Your recent foodie visits"}),e]}))}}]),n}(a.Component),Z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={restaurant:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return U()({method:"GET",url:F+"/all-rests/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({restaurant:t.data.restaurant})})).then((function(){return a({heading:"Index success",message:"Here're the all the restaurants you've added",variant:"success"})})).catch((function(e){return a({heading:"Index failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.restaurant;return null===t?"Loading...":(e=0===t.length?"No restaurants added, go eat somewhere":t.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsxs)("h3",{children:["Restaurant: ",e.name]}),"Summary: ",e.thoughts,Object(g.jsx)("br",{}),"Rating, ",e.rating," out of 5",Object(g.jsx)("br",{}),"Any good drinks? ",e.cocktails]}),Object(g.jsxs)("li",{children:["Mom Worthy? ",e.momWorthy,Object(g.jsx)("br",{}),"Fam Worthy? ",e.famWorthy,Object(g.jsx)("br",{}),"Friend Worthy? ",e.friendWorthy]})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Recently Added Restaurants "}),e]}))}}]),n}(a.Component),$=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(b.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(A,{user:r}),n.map((function(t){return Object(g.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(j.b,{path:"/sign-up",render:function(){return Object(g.jsx)(L,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(j.b,{path:"/sign-in",render:function(){return Object(g.jsx)(G,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(p,{user:r,path:"/sign-out",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(g.jsx)(p,{user:r,path:"/change-password",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(p,{user:r,path:"/add-rests",render:function(){return Object(g.jsx)(J,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(p,{user:r,path:"/your-rests",render:function(){return Object(g.jsx)(X,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(p,{user:r,exact:!0,path:"/",render:function(){return Object(g.jsx)(Z,Object(o.a)({msgAlert:e.msgAlert,user:r},M))}})]})]})}}]),n}(a.Component),ee=Object(g.jsx)(w.a,{basename:"/restaurant-tracker-client",children:Object(g.jsx)($,{})});c.a.render(ee,document.getElementById("root"))},77:function(e,t,n){},86:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.6316e37b.chunk.js.map