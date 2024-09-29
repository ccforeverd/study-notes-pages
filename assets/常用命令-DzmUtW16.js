import{u as l,j as s}from"./index-DzJl3zh7.js";import{E as r}from"./EndOfFile-DBOaNciS.js";const a={authors:["[ccforeverd](mailto:zh1045456074@163.com)"],date:"2024-08-10",title:"PM2 常用命令",description:"PM2 常用命令"};function i(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",span:"span",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.header,{children:[s.jsxs(e.h1,{id:"pm2-常用命令",children:["PM2 常用命令",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pm2-常用命令",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.div,{"data-authors":!0})]}),`
`,s.jsx(e.div,{}),`
`,s.jsxs(e.h2,{id:"准备工作",children:["准备工作",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#准备工作",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"npm i -g pm2"})," 安装 ",s.jsx(e.code,{children:"PM2"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 startup"})," 自动启动 ",s.jsx(e.code,{children:"PM2"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 save"})," 保存当前应用列表, 用于 ",s.jsx(e.code,{children:"PM2"})," 重启后自动加载应用列表"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 resurrect"})," 重新加载保存的应用列表"]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"npm install pm2@latest -g"})," 更新 ",s.jsx(e.code,{children:"PM2"})," 版本"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 update"})," 保存进程, 杀死并重启进程, 一般用于更新 ",s.jsx(e.code,{children:"PM2"})," 版本"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"启动应用",children:["启动应用",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#启动应用",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 start app.js"})," 启动 ",s.jsx(e.code,{children:"app.js"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 start app.json"})," 启动 ",s.jsx(e.code,{children:"app.json"}),", 多用于 ",s.jsx(e.code,{children:"monorepo"})," 项目",`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"app.json","data-lang":"json",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "apps"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "name"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"app"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "script"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"app.js"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:'pm2 start app.js --name="app"'})," 启动 ",s.jsx(e.code,{children:"app.js"})," 并命名为 ",s.jsx(e.code,{children:"app"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 start app.js --watch"})," 启动 ",s.jsx(e.code,{children:"app.js"})," 并监听文件变化, 当文件变化时, 会自动重启"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:'pm2 start app.js --watch --ignore-watch="node_modules"'})," 启动 ",s.jsx(e.code,{children:"app.js"})," 并监听文件变化, 但忽略 ",s.jsx(e.code,{children:"node_modules"})," 文件夹"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 start start.sh"})," 启动 ",s.jsx(e.code,{children:"start.sh"})," 脚本"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 ecosystem"})," 生成 ",s.jsx(e.code,{children:"ecosystem.config.js"})," 配置文件, 用于管理多个应用",`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"ecosystem.config.js","data-lang":"js",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"module"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"exports"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  apps : [{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    name: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"app"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    script: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"./app.js"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    env: {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      NODE_ENV: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"development"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    env_production: {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      NODE_ENV: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"production"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }, {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    name: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'worker'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    script: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'worker.js'"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 start ecosystem.config.js"})," 启动 ",s.jsx(e.code,{children:"ecosystem.config.js"})," 配置文件中的所有应用"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"查看应用",children:["查看应用",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#查看应用",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 list"})," 查看所有启动的应用列表"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 monit"})," 显示每个应用程序的CPU和内存占用情况"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 show [app-id/app-name]"})," 显示指定应用程序的所有信息"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"查看日志",children:["查看日志",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#查看日志",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 log"})," 显示应用程序的日志信息"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 log --lines 1000"})," 显示最后 1000 行日志信息"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 log [app-id/app-name]"})," 显示指定应用程序的日志信息"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 flush"})," 清空所有日志文件"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"重启应用",children:["重启应用",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#重启应用",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 stop all"})," 停止所有应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 stop [app-id/app-name]"})," 停止指定应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 restart all"})," 重启所有应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 restart [app-id/app-name]"})," 重启指定应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 delete all"})," 关闭并删除所有应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 delete [app-id/app-name]"})," 删除指定的应用程序"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pm2 reset [app-id/app-name]"})," 重置重启数量"]}),`
`]}),`
`,s.jsx(r,{originLink:"https://juejin.cn/post/7264921418810720271",imgUrl:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})]})}function h(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{h as default,a as frontmatter};
