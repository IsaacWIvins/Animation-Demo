(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),l=a.n(i),s=(a(16),a(3)),c=a(4),o=a(6),m=a(5),d=a(7),u=(a(18),a(2)),p=(a(20),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={index:0},a._handleClick=function(e){var t=new u.b({paused:!0}),n=a.state.index,r="Next"===e?n+1:n-1,i=a.slide.clientWidth,l=i*n*-1,s="Next"===e?l-i:l+i;console.log("current_xposition: ",l),console.log("future_xposition: ",s);var c={x:l},o={x:s},m={x:"Next"===e?"50":"-50",y:"15"},d={y:"15",x:"-10"},p={x:"0",y:"0"};t.fromTo(a.sliderWrapper,.6,c,o,0),t.fromTo(a.slide2,.4,m,p,.2).fromTo(a.slide2,.4,m,p,.2).fromTo(a.slide3,.4,m,p,.2).fromTo(a.slide4,.4,m,p,.2),t.fromTo(a.date1,.4,d,p,.2).fromTo(a.date2,.4,d,p,.2).fromTo(a.date3,.4,d,p,.2).fromTo(a.date4,.4,d,p,.2),t.eventCallback("onComplete",function(){console.log("setting index"),a.setState({index:r})}),t.play()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{key:"carousel",className:"slider",ref:function(t){return e.slider=t}},r.a.createElement("div",{className:"slider-wrapper flex",ref:function(t){return e.sliderWrapper=t}},r.a.createElement("div",{className:"slide flex",ref:function(t){return e.slide=t}},r.a.createElement("div",{className:"slide-image slider-link prev",ref:function(t){return e.sliderLink=t}},r.a.createElement("img",{src:"https://goranvrban.com/codepen/img2.jpg",ref:function(t){return e.slideImage=t}})),r.a.createElement("div",{className:"slide-content"},r.a.createElement("div",{className:"slide-date",ref:function(t){return e.date1=t}},"30.08.2017."),r.a.createElement("div",{className:"slide-title"},"LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT"),r.a.createElement("div",{className:"slide-text"},"Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. "),r.a.createElement("div",{className:"slide-more"},"READ MORE"))),r.a.createElement("div",{className:"slide flex",ref:function(t){return e.slide2=t}},r.a.createElement("div",{className:"slide-image slider-link next"},r.a.createElement("img",{src:"https://goranvrban.com/codepen/img3.jpg"})),r.a.createElement("div",{className:"slide-content"},r.a.createElement("div",{className:"slide-date",ref:function(t){return e.date2=t}},"30.08.2017."),r.a.createElement("div",{className:"slide-title"},"LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT"),r.a.createElement("div",{className:"slide-text"},"Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. "),r.a.createElement("div",{className:"slide-more"},"READ MORE"))),r.a.createElement("div",{className:"slide flex",ref:function(t){return e.slide3=t}},r.a.createElement("div",{className:"slide-image slider-link next"},r.a.createElement("img",{src:"https://goranvrban.com/codepen/img5.jpg"})),r.a.createElement("div",{className:"slide-content"},r.a.createElement("div",{className:"slide-date",ref:function(t){return e.date3=t}},"30.08.2017."),r.a.createElement("div",{className:"slide-title"},"LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT"),r.a.createElement("div",{className:"slide-text"},"Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. "),r.a.createElement("div",{className:"slide-more"},"READ MORE"))),r.a.createElement("div",{className:"slide flex",ref:function(t){return e.slide4=t}},r.a.createElement("div",{className:"slide-image slider-link next"},r.a.createElement("img",{src:"https://goranvrban.com/codepen/img6.jpg"})),r.a.createElement("div",{className:"slide-content"},r.a.createElement("div",{className:"slide-date",ref:function(t){return e.date4=t}},"30.08.2017."),r.a.createElement("div",{className:"slide-title"},"LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT"),r.a.createElement("div",{className:"slide-text"},"Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. "),r.a.createElement("div",{className:"slide-more"},"READ MORE")))),r.a.createElement("div",{className:"arrows"},this.state.index<=0?null:r.a.createElement("a",{href:"#",title:"Previous",className:"arrow slider-link prev",onClick:function(){return e._handleClick("Previous")}}),this.state.index>=3?null:r.a.createElement("a",{href:"#",title:"Next",className:"arrow slider-link next",onClick:function(){return e._handleClick("Next")}})))}}]),t}(n.Component)),E=(a(22),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={component:[r.a.createElement(p,null)]},a.getStarted=function(){a.timeLine.to(a.background,3,{backgroundImage:"linear-gradient(to right top, #051937, #004870, #007d9f, #00b6bc, #24eec4)"},0).to(a.getStartedContainer,.75,{opacity:0,ease:u.a.easeInOut,display:"none"},0),a.timeLine.to(a.contentRef,1,{opacity:1,display:"flex",ease:u.a.easeInOut},.75),a.timeLine.play()},a.timeLine=new u.b({paused:!0}),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App",ref:function(t){return e.background=t}},r.a.createElement("div",{className:"Get-Started-Container",ref:function(t){return e.getStartedContainer=t}},r.a.createElement("div",{onClick:this.getStarted},r.a.createElement("h1",{style:{color:"white"}},"Get Started"))),r.a.createElement("div",{className:"Content-Container",ref:function(t){return e.contentRef=t}},this.state.component[0]))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.26f60279.chunk.js.map