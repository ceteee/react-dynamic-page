(this["webpackJsonpreact-dynamic-page"]=this["webpackJsonpreact-dynamic-page"]||[]).push([[0],{120:function(e,t,a){e.exports=a(404)},124:function(e,t,a){},125:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},126:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),l=a.n(c),o=(a(124),a(119)),i=a(29),u=a(30),m=a(32),h=a(31),s=(a(125),a(126),function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Action")))}),b=function(e){var t=e.tabledata.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(s,null),r.a.createElement(b,{tabledata:t,removeCharacter:a}))}}]),a}(n.Component),v=(a(127),a(118)),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(v.a)({},n,r))},e.onFormSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("h1",null,"Add new data"),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"job"},"Job"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit"))}}]),a}(n.Component),p=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Dynamic React Page"),r.a.createElement("p",null,"tutorial library React.js"))},E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[{name:"Charlie",job:"Janitor"}]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"Container"},r.a.createElement(p,null),r.a.createElement(d,{data:e,removeCharacter:this.removeCharacter}),r.a.createElement(f,{handleSubmit:this.handleSubmit}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.322293c2.chunk.js.map