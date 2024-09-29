import{u as l,j as s}from"./index-DzJl3zh7.js";import{E as r}from"./EndOfFile-DBOaNciS.js";const a={authors:["[ccforeverd](mailto:zh1045456074@163.com)"],date:"2024-08-08",title:"使用 SSH 来部署 Nest 服务",description:"通过 Github Actions + SSH 部署 Nest 服务"};function n(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsxs(i.header,{children:[s.jsxs(i.h1,{id:"使用-ssh-来部署-nest-服务",children:["使用 SSH 来部署 Nest 服务",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#使用-ssh-来部署-nest-服务",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),s.jsx(i.div,{"data-authors":!0})]}),`
`,s.jsx(i.div,{}),`
`,s.jsx(i.p,{children:"通过 Github Actions + SSH 部署 Nest 服务"}),`
`,s.jsxs(i.h2,{id:"github-action",children:["Github Action",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#github-action",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"修改-build-命令",children:["修改 ",s.jsx(i.code,{children:"build"})," 命令",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#修改-build-命令",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["在打包后, 将以下文件复制到 ",s.jsx(i.code,{children:"dist"})," 目录下:"]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsx(i.li,{children:s.jsx(i.code,{children:"package.json"})}),`
`,s.jsx(i.li,{children:s.jsx(i.code,{children:"tsconfig.json"})}),`
`,s.jsx(i.li,{children:s.jsx(i.code,{children:"nest-cli.json"})}),`
`,s.jsx(i.li,{children:s.jsx(i.code,{children:"../../.env"})}),`
`]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-diff",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"apps/nest-service/package.json","data-lang":"jsonc",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "scripts"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(i.span,{className:"line diff remove",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "build"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nest build"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,s.jsxs(i.span,{className:"line diff add",children:[s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "build"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nest build && cp package.json dist/package.json && cp tsconfig.json dist/tsconfig.json && cp nest-cli.json dist/nest-cli.json && cp ../../.env dist/.env.root"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(i.p,{children:["在 ",s.jsx(i.code,{children:"dist"})," 目录上传后, 再移出到指定位置"]}),`
`,s.jsxs(i.h3,{id:"上传-dist-目录",children:["上传 ",s.jsx(i.code,{children:"dist"})," 目录",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#上传-dist-目录",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["在之前的 ",s.jsxs(i.a,{href:"/%E6%96%87%E6%A1%A3/%E9%83%A8%E7%BD%B2nginx%E9%9D%99%E6%80%81%E6%9C%8D%E5%8A%A1",children:[s.jsx(i.code,{children:"Nginx"})," 静态服务"]})," 的 ",s.jsx(i.code,{children:"Github Actions"})," 后面, 添加如下步骤:"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":".github/workflows/deploy.yml","data-lang":"yaml",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"- "}),s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"name"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"Build Nest Service"})]}),`
`,s.jsxs(i.span,{className:"line focused",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"  run"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"pnpm build:nest"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"- "}),s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"name"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"Deploy Nest to Staging server"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"  uses"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"easingthemes/ssh-deploy@main"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"  with"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    SSH_PRIVATE_KEY"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"${{ secrets.TENCENT_CLOUD_SSH }}"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    ARGS"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'-rlgoDzvc -i'"})]}),`
`,s.jsxs(i.span,{className:"line focused",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    SOURCE"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'apps/nest-service/dist'"})]}),`
`,s.jsxs(i.span,{className:"line focused",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    TARGET"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'/usr/share/nginx/html/nest-service'"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    REMOTE_HOST"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"${{ secrets.TENCENT_CLOUD_IP }}"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    REMOTE_USER"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"${{ secrets.TENCENT_CLOUD_USER }}"})]}),`
`,s.jsxs(i.span,{className:"line focused",children:[s.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    SCRIPT_AFTER"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"|"})]}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      cd /usr/share/nginx/html/nest-service"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      mv -f ./dist/package.json ./package.json"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      mv -f ./dist/tsconfig.json ./tsconfig.json"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      mv -f ./dist/nest-cli.json ./nest-cli.json"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      mv -f ./dist/.env.root ../../.env"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      npm install"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      # pm2 restart nest-service # 后续添加 pm2 重启功能"})}),`
`,s.jsx(i.span,{className:"line focused",children:s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"      echo $RSYNC_STDOUT"})})]})}),`
`,s.jsxs(i.p,{children:["然后发起一次提交, 等待 ",s.jsx(i.code,{children:"Github Actions"})," 完成"]}),`
`,s.jsxs(i.h3,{id:"服务器配置",children:["服务器配置",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#服务器配置",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["登录到服务器, 进入 ",s.jsx(i.code,{children:"/usr/share/nginx/html/nest-service"})," 目录"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ls"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# dist  nest-cli.json  node_modules  package.json  package-lock.json  tsconfig.json"})})]})}),`
`,s.jsx(i.p,{children:"依次执行: (仅第一次启动)"}),`
`,s.jsxs(i.ol,{children:[`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["全局安装 ",s.jsx(i.code,{children:"nest"})," 和 ",s.jsx(i.code,{children:"pm2"}),": ",s.jsx(i.code,{children:"npm install -g @nestjs/cli pm2"})]}),`
`]}),`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["设置 ",s.jsx(i.code,{children:"pm2"})," 随系统启动: ",s.jsx(i.code,{children:"pm2 startup"})]}),`
`]}),`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["第一次启动服务: ",s.jsx(i.code,{children:"pm2 start dist/main.js --name nest-service"})]}),`
`]}),`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["编辑 ",s.jsx(i.code,{children:"nginx"})," 配置文件: ",s.jsx(i.code,{children:"vim /etc/nginx/nginx.conf"}),", 添加一个代理:"]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"添加代理","data-lang":"nginx",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"location"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" /api/ "}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    proxy_pass "}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"http://localhost:5210/;"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`]}),`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["重启 ",s.jsx(i.code,{children:"nginx"}),": ",s.jsx(i.code,{children:"systemctl restart nginx"})]}),`
`]}),`
`,s.jsxs(i.li,{children:[`
`,s.jsxs(i.p,{children:["在 ",s.jsx(i.code,{children:".github/workflows/deploy.yml"})," 中的 ",s.jsx(i.code,{children:"SCRIPT_AFTER"})," 中添加 ",s.jsx(i.code,{children:"pm2 restart nest-service"})," 重启服务"]}),`
`]}),`
`]}),`
`,s.jsxs(i.p,{children:["打开页面 ",s.jsx(i.a,{href:"/Nest/%E7%A4%BA%E4%BE%8B-%E5%AE%9E%E7%8E%B0%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5%E6%9F%A5%E8%AF%A2%E6%9C%8D%E5%8A%A1",children:"示例: 实现天气预报查询服务"}),", 查看接口是否可用"]}),`
`,s.jsx(r,{originLink:"https://github.com/marketplace/actions/ssh-deploy",imgUrl:"https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=3581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})]})}function h(e={}){const{wrapper:i}={...l(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{h as default,a as frontmatter};
