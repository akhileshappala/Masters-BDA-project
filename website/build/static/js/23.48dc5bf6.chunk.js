(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{284:function(t,e,i){"use strict";i.r(e);var a=i(73),s=i(9),c=i(21),d=i(77),l=i.n(d),n=i(76),o=i.n(n),r=i(2),b=i(83),u=i(19),j=function(t){var e=t.statistic,i=t.data,a=t.getTableStatistic,d=t.noDistrictData,n=a(i,e,"total"),o=a(i,e,"delta"),r=Object(b.useSpring)({total:n,delta:o,config:s.m}),j=s.q[e];return Object(u.jsxs)("div",{className:"cell statistic",children:[(null===j||void 0===j?void 0:j.showDelta)&&Object(u.jsx)(b.animated.div,{className:l()("delta","is-".concat(e)),title:o,children:r.delta.to((function(t){return d&&j.hasPrimary?"":t>0?"\u2191"+Object(c.e)(t,j.format):t<0?"\u2193"+Object(c.e)(Math.abs(t),j.format):""}))}),Object(u.jsx)(b.animated.div,{className:"total",title:n,children:r.total.to((function(t){return d&&j.hasPrimary?"-":Object(c.e)(t,j.format,e)}))})]})},m=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.noDistrictData,null===(l=e.data)||void 0===l?void 0:l.noDistrictData)&&!!o()(t.getTableStatistic,e.getTableStatistic)))},g=Object(r.memo)(j,m),v=i(91),h=i(79),O=i(90),N=i(285);function C(t){var e,i=t.stateCode,a=t.districtName,s=t.data,c=t.tableStatistics,d=t.regionHighlighted,n=t.setRegionHighlighted,o=(t.expandTable,t.getTableStatistic),b=t.noDistrictData,j=Object(N.a)().t,m=Object(r.useCallback)((function(){d.districtName!==a&&n(Object(O.a)(d,(function(t){t.stateCode=i,t.districtName=a})))}),[d,a,n,i]);return Object(u.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===a}),onMouseEnter:m,children:[Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("div",{className:"state-name",children:j(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(u.jsx)(v.a,{message:s.meta.notes,children:Object(u.jsx)(h.e,{size:16})})]}),c.map((function(t){return Object(u.jsx)(g,{statistic:t,data:s,getTableStatistic:o,noDistrictData:b},t)}))]})}var x=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics)))))))},f=Object(r.memo)(C,x),p=i(154),D=i(5),S=i(253);function T(t){var e,i=this,c=t.data,d=t.tableStatistics,n=t.stateCode,o=t.districtName,b=t.regionHighlighted,j=t.setRegionHighlighted,m=t.expandTable,C=t.getTableStatistic,x=t.tableWidth,T=t.noDistrictData,H=Object(r.useState)(!1),k=Object(a.a)(H,2),w=k[0],A=k[1],y=Object(S.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),z=Object(a.a)(y,2),R=z[0],E=z[1],M=Object(D.g)(),W=Object(N.a)().t,q=Object(r.useRef)(),F=Object(r.useCallback)((function(t){R.sortColumn!==t?E(Object(O.a)(R,(function(e){"districtName"!==R.sortColumn&&"districtName"!==t||(e.isAscending=!R.isAscending),e.sortColumn=t}))):E(Object(O.a)(R,(function(t){t.isAscending=!R.isAscending})))}),[R,E]),I=Object(r.useCallback)((function(t,e){if("districtName"!==R.sortColumn){var i=s.q[R.sortColumn],a=R.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",d=C(c.districts[t],R.sortColumn,a),l=C(c.districts[e],R.sortColumn,a);return R.isAscending?d-l:l-d}return R.isAscending?t.localeCompare(e):e.localeCompare(t)}),[R,c,C]),J=Object(r.useCallback)((function(){n?b.stateCode!==n&&j(Object(O.a)(b,(function(t){t.stateCode=n,t.districtName=null}))):o&&(b.districtName===o&&b.stateCode===c.stateCode||j(Object(O.a)(b,(function(t){t.stateCode=c.stateCode,t.districtName=o}))))}),[c.stateCode,o,b,j,n]),P=Object(r.useCallback)((function(){c.districts&&A(!w)}),[w,c]),_=W(o);o===s.v&&(_="".concat(W(s.v)," [").concat(W(s.p[c.stateCode]),"]"));Object(r.useCallback)((function(t){M.push("state/".concat(t))}),[M]);var U=Object(r.useCallback)((function(){A(!1),q.current.scrollIntoView({block:"start"})}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:l()("row",{"is-total":"TT"===n},{"is-highlighted":n&&(null===b||void 0===b?void 0:b.stateCode)===n||o&&(null===b||void 0===b?void 0:b.districtName)===o&&(null===b||void 0===b?void 0:b.stateCode)===c.stateCode}),onMouseEnter:J,onClick:P,ref:q,children:[Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("div",{className:"state-name fadeInUp",children:W(s.p[n])||_}),(null===c||void 0===c||null===(e=c.meta)||void 0===e?void 0:e.notes)&&Object(u.jsx)(v.a,{message:c.meta.notes,children:Object(u.jsx)(h.e,{size:16})})]}),d.map((function(t){return Object(u.jsx)(g,{noDistrictData:!n&&o!==s.v&&T,data:c,statistic:t,getTableStatistic:C},t)}))]}),w&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"state-meta",style:{width:x},children:Object(u.jsx)("div",{className:"state-meta-top"})}),Object(u.jsxs)("div",{className:l()("row","heading"),children:[Object(u.jsxs)("div",{className:"cell heading",onClick:F.bind(this,"districtName"),children:[Object(u.jsx)("div",{className:"district-name",children:W("District")}),"districtName"===R.sortColumn&&Object(u.jsx)("div",{className:"sort-icon",children:R.isAscending?Object(u.jsx)(h.j,{size:12}):Object(u.jsx)(h.k,{size:12})})]}),d.map((function(t){return Object(u.jsx)(p.a,{statistic:t,sortData:R,setSortData:E,handleSort:F.bind(i,t)},t)}))]})]}),w&&Object.keys(c.districts||{}).sort((function(t,e){return I(t,e)})).map((function(t){return Object(u.jsx)(f,{data:c.districts[t],noDistrictData:t!==s.v&&T,tableStatistics:d,districtName:t,regionHighlighted:b,setRegionHighlighted:j,stateCode:n,expandTable:m,getTableStatistic:C},t)})),w&&Object(u.jsx)("div",{className:"spacer-row",style:{width:x},children:Object(u.jsxs)("div",{className:"spacer",children:[Object(u.jsx)("p",{children:"End of ".concat(W(s.p[n]),"'s districts")}),Object(u.jsx)("div",{className:"fold",onClick:U,children:Object(u.jsx)(h.c,{})})]})})]})}var H=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.tableWidth,e.tableWidth)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))))};e.default=Object(r.memo)(T,H)}}]);
//# sourceMappingURL=23.48dc5bf6.chunk.js.map