import{u as r,j as e}from"./index-DzJl3zh7.js";import{E as a}from"./EndOfFile-DBOaNciS.js";const t={authors:["[ccforeverd](mailto:zh1045456074@163.com)"],date:"2024-07-29",title:"删除本地和远程分支",description:"Git 命令删除本地和远程分支"};function i(n){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.header,{children:[e.jsxs(s.h1,{id:"删除本地和远程分支",children:["删除本地和远程分支",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#删除本地和远程分支",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.div,{"data-authors":!0})]}),`
`,e.jsx(s.div,{}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 删除本地分支"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" branch"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -d"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" localBranchName"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 删除远程分支"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" push"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" origin"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --delete"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" remoteBranchName"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 同步分支列表"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fetch"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -p"})]})]})}),`
`,e.jsxs(s.h2,{id:"删除本地分支",children:["删除本地分支",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#删除本地分支",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"切换到其它分支"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"git branch -d <branch>"})," 删除本地分支 (已合并到远程分支)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"git branch -D <branch>"})," 强制删除本地分支 (未推送或合并)"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"删除远程分支",children:["删除远程分支",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#删除远程分支",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"git push origin --delete <branch>"})," 删除远程分支"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"git push origin :<branch>"})," 删除远程分支 (等同于上一条命令)"]}),`
`,e.jsxs(s.li,{children:["以下报错表示分支已被删除或不存在",`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name'   "})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(a,{originLink:"https://www.freecodecamp.org/chinese/news/how-to-delete-a-git-branch-both-locally-and-remotely/",imgUrl:"https://images.unsplash.com/photo-1589908234698-8e38077ca1f0?q=80&w=2990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})]})}function c(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{c as default,t as frontmatter};
