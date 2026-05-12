function e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var t=e();function n(e){t=e}var r={exec:()=>null};function i(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(o.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var a=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),o={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},s=/^(?:[ \t]*(?:\n|$))+/,c=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,l=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,u=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,d=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,f=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,p=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,m=i(p).replace(/bull/g,f).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ee=i(p).replace(/bull/g,f).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),h=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,te=/^[^\n]+/,g=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ne=i(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,g).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),re=i(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,f).getRegex(),_=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,v=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ie=i(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,v).replace(`tag`,_).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),y=i(h).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex(),b={blockquote:i(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,y).getRegex(),code:c,def:ne,fences:l,heading:d,hr:u,html:ie,lheading:m,list:re,newline:s,paragraph:y,table:r,text:te},x=i(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex(),ae={...b,lheading:ee,table:x,paragraph:i(h).replace(`hr`,u).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,x).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,_).getRegex()},oe={...b,html:i(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,v).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:r,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:i(h).replace(`hr`,u).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,m).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},se=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ce=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,S=/^( {2,}|\\)\n(?!\s*$)/,le=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C=/[\p{P}\p{S}]/u,w=/[\s\p{P}\p{S}]/u,T=/[^\s\p{P}\p{S}]/u,ue=i(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,w).getRegex(),E=/(?!~)[\p{P}\p{S}]/u,D=/(?!~)[\s\p{P}\p{S}]/u,de=/(?:[^\s\p{P}\p{S}]|~)/u,fe=i(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,a?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),O=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,pe=i(O,`u`).replace(/punct/g,C).getRegex(),me=i(O,`u`).replace(/punct/g,E).getRegex(),k=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,he=i(k,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),ge=i(k,`gu`).replace(/notPunctSpace/g,de).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),_e=i(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),ve=i(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,C).getRegex(),ye=i(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,T).replace(/punctSpace/g,w).replace(/punct/g,C).getRegex(),be=i(/\\(punct)/,`gu`).replace(/punct/g,C).getRegex(),xe=i(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Se=i(v).replace(`(?:-->|$)`,`-->`).getRegex(),Ce=i(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Se).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),A=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,we=i(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,A).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),j=i(/^!?\[(label)\]\[(ref)\]/).replace(`label`,A).replace(`ref`,g).getRegex(),M=i(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,g).getRegex(),Te=i(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,j).replace(`nolink`,M).getRegex(),N=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,P={_backpedal:r,anyPunctuation:be,autolink:xe,blockSkip:fe,br:S,code:ce,del:r,delLDelim:r,delRDelim:r,emStrongLDelim:pe,emStrongRDelimAst:he,emStrongRDelimUnd:_e,escape:se,link:we,nolink:M,punctuation:ue,reflink:j,reflinkSearch:Te,tag:Ce,text:le,url:r},Ee={...P,link:i(/^!?\[(label)\]\((.*?)\)/).replace(`label`,A).getRegex(),reflink:i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,A).getRegex()},F={...P,emStrongRDelimAst:ge,emStrongLDelim:me,delLDelim:ve,delRDelim:ye,url:i(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,N).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:i(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,N).getRegex()},De={...F,br:i(S).replace(`{2,}`,`*`).getRegex(),text:i(F.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},I={normal:b,gfm:ae,pedantic:oe},L={normal:P,gfm:F,breaks:De,pedantic:Ee},Oe={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},R=e=>Oe[e];function z(e,t){if(t){if(o.escapeTest.test(e))return e.replace(o.escapeReplace,R)}else if(o.escapeTestNoEncode.test(e))return e.replace(o.escapeReplaceNoEncode,R);return e}function B(e){try{e=encodeURI(e).replace(o.percentDecode,`%`)}catch{return null}return e}function V(e,t){let n=e.replace(o.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(o.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(o.slashPipe,`|`);return n}function H(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function U(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&o.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function ke(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ae(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function W(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function je(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var G=class{options;rules;lexer;constructor(e){this.options=e||t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:U(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=je(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=H(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:H(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:H(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=H(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Ae(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=U(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:H(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=V(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:H(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(V(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:H(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=H(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=ke(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),W(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return W(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},K=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t,this.options.tokenizer=this.options.tokenizer||new G,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:o,block:I.normal,inline:L.normal};this.options.pedantic?(n.block=I.pedantic,n.inline=L.pedantic):this.options.gfm&&(n.block=I.gfm,this.options.breaks?n.inline=L.breaks:n.inline=L.gfm),this.tokenizer.rules=n}static get rules(){return{block:I,inline:L}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(o.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(o.tabCharGlobal,`    `).replace(o.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},q=class{options;parser;constructor(e){this.options=e||t}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(o.notSpaceStart)?.[0],i=e.replace(o.endingNewline,``)+`
`;return r?`<pre><code class="language-`+z(r)+`">`+(n?i:z(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:z(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${z(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=B(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+z(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=B(e);if(i===null)return z(n);e=i;let a=`<img src="${e}" alt="${z(n)}"`;return t&&(a+=` title="${z(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:z(e.text)}},J=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||t,this.options.renderer=this.options.renderer||new q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},X=class{options;block;constructor(e){this.options=e||t}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?K.lex:K.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}},Z=new class{defaults=e();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=q;TextRenderer=J;Lexer=K;Tokenizer=G;Hooks=X;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new q(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new G(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new X;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];X.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&X.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return K.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?K.lex:K.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?K.lex:K.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+z(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Z.parse(e,t)}Q.options=Q.setOptions=function(e){return Z.setOptions(e),Q.defaults=Z.defaults,n(Q.defaults),Q},Q.getDefaults=e,Q.defaults=t,Q.use=function(...e){return Z.use(...e),Q.defaults=Z.defaults,n(Q.defaults),Q},Q.walkTokens=function(e,t){return Z.walkTokens(e,t)},Q.parseInline=Z.parseInline,Q.Parser=Y,Q.parser=Y.parse,Q.Renderer=q,Q.TextRenderer=J,Q.Lexer=K,Q.lexer=K.lex,Q.Tokenizer=G,Q.Hooks=X,Q.parse=Q,Q.options,Q.setOptions,Q.use,Q.walkTokens,Q.parseInline,Y.parse,K.lex;var $=[{id:`foreword`,title:`편집장 서문`,author:``,part:`서문`,md:`고생 끝에 꼭 낙이 오는 건 아니라는 걸 깨달은 후로 인생이 한결 가벼워졌습니다. 꿈을 꾸고있을 때는 깨고 싶고, 깨어있을 때는 꿈을 꾸고 싶습니다.
`},{id:`finding-place`,title:`제자리를 찾는 나의 친구들에게`,author:`민형`,part:`파트1: 일`,md:`안녕, 먼저 심심한 인사를 보내.

새삼스러운 인사로 이 편지를 시작하는 이유는 어디까지 장황해질지 모른다는 두려움 때문이야.

예전부터 나를 알고 지낸 너는 내가 오래도록 글을 쓰고 싶어 했다는 걸 알고 있을 거야. 올해는 그 마음을 아끼기보단 마음 맞는 사람들과 글을 쓰고 또 책을 내보기로 했어.

창간호의 주제가 '일'이 되면서 어떤 글을 써야 할까 고민하다가, 역시 내가 잘 쓸 수 있는 글을 쓰고 싶다고 생각했어. 그러려면 최근의 내가 영감을 받았던 것에 대해 - 그리고 하고 싶은 말이 많을 것에 대해 써야겠다고도.

인생에서 '일'이 중요한 우리는 꽤 오랫동안 일에 대해 고민해왔고, 앞으로도 그 지난한 과정을 이어가겠지.

그 연장선에서 올해의 시작점에 클레르 마랭의 &lt;제자리에 있다는 것&gt;을 다시 책장에서 꺼내 읽었어. 그리고 읽는 동안 너를 자주 떠올렸어.

---

너도 알겠지만 나는 걷기를 좋아해.

누군가는 만보 걷기를 매일의 목표로 삼아야 할 만큼 새삼스레 챙겨야 할 일이지만 나에게 만보는 호흡과도 같아. 낯선 곳으로 여행할 때면 걷기에 대한 집착은 더 커져서 지하철 몇 정거장 정도는 당연히 걸어야 할 거리가 되고, 지도를 살필 땐 걷는 동안 보게 될 것들을 상상하고, 어떨 땐 그 볼 것들에 매료되어 끝내 그날의 도착지까지 가지 못 한 날들도 많았어.

생각해보면 30년 간 아빠에게 나는 가만 있지 못하는 딸이었던 것 같아. 제대로 걸을 줄도 몰랐던 시절에도 아빠 몸 위를 탐험하다 떨어져 이마에 커다란 혹이 나기도 했었어. 걷기 시작하면서부터는 이웃 무당 할머니네부터 할아버지들이 모여있던 정자까지 온 동네를 제 집처럼 다니기도 했었지.

그 딸이 성인이 되어 독립을 하고, 더이상 어디에서 무엇을 하는지 알 수 없게 된 순간이 왔을 때에도 아빠는 어디에선가 자유로이 움직일 나를 떠올린다고 했어.

---

회사라는 곳에 처음 갔던 그날을 기억해?

그날을 생각하면 나는 스무 걸음 길이의 회색 공사 펜스가 떠올라. 간절했던 결과를 받아든 날이었는데도 마음이 개운치 않았던 기억도 함께.

생각해보면 그전엔 삶의 어느 때에도 끝이 약속되지 않은 시작이 없었거든. 그래서 무엇을 하든 다음에 대한 상상을 병행하는 게 당연한 일이었는데, 더이상 그러지 않아도 되는 그 시작이 너무나도 낯설었던 것 같아.

좀처럼 가만히 있지 못 했던 나에게 제자리를 지켜야 했던, 혹은 이 자리가 내 자리인 것처럼 굴어야 했던 3년 미만의 시간은 몸이 둔해진 만큼 마음은 바빴던 시간이었어.

시시각각 변하는 마음의 소리에 매달려 봤다가 그런 스스로에게 질려도 보고 가끔은 그 탓을 외부로도 돌려봤다가, 다시 이러지도 저러지도 못 하는 스스로를 미워하기도 했었어.

그러다 어느 날 서점에서 마주친 책이 *제자리에 있다는 것*이었어.

제목만으론 그래서 제자리에 있다는 게 좋다는 건지 싫다는 건지 제자리라는 게 도대체 존재는 한다는 건지 알 수 없었지만, 딱 내 손에 잡힌 두께만큼 나와 제자리에 대해 고민해줄 존재가 필요했고 고민없이 계산대로 향했어.

---

책의 말마따나 이책을 읽는 일은 추격전을 벌이는 일과 같았어.

평소보다 더 많은 주석을 달고, 밑줄을 긋고, 접고 끼워 넣어 울퉁불퉁하게 만들고, 그리하여 이 책이 나만의 것이 되었다는 느낌이 들었거든.

이제서야 고백하자면 나는 결국 누군가 답답한 지금의 내 삶이 잘못됐다고 확정해주길 기다렸던 것일지도 모르겠어. 그리고 내가 만족할 수 있는 제자리라는 건 어떻게 찾을 수 있는 건지 그 방법을 쉽게 알고 싶었고.

그런데 책의 마지막 장을 넘긴 뒤 결국 나는 내가 원했던 질문의 답을 얻을 수는 없었어. 대신 의외의 가벼움을 얻었지.

*제자리에 있다는 것*이라는 제목을 보면 어떤 생각이 들어?

'제자리' 그리고 '있다'라는 단어는 왜인지 정적이고 안정적인 느낌을 주는 것 같아. 그래서 되려 내 두 발이 묵직해지는 것 같은 그런 제목이기도 하고.

그런데 이 책의 첫 장을 펼치고 왼쪽 페이지가 쌓일수록 묵직했던 발의 무게가 덜어지고, 결국엔 내가 발을 딛고 있던 땅조차도 움직이는 것 같은 느낌을 받게 돼.

클레르는 결국 자리의 문제는 자리 옮김의 문제라고 말하면서 우리는 끊임없이 모래 위를 걷는 존재라고 시인하거든.

---

언제나 우리 각자에게 딱 맞는 자리가 있을 거라고 생각했던, 그래서 우리가 뿌리 내릴 '제자리'를 찾아 나서려고 했던 우리에겐 꽤 파격적인 시각일지도 모르겠어.

지금보다 몸과 발이 가볍고 싶은 나는 제자리를 찾는 내 친구들에게 이 편지를 보내고 싶어졌어.

조만간 이 책을 너한테 보낼게. '자리'에 대해서 나와 이야기 해줄 수 있어?
`},{id:`find-talent`,title:`특명 재능을 찾아라`,author:`도재인`,part:`파트1: 일`,md:`어릴 때 즐겨 보던 소설에는 난데없이 마법사 학교로의 입학을 허가하는 편지를 받는 주인공이 나왔다. 혹은 다른 세계로 넘어가는 옷장을 우연히 발견하거나, 북극으로 가는 급행열차가 집 앞에 멈춰 서기도 했다. 현실과 판타지를 구분하지 못하는 건 아니었지만, 내심 기대한 것도 사실이다. 언젠가 운명처럼 내게서 남들과 가장 쉽게 구분할 수 있고, 가장 특별한 것이 발현되기를.

'vocation'이라는 단어는 '부르다'를 뜻하는 라틴어 *vocare*에서 비롯되었다고 한다. 본래 *vocatio*는 신이 인간을 특정한 삶의 방식으로 '부르는' 행위를 의미했으며, 중세 기독교 세계에서는 주로 성직이나 수도 생활과 같은 종교적 삶을 가리켰다. 그러나 종교개혁을 거치면서 이 개념은 근본적으로 확장된다. 신이 특정 소수만을 성직으로 부르는 것이 아니라 모든 인간을 각자 삶의 자리로 부른다는 해석이 등장하면서, vocation은 일상의 노동과 연결되기 시작했다. 이제 vocation은 더 이상 수도원의 담장 안에 갇힌 개념이 아니라 시장과 가정, 작업장 속으로 확장된 것이다. 이렇게 해서 '부름'은 곧 '직업'을 의미하게 되었다.

그러나 vocation이 단순히 생계 수단으로서의 직업과 동일한 것은 아니다. 이 단어가 여전히 '소명'의 의미를 지니는 이유는 그것이 내적 응답을 전제하기 때문이다. 직업이 사회적 역할이라면, vocation은 그 역할을 향한 존재론적 응답이다. 즉, 단순히 무엇을 하느냐가 아니라 *왜* 그것을 하느냐의 문제다.

---

vocation이라는 단어를 배웠을 때부터 나의 재능을 궁금해한 것도 자연스러운 일이다. 나는 어떤 것을 잘해서 무슨 일을 하게 될까? 상상 속의 어른이 된 나는, 당시의 내가 동경하던 이들처럼 빛나는 것이 돋보이던 사람이었다.

내가 글을 좀 쓸 줄 안다는 깨달음을 준 계기는 여러 번 있었는데, 백일장 이후 국어 선생님께 불려 가 직접 쓴 글이 맞냐는 질문을 받는다든가 하는 사소한 일이었다. 그러나 꿈꿔 오던 극적인 일은 없었기에 나는 이 외에도 다소 일본 만화스러운 전개가 내 삶을 덮치리라 믿었다. 무엇보다도 글쓰기란 인간의 아주 기본적인 소양이 아닌가. 당시의 나는 그렇게 생각했다. 따지자면 누구나 쉽게 가질 수 있는 것보다는 좀 더 까다롭고 날카로운 것을 가지고 싶었다.

대학에 입학해 아직도 캠퍼스에서 유일하게 낡은 라디에이터로 난방하는 문과대 건물에서 수업을 들으며 나는 전과를 결심했다. 내가 갖고 있는 이 애매한 재능이랄지, 몇 안 되는 열렬한 관심사가 이 사회에서 더 이상 값을 쳐주지 않는다는 사실이 살갗으로 와닿았던 순간이었다.

그래 봤자 문과생이 도망칠 수 있는 길은 다 고만고만했기에 내 선택은 결과적으로 대동소이했으나, 사과대 건물은 적어도 전보다 나았다. 자본주의 사회의 좁은 틈으로 매끄럽게 빨려 들어가기 위해 전공까지 바꿔 놓고, 정작 나는 복수전공으로 사회학과를 선택했다. 밥벌이와는 딱히 관련이 없을 것 같은 학문을 배우는 일에 골몰하며 여전히 내게 다른 달란트가 있을 거라 막연히 생각하는 시간으로 대학 생활을 채웠다. 그리고 배운 게 도둑질이라고 나는 얼결에 나름 전공을 살려 마케터로 취직했다.

---

나이를 먹고 연차가 쌓이며 몇 번이고 내가 스스로에게 되물었던 것은 "정말 내가 가진 것이 이게 전부이며 최선인지"였다. 그러니까 나는 좀 억울했던 것 같다. 직업에 귀천 없다고 했거늘, 직군에 따라 초봉이 당연하게 나뉜 시스템이라든지 "문송합니다"라는 말이 우스갯소리인 이 세상의 분위기가. 몽키스패너를 꽉 쥐고 있어야 하는 사회에서 나는 목검을 들고 있는 사람이었다.

내가 그렇게도 해박한 분야는 일에 그다지 도움 되지 않았으며, 개발자와의 소통은 미지와의 조우 수준이었다. 더듬대며 도통 대화를 따라가지 못하다가 『비전공자를 위한 이해할 수 있는 IT 지식』이라는 책 한 권을 사 들고 돌아오는 길에는, 마케터의 역할은 읍소가 전부인 것 같았다.

물론 여전히 글쓰기는 쉬웠다. 나는 회사에서 줄곧 글 쓰는 사람이었다. 배너에 들어갈 카피부터 회사 뉴스레터까지. 특별한 안경이라도 쓴 것처럼 섬세한 뉘앙스에 맞게 단어를 골라내는 능력이 있었지만, 딱히 그게 대단하다는 생각은 들지 않았다. "주말에 취미로 코딩해요"라고 말하던 개발자에 비하면, 주말에 시집을 읽고 독서 모임을 하는 내가 다소 베짱이처럼 느껴졌기 때문이다.

---

> 운명처럼 피어날 줄 알았던 나의 재능이 아직도 오지 않은 것인가?
> 정말로 이게 내가 가진 가장 특별하고 빛나는 것일까?

아직도 나는 기다리는 중이었다.

그즈음 직장에서 선배들은 내게 이 정도 연차가 되면 자기가 무엇을 잘하는지 알 테니, 그것을 뾰족하게 만들어 보라는 조언을 해줬다. 들을수록 알쏭달쏭해지는 말이었다. 남들보다 반짝이는 나의 재능이 무엇인지 나는 그때까지도 도통 몰랐기 때문이다.

대학원에 입학한 배경에는 그런 이유가 섞여 있었다. 나는 무엇이든 새로운 일이 일어나길 바랐고, 이왕이면 내 커리어에서 급격한 전환점이 되길 바랐다. 마치 얼결에 친구 따라 오디션장에 갔다가 데뷔해서 대스타가 되었다는 아이돌처럼.

여느 경영대가 그렇듯 유행에 쫓겨 거의 모든 커리큘럼에 MSG처럼 뿌려진 AI를 정복하기 위해 파이썬을 배우며, 나는 비로소 깨닫게 된다.

죽을 둥 살 둥 노력하면 몇 개의 코드를 어설프게 떠올리는 사람이 될 수는 있겠지만, 내가 사람들에게 좋은 반응을 받았던 문장을 떠올리는 것만큼 쉽지 않을 것이라고. 스스로 만족할 정도로 잘 다듬은 문장만큼 좋은 것을 나는 이 분야에서 절대 만들지 못할 것이라고.

---

내가 만들어온 수많은 콘텐츠 중에서 텍스트는 내게 가장 쉽고, 익숙하고, 자신 있는 무기이기도 했다. 나는 내 안의 너무 많은 것이 고여 버리면 글을 썼고, 서로 이웃 한 자릿수 블로그에서 글을 쓸 때도 습관적으로 퇴고를 하는 사람이었으며, 너무 좋은 글을 읽으면 타인에게 추천하지 않고서는 배기지 못하는 사람이었고, 책의 가치를 아는 사람들과 이야기를 나누며 순수한 즐거움을 느끼고 더 깊은 사유를 하고 싶다 열망하는 사람이었다. 잘하지 못하는 것을 좋아하기 쉽지 않듯이, 무언가를 꾸준히 좋아하는 것 역시 노력이 필요한 일이며 재능에 가까운 일이기도 하다.

**내가 좋아하는 것, 잘하는 것, 나에게 최선인 것은 이미 내 손에 있었다. 인정하지 않았을 뿐이다.**

대학원에서 내가 얻은 배움은 아이러니하게도 이런 것이다.

이 글을 읽는 동안 당신이 같은 문과생으로서, 혹은 공감 능력 높은 개발자로서 나를 응원했을지 모르겠지만, 슬프게도 꽉 닫힌 해피엔딩은 없다. 삶은 계속되고 헤매는 날이 잦다.

나는 아직도 난데없이 나를 부르는 저편의 목소리를 기대하고 있을지도 모른다. 그러나 마지막에 가서 결국 나의 뒤에 끈질기게 따라붙은 이 녀석의 손을 잡을 것이라는, 혹은 잡을 수밖에 없다는 사실도 알고 있다. 이것이 다소 장황한 나의 입회 이유이다.
`},{id:`bad-org`,title:`나쁜 조직이 끌리는 이유`,author:`박정현`,part:`파트1: 일`,md:`당신의 친구가 결혼 상대로 A와 B를 두고 고민하고있다고 가정해보자.

A는 다정하고, 합리적이며, 감정기복이 적고 안정적인 직장을 가지고있다. A와 결혼하게되면 신혼집은 내 돈 한 푼 안들어간 부자 동네의 부자 아파트라 한다. B는 그와 반대로, 난폭하고, 경우 없으며, 감정기복이 심하고 불안정한 직장에 다닌다. 그와의 결혼생활은 때로는 뜻모를 비명이 들리는 동네의 때로는 뜻모를 발망치 소리가 들리는 아파트에서 시작될 것이다.

당신이 좋은 친구가 맞다면 A와 B를 놓고 '고민' 씩이나 하고있는 친구를 향해 따끔한 조언을 해줄 것이다. 김치찌개와 부대찌개 놓고 고민하는 것은 말이 되지만, 된장찌개와 하수구에서 퍼올린 물을 놓고 고민하는 것은 명백한 미친 짓이 아닌가? 더이상 친구가 아니게 되어도 상관 없다는 듯, 조언을 빙자한 폭언을 쏟아봐도 친구는 알 수 없는 표정으로 당신을 바라보다 쓸쓸한 한마디를 남길 뿐이다.

> 사랑이 뭐길래...

---

애착을 교과서적으로 형성하지 못한 사람들 중에는 불안함과 사랑을 구분하지 못하고, 쓸모있는 사람이라고 느끼지 못하면 마음을 붙일 수 없는 사람도 있다.

그건 그렇고, 교과서적 관점에서 좋은 조직이란 무엇인가?

의사결정이 합리적이고, 불필요한 리소스가 쓰이는 것을 방지하기 위한 프로세스가 잘 정착되어있고, 어려움이 있을 때 도움을 받을 수 있는 의사결정권자나 동료가 있다. 구성원들이 공통적으로 겪는 문제가 있다면 그것을 개선하기 위해 적극적인 액션이 있었으며, 새로운 문화를 정착시키기 위한 절차가 마련되어있다. R&R이 정확히 잘 지켜지며, 그렇기 때문에 불필요한 초과 근무를 할 필요가 없다. 남의 돈 버는 일이 으레 그렇듯이 마냥 행복한 일만 있는 건 아니겠지만 적어도 부당한 일은 일어나지 않는다.

이런 조직에 있다가도 답답하다며 뛰쳐나와 B같은 조직을 고르는 미친 사람이 실존하기도 하는데, 그렇다. **나는 A를 두고 뛰쳐나왔다.** 그곳에서는 하루하루 시들어가는 느낌이 들었고 답답했다. 개인의 똑똑함보다 집단의 똑똑함이 훨씬 더 강력했기 때문에 효능감이 없었다. 내가 할 수 있는 일은 그 프로세스를 허덕거리며 따라가는 것 뿐이라고 느껴졌다. 마치 '완벽한 결혼 생활 - 근데 이제 나 혼자 미쳐가는'이라는 플롯을 그대로 따라가는 것 같았다.

나를 부족함 없이 사랑해주는 배우자, 신혼집은 내 돈 한 푼 안들어간 부자 동네 부자 아파트, 행복해보이는 이웃들... 그러나 가장 큰 문제가 있다면 - 나는 그 배우자를 사랑하지 못하고야 만 것이다. 그를 사랑하는데 실패했다. 안타까운 일이다.

---

어떻게 그럴 수 있었을까? 나는 나쁜 조직에 와보고서야 그 이유를 알 수 있었다. 나는 좋은 조직에서 좋은 사람으로 살기보다는 좀 생겨먹은대로 나쁜 사람으로 살고 싶었던 모양이다. 좋은 사람을 만나 좋은 사람인 척 살아가기에는 심성이 그리 둥글지 못했다. 게다가 나는 불안해야 사랑할 수 있고, 쓸모있다고 느껴야 사랑할 수 있는 사람이었다.

B같은 조직에는 기본적으로 프로세스랄게 없다. 모두가 '프로세스'에 대해 이야기하지만 그것은 '프로세스를 만들기 위한 논의 과정 수립을 위한 일정 인비테이션 드리겠습니다.' 정도에 지나지 않는다. 그런고로 내가 할 일이 아닌 것 같은 일도 나서서 해야하고, 집단 지성을 효과적으로 만들어낼 구심점이 없어 독야청청히 걸어야하고, 블라인드에서 욕 먹으면 후딱 고치라는 지령을 받고, 안 먹으면 고칠 필요 없다.

겉으로 볼 때는 A를 두고 B를 고른 선택이, 그리고 B에서 더 행복하다고 느끼는 사람이 미쳤다고 느껴지겠지만, 그 이면을 상세히 살펴 보면 그 사람이 그렇게 미친 이유를 알 수 있게 되는 법이다. 저녁 7시만 되면 가가호호 밥 냄새를 풍기는 부자 아파트에서 평화로이 숟가락을 뜨기 보다는 *(호호 여보, 식사하세요)*, 종종 뜻모를 비명 소리와 가끔 벌어지는 서스펜스가 있는 동네를 더 좋아하는 사람도 있다 *(자기야, 어디서 비명 소리 들리지 않았어?)*. B와 함께하는 이상, 호전적인 면모를 둥글넙적하게 참지않아도 되고, 널뛰는 감정기복을 숨길 필요도 없으며, A와 함께했을 때는 상상조차 할 수 없는 진귀한 서스펜스에 휘말리는 이벤트가 발생하기도 한다. 나를 '미친듯이' 사랑하기는 하나 때로는 미친듯이 싸워야하는 배우자와 미친 사랑을 하면서 말이다. 이 세상에서 일어나는 많은 안타까운 일 중에 하나다.

*\\*물론 우리 회사의 특성상 모든 동네가 '부자 동네'이기는 하다는 점도 짚고 넘어가지 않을 수 없다. 결국 보스턴이냐 라스베거스냐 하는 차이일 뿐이다.*
`},{id:`becoming-dev`,title:`개발자가 되기까지`,author:`익명`,part:`파트1: 일`,md:`개발을 처음 접한 건 대학교 1학년 때, 프로그래밍 수업 때였습니다. 원래 '컴퓨터'랑 친한 사이는 아니었습니다. 게임을 즐겨 하지도 않았고, 학창 시절에는 컴퓨터를 만지는 것도 혼날 일이었습니다. 컴퓨터라는 것이 저에게 굉장히 멀게 느껴졌고, 특히 프로그래밍은 아예 다른 세상 이야기 같았습니다.

그러다가 갑자기 프로그래밍 수업을 들으니 굉장히 어색했습니다. 수업을 같이 듣는 친구들 중에는 이미 개발을 해 본 친구들도 많이 있었습니다. 이미 수업에서 배울 내용들을 다 알고, 다음 실습을 하던 친구들이 신처럼 느껴졌어요. 화면에서 로봇을 움직이는 게 고작이었지만, 그래도 무언가를 만드는 게 재미있었습니다.

2학년에 올라갈 때 학과 선택을 하면서, 컴공을 할 지 말 지 많이 고민했습니다. 개발이 재미있었지만, '이미 개발을 배운 친구들과 경쟁이 될까? 그 친구들은 어릴 때부터 검은 창 흰 글씨를 보던 친구들일 텐데. 나는 그런 것과 거리가 먼 사람인데, 잘 할 수 있을까?' 하는 걱정들이 컸습니다.

그래서.. **전자과로 도망쳤습니다.**

---

떠밀리듯 온 전자과의 수업들은 재미가 없었습니다. 수학도 너무 어려웠고, 어디에 어떻게 쓰이는지 가늠이 잘 가지 않는 내용들을 배우자니 많이 따분했습니다. 진로 고민도 많이 했던 시기였습니다.

그러다 전자과에서 억지로 다시 개발 수업을 듣게 되었고, *'이거다'* 라는 느낌을 받았습니다. 주어진 문제를 어떻게 풀어 나갈 지, 실제로 동작하는 프로그램을 만드는 과정들이 고통스러웠지만 즐거웠어요.

한꺼번에 두세 개의 프로젝트를 마무리하면서 중간고사, 기말고사 공부까지 하느라 항상 정신없었습니다. OS, 네트워크, p2p 등등의 프로젝트를 진행하면서 며칠 밤을 세우기도 했습니다. 설계하고, 구현하고, 디버깅하는 과정은 너무나도 힘들었지만 즐거웠어요. 버그 하나를 고칠 때마다, 그리고 끝내지 못할 것 같던 프로젝트를 완성할 때마다 쾌감을 많이 느꼈습니다.

---

학교에서 개발하면서 실제로 유저들이 사용하는 서비스를 만들고 싶다는 생각이 많이 들었습니다. 혼자 코드를 짜고, 제출하면 끝나는 프로그램을 작성하다 보니 내가 짠 코드가 괜찮은지 고민도 많이 했습니다.

회사에 입사하고, 누구나 아는 서비스를 만들어가는 분들과 일하고, 수많은 사람들이 이용하는 서비스를 제가 직접 만들어간다는 것이 신기했어요. 혼자 고민하던 것들을 팀원들의 리뷰를 통해 같이 고민할 수 있었고, 제 고민의 방향이 맞는지 돌아볼 수 있어서 좋았습니다.

개발자로 일하는 것은 여전히 재미있습니다. 직접 서비스를 만들어가는 것, 결과가 눈에 보이는 것은 보람찬 일이에요. 회사에서 이런 저런 사건들로 힘들 때도, 일이 너무 많아 지칠 때도 많았지만, 좋아하는 일이어서 다시 회복할 수 있었던 것 같습니다.
`},{id:`now-dev`,title:`그리고 지금은 개발합니다`,author:`이상`,part:`파트1: 일`,md:`실용음악을 전공하고, 영화음향을 거쳐 지금은 개발자로 일하고 있는 K씨와 인터뷰를 해보았습니다.

---

**K씨, 자기소개 부탁드려요**

안녕하세요, 스타트업에서 4년차 프론트엔드 개발자로 일하고 있는 K입니다. 개발과는 전혀 다른 전공들을 했어요. 학생증만 세 개예요. (웃음)

**학생증이 세 개라고요? 어떤 흐름으로 거쳐오셨는지 말씀해주실 수 있으실까요?**

먼저 실용음악과에서 베이스 기타를 전공했습니다. 한 5년 정도 했는데, 그만두게 되었어요.

어릴 땐 라면만 먹고 살아도 괜찮다고 생각했거든요. 그런데 나이를 먹다 보니 그 미래가 싫어지더라고요. 세상에 좋은 것들이 많다는 걸 알게 되었어요. 그리고 돈도 잘 벌 수 있을지 모르겠고... 미래가 안 보였어요.

당시 선생님께서 *'우리는 무대에서의 3분을 위해 3년을 연습실에서 보내는 거야.'* 라고 말씀하셨어요. 정말 멋있는 말이었는데, 동시에 '나는 그러고 싶지 않다' 는 생각이 들었어요. 그게 솔직한 제 마음이었던 것 같아요.

그래서 방향을 틀었는데, 제가 게임도 좋아해서 게임 음향에 관심이 많았거든요. 음향의 뿌리는 영화음향이라고 생각해서 영화 음향도 전공하게 되었습니다. 학교에 미디어아트 수업이 있었는데요, 재미있어 보여서 청강을 했다가 코딩을 처음 접하게 되었어요.

그때 마침 프론트엔드 개발자인 친언니가 제가 개발에 관심을 가지는 걸 보고 부트캠프를 제안해 줬어요. 그렇게 개발자가 되었습니다.

---

**부트캠프를 다니셨군요. 완전히 다른 분야로 오신 거라 많이 어려우셨을 것 같아요.**

생각보다 코딩이 적성에 맞았어요. 처음에 별찍기 과제를 2시간동안 하는데 너무 재미있었어요. 오래 앉아서 고민하는게 잘 맞는다는 생각이 들더라구요.

물론 어려운 것도 많았어요. 부트캠프 하면서 언니에게 많이 물어봤는데요, 대충 질문하면 확실히 질문하라고 하고, 안되는데? 하면 강의 보내주고, 부트캠프에서 과제 내주면 이해하고 있는거 맞냐고 하고... 계속 이것저것 시켰어요.

그래도 그렇게 공부 한 덕에 막바지에는 잘한다고 소문이 나 있더라고요. 마지막 프로젝트에서는 조장도 하고, 팀원분들 디버깅도 도와드렸어요. 그게 꽤 뿌듯했습니다.

---

**직업으로써는 어떠신가요?**

무언가를 만들어낸다는 점에서 개발과 예술은 닮아있는 지점이 있는 것 같아요. 그래서인지 적성에 잘 맞는 것 같습니다.

**요즘 밴드가 인기가 많잖아요. 전공도 하셨는데 혹시 취미로도 하세요?**

사실 음악을 그만두고 나서 한 2~3년은 베이스를 아예 꺼내지 않았어요. 음악 자체도 잘 안 들었고요. 지하철에서 베이스를 들고 가다가 예전 동기를 마주치면 어떡하나, 그 친구는 계속하고 있는데 취미로 하는 내가 너무 작아 보이지 않을까, 그런 생각이 있었거든요.

그러다가 201P (밴드 커뮤니티) 에서 드럼을 치는 친구와 이야기를 하게 되었는데 *'뭘 그런 걸 신경 쓰냐'* 고 하더라고요. 그 한마디가 진짜 많이 도움이 됐어요.

요새는 친구들과 직장인 밴드를 하고 있고요, 2년 정도 됐습니다. 이름은 '우코못' 이에요.

**최애 밴드도 있으면 추천해주세요!**

쏜애플이라는 밴드를 좋아해요! 입시할 때 부터 좋아했는데 지금도 여전히 좋아해요. 우울한데 처절한 느낌이 있으면서도 살아가려는 의지가 느껴지는 게 좋아요.

---

**다양한 분야를 경험하셨는데, 그러면서 생긴 본인만의 깨달음이 있으실까요?**

무언가를 시작하는 데 있어서 크게 걱정하지 않게 된 것 같아요. 해볼까? 안 할 이유가 있을까? 이렇게 생각하는 편이에요. 아마 여러 전공을 거쳐오면서 자연스럽게 생긴 태도인 것 같아요.

**그럼 개발 다음에 해보고 싶은 분야가 있으실까요?**

미디어아트를 해보고 싶어요. 학교 다닐 때 정말 재밌게 했거든요. 영화과 수업을 들으면서 남는 시간엔 미디어아트 툴을 익혔고, 전시도 크게 해봤어요. 그때가 정말 재미있었는데, 부트캠프 끝나고 취업하면서 학교를 자퇴했거든요. 언젠가 다시 해보고 싶어요.
`},{id:`ai-stock`,title:`AI 모델러가 바라본 AI 섹터별 주식 투자`,author:`김효진`,part:`파트2: AI`,md:`## 1. AI 투자, 이제 일상의 화두가 되다

주식 이야기는 이제 어디에서나 자연스럽게 등장하는 주제가 되었다. 회사 동료들과의 점심 자리든, 오랜 친구들과의 모임이든 어느 순간부터 대화의 흐름은 자연스럽게 "요즘 어디에 투자했어?"라는 질문으로 이어진다. 특히 AI 관련 주식은 이제 그 단골 소재 중에서도 단골이 되어버렸다.

AI는 더 이상 먼 미래의 기술이 아니다. 모르는 게 생기면 "그냥 GPT 한테 물어봐"가 자연스럽게 나오고, 개발자들 사이에서는 "Claude code 진짜 좋더라"는 말이 심심찮게 들린다. GPT 서버가 다운되는 날이면 다들 멘붕이 온다는 말도 과장이 아닌 세상이 됐으니까.

불과 작년까지만 해도 AI 버블에 대한 우려가 적지 않았다. 그러나 최근 들어 분위기는 달라지고 있다. AI는 단순한 유행이 아니라, 컴퓨터 기반 업무 전반을 재편할 수 있는 핵심 기술로 인식되기 시작했다. 특히 2026년 초 현재, 그 변화의 속도는 더욱 가파르게 느껴진다.

## 2. AI 투자를 둘러싼 거시 환경 변화

AI 투자 흐름을 이해하기 위해서는 거시 환경 역시 함께 살펴볼 필요가 있다. 최근 일본 정치 상황의 변화, 미·일 공조 강화, 이에 따른 금융 및 환율 흐름은 글로벌 자산시장에 영향을 미치고 있다. 엔화 강세는 기존의 '엔 캐리 트레이드' 자금을 위축시키며 기술주와 가상자산 시장에 단기적인 부담 요인으로 작용할 수 있다. 반면, 미국 물가 상승률이 안정세를 보이며 금리 인하 기대가 형성되고 있다는 점은 시장 전반에는 긍정적인 신호로 해석된다.

결국 AI 투자는 단순히 기술만의 문제가 아니라, 금리·환율·정책과 맞물린 복합적인 흐름 속에서 이해해야 할 영역이다.

## 3. AI 산업은 세 가지 축으로 움직인다

AI 산업은 하나의 단일한 영역처럼 보이지만, 실제로는 서로 다른 세 가지 축이 동시에 작동하는 구조를 가진다.

- **소프트웨어**
- **하드웨어**
- **인프라**

이 세 영역은 서로 영향을 주고받으며 성장하지만, 투자 관점에서는 각기 다른 사이클과 특성을 가진다.

### 3-1. 소프트웨어: LLM 중심의 경쟁과 수익화 단계

소프트웨어 영역, 특히 대형 언어 모델(LLM)은 이미 빠른 속도로 발전해 왔다. 다양한 모델들이 경쟁하며 기술 수준은 상당 부분 성숙 단계에 접어들었다고 볼 수 있다. 그렇다면, 우리에게 이제 중요한 질문은 "얼마나 잘 만들었는가"가 아니라, **"어떻게 수익으로 연결할 수 있는가"**가 되었다.

### 3-2. 하드웨어: 반도체 사이클과 AI 수요 확대

하드웨어, 특히 반도체 영역은 현재 본격적인 사이클 진입 구간에 있다. 특히 HBM과 같은 고성능 메모리에 대한 수요 증가는 반도체 산업 전반의 재평가로 이어지고 있다. 그리고 글을 쓰는 현재 시점(2026년 5월)에서 가장 화제가 되는 섹터이다.

### 3-3. 인프라: 데이터센터와 클라우드 경쟁의 심화

AI 인프라는 장기적인 관점에서 가장 중요한 축 중 하나다. 특히 전력 인프라는 향후 수년간 핵심적인 병목 요인으로 작용할 가능성이 높다. 결국 인프라 영역에서는 "누가 더 빠르게, 더 효율적으로 자원을 확보하고 운영하느냐"가 핵심경쟁력이 된다.

## 4. AI 투자, 섹터별 이해가 성과를 가른다

AI 산업이 장기적으로 성장할 것이라는 점에는 큰 이견이 없다. 그러나 투자 관점에서는 단순히 "AI에 투자한다"는 접근으로는 충분하지 않다. 소프트웨어, 하드웨어, 인프라는 각각 다른 속도와 방식으로 성장하며, 투자 타이밍과 리스크 구조 또한 다르다.

큰 흐름을 믿되, 내 돈을 지키는 건 결국 내 몫이니 이 글을 읽는 독자들은 이러한 흐름을 인지하며 재밌고 신중한 투자를 해보면 좋겠다는 마음이다.
`},{id:`ai-fomo`,title:`국문과 나와서 IT회사에서 일하는데 AI랑 안 친하면 안 되는 걸까`,author:`Y`,part:`파트2: AI`,md:`국문과를 졸업해서 IT회사에서 일하고 있다. 내가 하는 일 자체는 IT스러운 일은 아니다. 내 안에 있는 것을 끄집어내 언어화하는 일, 이를 구조화해서 사람들이 체험하고 경험할 수 있는 형태의 결과물로 빚어내는 일, 이를 전달하기 위해 사람들과 소통하는 일. 정해진 템플릿이 없는 창의적인 일을 한다는 말도 되겠고, 쉽게 표현하자면 전형적인 문과의 일이다.

일을 오래 하려면 그걸 잘하거나 사랑해야 한다. 물론 둘 다면 좋겠지만 둘 중 하나만 만족해도 그럭저럭 지속이 된다고 본다. 그 중에서도 '문과의 일'을 잘하거나 사랑하려면 인문학이 필요하다. 문과의 일은 사람으로 시작해서 사람으로 끝나는데, 사람을 잘 이해하는 것과 사람을 사랑하는 것은 모두 인문학의 다른 이름이므로.

---

회사라는 조직은 별로 인문학적인 곳은 아니다. 어쩌면 IT회사라서 그런 경향이 좀 더 짙은 것일지 모른다. 여기서는 '사람'이 아니라 '사용자'를 본다. 이윤 추구를 목적으로 삼는 조직이니까 당연한 일이다. 마음, 영혼, 철학, 저 어딘가에 있을 보편적인 선함 같은 뜬구름보다는 더 많은 체류시간과 더 많은 소비를 끌어내야 할 '고객'으로서의 사람을 말해야 하는 곳이다.

동전의 양면처럼 밝은 면이 있으면 어두운 면도 따라오기 마련이다. 개인의 정체성과 조직의 정체성이 일치하지 않는 것, 준거집단의 보편 정서와 묘하게 어긋나 있는 것, 그래서 때로는 외롭기도, 조급하기도, 답답하기도, 무력하기도 한 것.

---

이제는 다들 AI 얘기만 한다. 서두에 소개한 대로 나의 일은 '아직' AI를 그렇게 필요로 하는 일은 아니다. 코드를 짜는 것도 아니고 그래픽 산출물을 만드는 것도 아니고, 내 안에 있는 걸 전달하는 게 내 일의 본질이라고 진단하고 있기 때문이다. 그런데 온 세상이 AI랑 거리를 좀 좁히라고 한다. 쓸모를 못 느껴서 쓰지 않는 것뿐인데, 쓸모를 찾으라고, 그래야 살아남는다고.

하루가 다르게 '진화'하는 AI와 AI 사용자들의 근황을 알고 싶지 않아도 알게 된다. AI만 가지고 유니콘 스타트업을 키웠다는 뉴스의 호들갑부터 시작해서, 관심 없어도 알고리즘이 강제로 눈앞에 들이대는 각종 AI 콘텐츠들. 그러다 보면 나도 왠지 적극적으로 AI를 써서 뭔가를 만들어내야 할 것 같고, 필요는 없지만 일단 결제하면 뭐라도 영감이 나올까 싶은 20만 원짜리 챗GPT 프로 요금제도 만지작거려보게 된다. 이른바 **AI FOMO**다.

사실 이러한 도태 공포는 AI에 한정된 얘기는 아니다. 한때 유행했던 셀프 브랜딩 붐과도 결을 같이 하고, 무자본 창업, 파이프라인 만들기, 부의 추월차선, 성공 팔이 어쩌고저쩌고 하는 이야기들과도 맥이 닿아 있고, 한국인들의 만성 정신병을 유발하는 자기 계발 강박과도 어깨를 나란히 한다.

---

> 조금 천천히 가면 안 되는 걸까. 그때까지 AI를 어떻게든 사용해야 한다는 압박감을 내려놓고 그냥 AI에 관심 없으면 안 되는 걸까. 꼭 모두가 아이폰 1세대의 혁신을 온몸으로 느껴야 하는 걸까. 진짜로 뉴노멀이 되고 난 이후부터 생각해 보면 안 되는 걸까. 왜 얼리어답터가 되지 않으면 뒤처진다고 서로를, 스스로를 다그쳐야만 하는 걸까.

AI가 발전해서 희귀병을 진단한다든지 신체장애의 보조도구가 되어준다든지 하는 장점도 무수히 많이 있을 것이다. 진심으로 인류의 과학이 발전하기를 기원한다. 그리고 우리 회사가 빠르게 기술을 선점하고 그걸로 돈도 많이 벌기를 간절히 바란다. 하지만 지구 생활자 모두가 이 새로운 기술을 충분히 지혜롭게 활용할 수 있을 때까지 그 성장 곡선이 완만하기를 소망하기도 한다.

확실히 뭔가가 일어나고 있다. 특이점의 한가운데를 통과하는 중일지도 모른다. 비록 유혹이 강력하지만, 온전히 내 마음대로 할 수 있는 이 글만큼은 AI의 도움을 받지 않고 탈고하는 것으로, 거스를 수 없는 흐름에 조용히 저항해 본다.
`},{id:`templestay`,title:`템플스테이`,author:`석예다`,part:`파트2: AI`,md:`*"이 길로... 갈 수 있는 거예요?"*

눈이 쌓인 돌길 위를 덤프트럭이 춤추듯 올라갔다. 차체가 기울 때마다 심장이 함께 쏠렸다. 산에 쉬러 왔다가 평생 쉬게 되는 건 아닐까. 쓸데없는 상상이 머릿속을 스쳤다. 보살님의 얼굴은 이상하리만치 평온했지만 연신 창밖을 흘끗대며 최악의 장면을 그리고 있었다. 동동거리기 바빴던 마음은 처음부터 절과 썩 어울리지 않았다.

부여잡던 마음을 이제서야 놓는다. 북한산 중턱에 자리 잡은 절, 중흥사에 도착했다. 산사에 도착하니 소란했던 마음은 눈 녹듯 사라지고 없다. 차에서 내려 흙을 밟고 이리저리 절을 둘러보고 산내음을 맡는다. 걷는 발소리와 옷깃 스치는 소리만 귀에 또렷이 들리는 느낌이 꽤나 생경하다. 한겨울의 산은 묵직했고 일상의 소음이 빠진 숨막히는 고요함과 오랜만에 마주한 날이었다.

---

리프레시 휴가는 미루고 미루다 사라지기 직전에야 꺼내 들었다. 쉬고 싶지 않았던 건 아니다. 그냥 쉬면 될 것을 '그럴싸하게' 쉬고 싶었던 탓이다. 언젠가부터 해야 할 것 같은 기분에 휩싸여 모든 시간이 생산적이어야 한다는 강박에 붙들려 있었다. 쉬는 날조차 계획이 필요했고, 성과 없는 하루는 어딘가 빚을 진 기분이었다.

회사에서 마주한 AI는 나를 더 조급하게 만들었다. 파도처럼 밀려오는 콘텐츠 속에서 나는 기획자라기보다 관망자에 가까웠다. 유저에게 좋은 경험을 주겠다는 기준은 자주 흔들렸고 쓸모를 증명해야 한다는 압박은 다시 고개를 들었다.

그렇게 파도 위에 서 있어야만 의미가 있는 사람처럼 굴다가 또 다른 날은 모순적인 나를 심심찮게 목격한다. 전자책에 눈을 붙이려다 종이책을 택하고 자연 속에 파묻히려 이곳을 찾고. 변하지 않는 무언가를 찾아 헤매듯 아날로그에 자꾸 파고 들게 되는 것이다.

---

산 아래에서 복잡하게 돌아가던 시간은 꽤나 단순해졌다. 새벽 예불을 드리고 때가 되면 갓 지은 밥을 먹고 산책을 했다. 여기도 할 일이 많다며 웃는 사무장님의 일을 거들다 보면 어느새 해가 기울어 있다. 해야 할 일은 많지 않았고, 잘 해내야 할 것도 없었다. 시간을 붙잡거나 끌어당기려 애쓰지 않고 흘러갈 뿐이었는데 이상하게도 허전하지 않았다.

새벽에는 부랴부랴 몸을 일으켜 법당으로 향했다. 차게 식은 공간에 방석 하나를 깔고 앉았고 스님이 건넨 경전을 손에 쥐었다. 따라 읽으라는 말을 들었지만 글자는 영 눈에 들어오지 않았다. 그러다 징이 울리고 이어지는 목탁소리. 스님의 낮은 목소리가 법당 안을 채웠다. 리듬에 맞춰 더듬더듬 소리 내어 몇 줄을 넘기니 머릿속을 채우던 생각이 가라앉고, 잡히지 않는 생각을 붙들려 애쓰던 몸과 마음에도 조금씩 힘이 빠진다.

오후엔 보살님이 건넨 책을 펼쳤다가 한 구절에서 손이 멈췄다.

> "우리가 가야 할 곳은 그 어디도 아닌 우리들 자신의 자리다. 시작도 자기 자신으로부터 내디뎠듯이 우리가 마침내 도달해야 할 곳도 자기 자신의 자리다."

---

파도는 여전히 치고 있다. AI도, 먹고사는 문제도, 나의 불안도 사라지진 않았다. 해결된 건 없다. 산에서 내려가면 일은 눈덩이처럼 불어나 나를 기다리고 있을 것이다.

다만 파도 위에 서 있지 않은 순간에도 내가 사라지진 않는다는 마음을 떠올리게 된 건 내게 큰 수확이었다. 파도를 타지 못하는 날이 여전히 계속되더라도 적어도 물속에서 숨을 고르며 기다릴 수 있을 테니까. 이 정도의 마음이면 다시 그 자리로 돌아가도 괜찮을 것 같다.
`},{id:`enkidu`,title:`엔키두 이야기`,author:`이준우`,part:`파트3: 소설`,md:`*일러두기*
*치타공은 약 800만 명이 거주하는 방글라데시 제2의 거점 도시다. 세계에서 가장 긴 120km의 해안선을 끼고 있으며 그곳에서 전 세계 폐선박의 80%가 해체된다.*
`},{id:`afterword`,title:`편집 후기`,author:``,part:`후기`,md:`**김효진:** "아무래도 AI 산업군에 있다보니 AI 섹터 투자에 관심이 있습니다. 이에 가볍게 사견을 작성해보았습니다. 재밌게 즐겨주세요!"

**석예다:** "지극히 사적인 일기를 냅다 펼쳐 보인 것 같아 쑥스럽기도 했지만, 퇴고를 거치며 글을 다듬는 시간이 참 소중하게 느껴진 시간이었네요! 그 과정에서 NATIVE 분들과 나눈 이야기도 인상 깊었고, 덕분에 첫 에세이 경험도 잘 남길 수 있었습니다. 감사합니다 :)"

**이상:** 덕분에 다른사람의 인생에 대해 심도있게 물어보고 이야기하며 배울 수 있는 시간이 되었습니다. 즐거웠습니다. 모두 자신만의 즐거움을 찾아가는 여정을 잘 보낸다면 좋겠습니다.

**민형:** "늘 긴장감이 감돌던 회의실에서 늦은 시간에 만나 느슨하게 글을 나누는 모임이 즐거웠습니다. 효율성이라든지 생산성이라든지. 그런 것들로부터 자유로운 시간을 보내면서 묘한 해방감을 느낄 때도 있었어요. 누군가에게 어떤 글을 내보인다는 게 꽤나 큰 용기를 필요로 하는 일이라고 생각하는데요, 선뜻 그리고 함께 용기를 내어주신 분들께 감사 인사드립니다."

**이준우:** 올해 가장 즐거웠던 순간을 꼽자면 엔키두 이야기를 쓸 때였어요. 취미라고 하기 민망할 정도로 소설을 쓰지 않았는데 Native를 기회로 다시 소설 쓰기의 즐거움에 푹 빠졌습니다. 앞으로 더 많은 글을 읽고 쓰고 싶다는 결심을 했답니다. Native에 오셔서 같이 써 봐요!

**김우성:** 누가 시킨 게 아닌, 내가 원하는 글을 써 보는 것이 굉장히 오랜만인 것 같습니다. 개인적인 이야기를 내어놓으려니 많이 부끄럽기도 하네요. 지루한 회사 생활에 글감을 떠올리고, 글을 쓰는 과정이 조금이나마 쉬어가는 공간이 된 것 같은데요, 글을 읽으시는 분들도 잠시 쉬어가면서 편하게 글을 읽으셨으면 좋겠습니다.

**Y(김진희):** 글을 쓸 당시로부터 두어 달 지난 지금 AI 지형이 또 무섭게 변했고, 그와 동시에 AI에 대한 제 생각 또한 미묘하게 달라지는 것을 느낍니다. 결국에는 빠르게 발전하는 세상 속에서 어떻게 중심을 잡느냐의 문제인 것 같아요. 특이점을 살아가는 인간 존재들 화이팅! (러다이트 운동 할 때 불러 주세요.)

**도재인:** 영영 고치거나 지울 수 없다는 게 두려워 오랫동안 망설였는데 제 글을 만질 수 있는 순간도 오네요. Native의 창간호에 참여할 수 있어 기쁩니다. 읽어주신 분들께도 감사합니다.
`}];function Me(e){return{id:e.id,title:e.title,author:e.author,part:e.part,contentHtml:Q.parse(e.md,{async:!1})}}function Ne(e){let t=$.find(t=>t.id===e);if(t)return Me(t)}function Pe(){let e=[],t=new Set;for(let n of $)t.has(n.part)||(t.add(n.part),e.push({name:n.part,posts:$.filter(e=>e.part===n.part).map(e=>({id:e.id,title:e.title,author:e.author,part:e.part,contentHtml:``}))}));return e}export{Ne as n,Pe as t};