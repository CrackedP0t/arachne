(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1310:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return j},default:function(){return N}});var r=n(3717),i=n(8760),o=n(3369),s=n(8914),a=n(462),c=n(4165),u=n(3687),l=n(4387),m=n(4285),d=n.n(m);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var i=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}function p(t){var e=t.shift();return e&&t.push(e),t}function _(t){var e=t.pop();return e&&t.unshift(e),t}var h=function(t){var e=t.cont,n=t.pickup_id,i=t.index;return(0,r.jsx)("div",{className:d().slot,children:(0,r.jsx)("div",{className:d().threads,children:["Heart","Soul Heart","Black Heart","Eternal Heart","Gold Heart","Bone Heart","Rotten Heart","Penny","Nickel","Dime","Lucky Penny","Key","Golden Key","Charged Key","Bomb","Golden Bomb","Giga Bomb","Micro Battery","Lil Battery","Mega Battery","Card","Pill","Rune","Dice Shard","Cracked Key"].map((function(t,o){o+=1;var s=Array.from(e.state.components);s[i]=o;var a=e.props.bag.calculate(s),c=e.props.items[a].name;return(0,r.jsxs)("div",{className:"".concat(d().thread," ").concat(o==n?d().selected:""),onClick:function(t){return e.setState((function(t,e){var n=Array.from(t.components);return n[i]=o,{components:n}}))},children:[(0,r.jsx)("div",{className:d().pickup,title:t,style:{backgroundPositionX:o%8*-32,backgroundPositionY:-32*Math.floor(o/8)}}),"\u21d2",(0,r.jsx)("div",{className:"sprite i".concat(a),title:c})]},o)}))})})},v=function(t){var e=t.item_id,n=t.name;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:n}),(0,r.jsx)("div",{className:"sprite big i".concat(e)})]})},y=function(t){(0,a.Z)(n,t);var e=f(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).state={components:t.components},r}return(0,s.Z)(n,[{key:"render",value:function(){var t=this,e=this.props.bag.calculate(this.state.components);return(0,r.jsxs)("div",{className:d().item_entry,children:[(0,r.jsxs)("div",{className:d().item,children:[(0,r.jsx)(v,{item_id:e,name:this.props.items[e].name}),(0,r.jsx)("button",{onClick:function(e){t.setState((function(t,e){return{components:p(Array.from(t.components))}}))},children:"\u21b6"}),(0,r.jsx)("button",{onClick:function(e){t.setState((function(t,e){return{components:_(Array.from(t.components))}}))},children:"\u21b7"})]}),(0,r.jsx)("div",{className:d().slots,children:this.state.components.map((function(e,n){return(0,r.jsx)(h,{cont:t,pickup_id:e,index:n},n)}))})]})}}]),n}(l.Component),x=n(137),k=n.n(x),j=!0;function N(t){var e=t.itempools,n=t.items_metadata,o=t.items,s=new i.BagOfCrafting(i.XmlParser.loadPools(e),i.XmlParser.loadMeta(n));return(0,r.jsx)("div",{className:k().main,children:(0,r.jsx)(y,{bag:s,components:[1,1,1,1,1,1,1,1],items:JSON.parse(o)})})}},6873:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1310)}])},4285:function(t){t.exports={item_entry:"ItemEntry_item_entry__3v_2A",item:"ItemEntry_item__2S_L4",slots:"ItemEntry_slots__QPohR",threads:"ItemEntry_threads__1-gT8",thread:"ItemEntry_thread__BVF-V",selected:"ItemEntry_selected__2qpru",pickup:"ItemEntry_pickup__1tMqt"}},137:function(t){t.exports={main:"index_main___Ajca"}}},function(t){t.O(0,[774,778,983],(function(){return e=6873,t(t.s=e);var e}));var e=t.O();_N_E=e}]);