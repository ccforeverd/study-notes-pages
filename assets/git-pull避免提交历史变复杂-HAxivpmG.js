import{u as a,j as s}from"./index-DzJl3zh7.js";import{E as r}from"./EndOfFile-DBOaNciS.js";const h={authors:["[ccforeverd](mailto:zh1045456074@163.com)"],date:"2024-07-26",title:"Git pull 避免提交历史变复杂",description:"Git pull 使用 rebase 代替 merge"};function l(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsxs(i.header,{children:[s.jsxs(i.h1,{id:"git-pull-避免提交历史变复杂",children:["Git pull 避免提交历史变复杂",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-pull-避免提交历史变复杂",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),s.jsx(i.div,{"data-authors":!0})]}),`
`,s.jsx(i.div,{}),`
`,s.jsxs(i.p,{children:[s.jsx(i.code,{children:"git pull"})," 是 ",s.jsx(i.code,{children:"git fetch"})," 和 ",s.jsx(i.code,{children:"git merge"})," 的组合"]}),`
`,s.jsxs(i.h2,{id:"git-fetch",children:["git fetch",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-fetch",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[s.jsx(i.code,{children:"git fetch"})," 命令从远程仓库获取最新的代码到本地, 但不会自动合并代码"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fetch"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"remot"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"e"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"branc"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"h"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"})]})})}),`
`,s.jsx(i.p,{children:"示例: 从名为 origin 的远程仓库获取最新代码"}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fetch"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" origin"})]})})}),`
`,s.jsxs(i.h2,{id:"git-merge",children:["git merge",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-merge",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[s.jsx(i.code,{children:"git merge"})," 将另一个分支的更改合并到当前分支"]}),`
`,s.jsxs(i.p,{children:["通常在使用 ",s.jsx(i.code,{children:"git fetch"})," 获取了最新的远程更改后, 使用 ",s.jsx(i.code,{children:"git merge"})," 将这些更改合并到当前分支"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" merge"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"branc"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"h"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"})]})})}),`
`,s.jsxs(i.h2,{id:"git-pull-的过程发生了什么",children:[s.jsx(i.code,{children:"git pull"})," 的过程发生了什么",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-pull-的过程发生了什么",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"git fetch"})," 从云端拉取最新代码"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"git merge"})," 将云端代码与本地代码合并"]}),`
`]}),`
`,s.jsxs(i.h2,{id:"如何保证-git-历史的线性",children:["如何保证 ",s.jsx(i.code,{children:"git"})," 历史的线性",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#如何保证-git-历史的线性",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["非常简单, 我们只需要使用 ",s.jsx(i.code,{children:"rebase"})," (变基)命令即可"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rebase"})]})})}),`
`,s.jsxs(i.h2,{id:"自动变基",children:["自动变基",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#自动变基",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["我们可以配置 ",s.jsx(i.code,{children:"git"})," 使其在 ",s.jsx(i.code,{children:"pull"})," 时自动变基"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# git pull 默认使用变基操作"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" config"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --global"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull.rebase"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"})]})]})}),`
`,s.jsxs(i.p,{children:["如果你还是执意喜欢 ",s.jsx(i.code,{children:"merge"}),", 那么使用下面的命令"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# git pull默认使用合并操作"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" config"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --global"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull.rebase"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" false"})]})]})}),`
`,s.jsxs(i.h2,{id:"自动变基的问题",children:["自动变基的问题",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#自动变基的问题",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.strong,{children:"如果你本地文件有更改的话, 变基会失败, 因为变基前服务区必须是干净的"}),`
`,s.jsx(i.p,{children:"两个解决办法:"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"git pull"})," 前, 先使用 ",s.jsx(i.code,{children:"git commit"})," 暂存代码"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.code,{children:"git pull"})," 前, 先将使用 ",s.jsx(i.code,{children:"git stash"})," 将保存"]}),`
`]}),`
`,s.jsxs(i.h2,{id:"git-stash",children:["git stash",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-stash",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[s.jsx(i.code,{children:"git stash"})," 会将当前工作区的更改暂存起来, 以便你可以在之后的任何时候恢复"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 暂存当前工作区"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" stash"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 恢复暂存的工作区"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" stash"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pop"})]})]})}),`
`,s.jsxs(i.h2,{id:"git-pull-时冲突问题",children:[s.jsx(i.code,{children:"git pull"})," 时冲突问题",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-pull-时冲突问题",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["如果 ",s.jsx(i.code,{children:"git pull"})," 时发生冲突, 那么你需要手动解决冲突"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 查看冲突文件"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" status"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 手动解决冲突"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 解决完冲突后, 使用 git add 命令将文件标记为已解决"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"fil"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"e"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# 继续变基"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" rebase"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --continue"})]})]})}),`
`,s.jsx(r,{originLink:"https://mp.weixin.qq.com/s/n1KbNaT46SwVPCBxpW31ow",imgUrl:"https://images.unsplash.com/photo-1618056210931-39f730ebbf67?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})]})}function c(e={}){const{wrapper:i}={...a(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(l,{...e})}):l(e)}export{c as default,h as frontmatter};
