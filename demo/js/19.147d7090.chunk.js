(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{218:function(n,s,a){"use strict";function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}a.d(s,"a",function(){return t})},219:function(n,s,a){"use strict";function t(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n,s,a){return s&&t(n.prototype,s),a&&t(n,a),n}a.d(s,"a",function(){return p})},220:function(n,s,a){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}a.d(s,"a",function(){return t})},221:function(n,s,a){"use strict";var t=a(1);a(222);s.a=function(n){return t.createElement("div",{className:"mobile-preview",key:n.link},t.createElement("header",null,n.link),t.createElement("main",null,t.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},222:function(n,s,a){},224:function(n,s,a){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function e(n,s){return!s||"object"!==p(s)&&"function"!==typeof s?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):s}a.d(s,"a",function(){return e})},225:function(n,s,a){"use strict";function t(n,s){return(t=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n})(n,s)}function p(n,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),s&&t(n,s)}a.d(s,"a",function(){return p})},243:function(n,s,a){"use strict";a.r(s),a.d(s,"default",function(){return k});var t=a(218),p=a(219),e=a(224),o=a(220),c=a(225),u=a(1),l=a(71),i=a.n(l),r=a(221),k=function(n){function s(){var n,a;Object(t.a)(this,s);for(var p=arguments.length,c=new Array(p),u=0;u<p;u++)c[u]=arguments[u];return(a=Object(e.a)(this,(n=Object(o.a)(s)).call.apply(n,[this].concat(c)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/time-picker"},a.onCodeClick=function(n){a.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},a}return Object(c.a)(s,n),Object(p.a)(s,[{key:"render",value:function(){return u.createElement("div",null,u.createElement("div",{className:"markdown-content"},u.createElement("h1",null,"TimePicker"),u.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),u.createElement("div",{className:i()("code-box",{active:this.state.previewUrl.endsWith("/time-picker")}),onClick:this.onCodeClick.bind(null,"/time-picker")},u.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),u.createElement("div",{className:"bd"},u.createElement("pre",{className:"language-tsx"},u.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> TimePicker<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        times<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'0020\'</span><span class="token punctuation">,</span> <span class="token string">\'0020\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        times<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'0500\'</span><span class="token punctuation">,</span> <span class="token string">\'1100\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        day<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        times<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">\'0000\'</span><span class="token punctuation">,</span> <span class="token string">\'0015\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'0145\'</span><span class="token punctuation">,</span> <span class="token string">\'1200\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n            <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n            <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'MM\u6708dd\u65e5 \u5468wk\'</span><span class="token punctuation">,</span> <span class="token string">\'h\u70b9\'</span><span class="token punctuation">,</span> <span class="token string">\'m\u5206\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">interval</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">66</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultDay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showTime<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">private</span> <span class="token function-variable function">showTime</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Toast</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Demo\n'}}))))),u.createElement(r.a,{link:this.state.previewUrl}))}}]),s}(u.PureComponent)}}]);
//# sourceMappingURL=19.147d7090.chunk.js.map