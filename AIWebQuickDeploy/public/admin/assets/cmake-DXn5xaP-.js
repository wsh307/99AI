
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}const t={name:"cmake",startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(t,i){return t.eatSpace()?null:function(t,i){var a=t.next();return"$"===a?t.match(n)?"variableName.special":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==a?(t.skipToEnd(),"comment"):"'"==a||'"'==a?(i.pending=a,e(t,i)):"("==a||")"==a?"bracket":a.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}(t,i)}};export{t as cmake};
