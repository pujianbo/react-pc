webpackJsonp([5],{1339:function(e,t,n){"use strict";"user strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(4),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(1343);var u=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={load:0,empty:0,end:0},n}return o(t,e),r(t,[{key:"componentWillReceiveProps",value:function(){var e=this;setTimeout(function(){var t=e.props,n=t.load,a=t.empty,l=t.end;e.setState({load:n,empty:a,end:l})},0)}},{key:"render",value:function(){var e=this.props,t=e.load,n=e.empty,a=e.end,l=e.emptyMsg;this.state.show;return c.default.createElement("div",{className:"loading"},1==t?c.default.createElement("span",{className:"ing"},"加载中..."):"",1==n?c.default.createElement("span",{className:"no"},l||"暂无信息"):"",1==a?c.default.createElement("span",{className:"end"},"已加载全部信息"):"")}}]),t}(i.Component);t.default=u},1340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.formatParams=function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.push("time="+(new Date).getTime()),t.join("&")},l=(t.urlKey=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=new RegExp(e+"=([^&]*)(&|$)","i");return(n.test(t)?n.exec(t)[1]:"").replace(/\s/gi,"")},t.ajax=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0==e.async&&(e.async=!0);var t=new XMLHttpRequest,n=e.url.indexOf("?")>-1?"&":"?";a(e.data);t.onreadystatechange=function(){if(4==t.readyState){var n=t.status;200==n?e.success(t.responseText):(e.fail&&e.fail(n),o("连接网络失败"))}},"post"==e.type?(t.open("POST",e.url,e.async),t.send(e.data)):(t.open("GET",e.url+n+a(e.data),e.async),t.send(null))},t.msgTout=null),o=t.Tips=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"未获取到信息",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=document.querySelector(".tips"),o=a?a.querySelector("span"):null;void 0==a&&(a=document.createElement("div"),o=document.createElement("span"),a.appendChild(o),a.className="tips",document.body.appendChild(a)),o.innerHTML=e,a.style.bottom="10rem",a.style.display="block",setTimeout(function(){a.style.bottom="11rem",a.style.opacity="1"},10),clearTimeout(l),0!=n&&("关闭"==e&&(a.style.display="none"),t.msgTout=l=setTimeout(function(){a.style.display="none",a.style.bottom="10rem",a.style.opacity="0"},1e3*n))}},1342:function(e,t,n){t=e.exports=n(293)(void 0),t.push([e.i,".loading{text-align:center}.loading span{padding:60px 20px;display:inline-block}.loading .ing{color:#807c7c;padding-left:36px;background:url("+n(1346)+") no-repeat 0;background-size:1rem}.loading .no{color:#ccc;padding:0;display:block;position:fixed;left:30px;right:30px;top:50%;font-size:24px}",""])},1343:function(e,t,n){var a=n(1342);"string"==typeof a&&(a=[[e.i,a,""]]);n(294)(a,{});a.locals&&(e.exports=a.locals)},1345:function(e,t,n){e.exports=n.p+"img/good94528.png"},1346:function(e,t){e.exports="data:image/gif;base64,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"},1791:function(e,t,n){"use strict";"user strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(4),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(1911);var u=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),r(t,[{key:"render",value:function(){return c.default.createElement("footer",{className:"footer"},this.props.children)}}]),t}(i.Component);t.default=u},1849:function(e,t,n){t=e.exports=n(293)(void 0),t.push([e.i,".text-els{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.footer{position:fixed;bottom:0;left:0;right:0;z-index:10}",""])},1911:function(e,t,n){var a=n(1849);"string"==typeof a&&(a=[[e.i,a,""]]);n(294)(a,{});a.locals&&(e.exports=a.locals)},1917:function(e,t,n){e.exports=n.p+"img/user56406.png"},300:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(4),u=a(c),s=n(1340),f=n(852),d=a(f),m=n(1791),p=a(m),A=n(1339),h=(a(A),n(1345)),E=a(h),g=n(1917),y=a(g),b=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.page=1,n.dataLoad=1,n.state={dataLoad:1,dataEnd:0,dataNull:0,comment:!1},n}return r(t,e),i(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){var t=e.state,n=t.dataEnd,a=t.dataNull;if(1!=e.dataLoad&&1!=n&&1!=a){var l=0;document.documentElement&&document.documentElement.scrollTop?l=document.documentElement.scrollTop:document.body&&(l=document.body.scrollTop),document.body.clientHeight-window.innerHeight-l<=100&&(e.page++,e.getData())}}}},{key:"getData",value:function(){}},{key:"showComment",value:function(e){console.log(e),this.setState({comment:!this.state.comment})}},{key:"nice",value:function(e,t){-1==t.currentTarget.className.indexOf("niceed")&&(t.currentTarget.className="right niceed",(0,s.Tips)("点赞成功",1))}},{key:"comment",value:function(e){e.preventDefault(),this.setState({comment:!1}),(0,s.Tips)("评论成功")}},{key:"render",value:function(){var e=this.state.comment;return u.default.createElement("div",{className:"selectresult"},u.default.createElement(d.default,null,u.default.createElement("div",{className:"title"},u.default.createElement("img",{src:E.default}),u.default.createElement("h5",null,"中药大全"),u.default.createElement("p",null,"110话题",u.default.createElement("span",null,"437成员")))),u.default.createElement("div",{className:"main"},u.default.createElement("ul",{className:"items"},u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:y.default}),"中医药专家")),u.default.createElement("div",{className:"txt"},"请问贵杂志有没有临床医学专集这一刊？"),u.default.createElement("div",{className:"info"},u.default.createElement("ul",{className:"chat"},u.default.createElement("li",null,u.default.createElement("span",null,"思域："),"好像有哦，我曾经在哪里见过"),u.default.createElement("li",null,u.default.createElement("span",null,"李然"),"回复了",u.default.createElement("span",null,"思域："),"是的，我也曾经看见过，可以去找一找"),u.default.createElement("li",null,u.default.createElement("span",null,"陆战："),"好像有哦，我曾经在哪里见过")),u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))),u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:y.default}),"中医药专家")),u.default.createElement("div",{className:"txt"},"请问贵杂志有没有临床医学专集这一刊？"),u.default.createElement("div",{className:"info"},u.default.createElement("ul",{className:"chat"},u.default.createElement("li",null,u.default.createElement("span",null,"思域："),"好像有哦，我曾经在哪里见过"),u.default.createElement("li",null,u.default.createElement("span",null,"李然"),"回复了",u.default.createElement("span",null,"思域："),"是的，我也曾经看见过，可以去找一找"),u.default.createElement("li",null,u.default.createElement("span",null,"陆战："),"好像有哦，我曾经在哪里见过")),u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))),u.default.createElement("li",null,u.default.createElement("div",{className:"user clearfix"},u.default.createElement("a",{className:"lineblock"},u.default.createElement("img",{src:y.default}),"中医药专家"),u.default.createElement("tag",{className:"right"},"未回复")),u.default.createElement("div",{className:"txt"},"又是别人家的大学食堂！哈工大食堂惊艳亮相】新学期开始了，走进哈尔滨工业大学友来餐厅，会不时地听到师生的惊呼声，经过改造的餐厅里，形式各异的餐桌、餐椅，错落有致地排列在各个区域。各种复古吊灯、花式吊灯、高低有序地悬挂在棚顶，美轮美奂。"),u.default.createElement("div",{className:"info"},u.default.createElement("div",{className:"clearfix other"},u.default.createElement("time",null,"2017-12-1 11:00"),u.default.createElement("span",{className:"right review",onClick:this.showComment.bind(this,34)},"4545"),u.default.createElement("span",{className:"right",onClick:this.nice.bind(this,2)},"234")))))),e?[u.default.createElement("div",{className:"task",onClick:this.showComment.bind(this,0)}),u.default.createElement(p.default,null,u.default.createElement("form",{className:"sltcomment clearfix",onSubmit:this.comment.bind(this)},u.default.createElement("input",{className:"left",type:"text",placeholder:"评论信息"}),u.default.createElement("input",{className:"right",type:"submit",value:"提交"})))]:null)}}]),t}(c.Component);t.default=b},479:function(e,t,n){e.exports=n.p+"img/logo8e3fe.png"},549:function(e,t,n){t=e.exports=n(293)(void 0),t.push([e.i,".text-els{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header{position:fixed;top:0;left:0;right:0;z-index:10;height:128px;background-color:#fff;border-bottom:1px solid #ddd}",""])},550:function(e,t,n){var a=n(549);"string"==typeof a&&(a=[[e.i,a,""]]);n(294)(a,{});a.locals&&(e.exports=a.locals)},852:function(e,t,n){"use strict";"user strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(4),u=a(c),s=(n(127),n(479)),f=a(s);n(550);var d=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("header",{className:"header"},u.default.createElement("div",{className:"logobox"},u.default.createElement("img",{src:f.default}),u.default.createElement("span",null,"康医生后端管理系统")),u.default.createElement("div",{className:"userinfo"},"用户信息"))}}]),t}(c.Component);t.default=d}});