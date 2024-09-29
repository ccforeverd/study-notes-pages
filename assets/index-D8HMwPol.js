import{a2 as Se,a3 as te,a4 as ke,a5 as Oe,a6 as pe,x as n,a7 as ve,a8 as G,a9 as re,aa as x,ab as P,ac as Ae,ad as Me,ae as i,af as Ie,ag as Re,ah as q,ai as Le,aj as _e,ak as ge,al as Ne}from"./index-DzJl3zh7.js";const he=Se.use||(a=>{if(a.status==="pending")throw a;if(a.status==="fulfilled")return a.value;throw a.status==="rejected"?a.reason:(a.status="pending",a.then(d=>{a.status="fulfilled",a.value=d},d=>{a.status="rejected",a.reason=d}),a)}),ee={dedupe:!0},ye=(a,d,u)=>{const{cache:v,compare:w,suspense:D,fallbackData:b,revalidateOnMount:E,revalidateIfStale:V,refreshInterval:C,refreshWhenHidden:R,refreshWhenOffline:M,keepPreviousData:K}=u,[I,Y,m,L]=Ae.get(v),[e,g]=ve(a),p=n.useRef(!1),h=n.useRef(!1),H=n.useRef(e),B=n.useRef(d),J=n.useRef(u),o=()=>J.current,Q=()=>o().isVisible()&&o().isOnline(),[A,X,Ce,Te]=Me(v,e),W=n.useRef({}).current,we=i(b)?u.fallback[e]:b,ne=(t,r)=>{for(const l in W){const s=l;if(s==="data"){if(!w(t[s],r[s])&&(!i(t[s])||!w(z,r[s])))return!1}else if(r[s]!==t[s])return!1}return!0},ae=n.useMemo(()=>{const t=!e||!d?!1:i(E)?o().isPaused()||D?!1:i(V)?!0:V:E,r=f=>{const k=G(f);return delete k._k,t?{isValidating:!0,isLoading:!0,...k}:k},l=A(),s=Te(),T=r(l),F=l===s?T:r(s);let c=T;return[()=>{const f=r(A());return ne(f,c)?(c.data=f.data,c.isLoading=f.isLoading,c.isValidating=f.isValidating,c.error=f.error,c):(c=f,f)},()=>F]},[v,e]),_=Ie.useSyncExternalStore(n.useCallback(t=>Ce(e,(r,l)=>{ne(l,r)||t()}),[v,e]),ae[0],ae[1]),se=!p.current,De=I[e]&&I[e].length>0,N=_.data,y=i(N)?we:N,j=_.error,ie=n.useRef(y),z=K?i(N)?ie.current:N:y,ue=De&&!i(j)?!1:se&&!i(E)?E:o().isPaused()?!1:D?i(y)?!1:V:i(y)||V,oe=!!(e&&d&&se&&ue),be=i(_.isValidating)?oe:_.isValidating,Ve=i(_.isLoading)?oe:_.isLoading,U=n.useCallback(async t=>{const r=B.current;if(!e||!r||h.current||o().isPaused())return!1;let l,s,T=!0;const F=t||{},c=!m[e]||!F.dedupe,f=()=>te?!h.current&&e===H.current&&p.current:e===H.current,k={isValidating:!1,isLoading:!1},le=()=>{X(k)},fe=()=>{const S=m[e];S&&S[1]===s&&delete m[e]},de={isValidating:!0};i(A().data)&&(de.isLoading=!0);try{if(c&&(X(de),u.loadingTimeout&&i(A().data)&&setTimeout(()=>{T&&f()&&o().onLoadingSlow(e,u)},u.loadingTimeout),m[e]=[r(g),re()]),[l,s]=m[e],l=await l,c&&setTimeout(fe,u.dedupingInterval),!m[e]||m[e][1]!==s)return c&&f()&&o().onDiscarded(e),!1;k.error=x;const S=Y[e];if(!i(S)&&(s<=S[0]||s<=S[1]||S[1]===0))return le(),c&&f()&&o().onDiscarded(e),!1;const O=A().data;k.data=w(O,l)?O:l,c&&f()&&o().onSuccess(l,e,u)}catch(S){fe();const O=o(),{shouldRetryOnError:Z}=O;O.isPaused()||(k.error=S,c&&f()&&(O.onError(S,e,O),(Z===!0||Re(Z)&&Z(S))&&(!o().revalidateOnFocus||!o().revalidateOnReconnect||Q())&&O.onErrorRetry(S,e,O,me=>{const $=I[e];$&&$[0]&&$[0](q.ERROR_REVALIDATE_EVENT,me)},{retryCount:(F.retryCount||0)+1,dedupe:!0})))}return T=!1,le(),!0},[e,v]),ce=n.useCallback((...t)=>Le(v,H.current,...t),[]);if(P(()=>{B.current=d,J.current=u,i(N)||(ie.current=N)}),P(()=>{if(!e)return;const t=U.bind(x,ee);let r=0;const s=_e(e,I,(T,F={})=>{if(T==q.FOCUS_EVENT){const c=Date.now();o().revalidateOnFocus&&c>r&&Q()&&(r=c+o().focusThrottleInterval,t())}else if(T==q.RECONNECT_EVENT)o().revalidateOnReconnect&&Q()&&t();else{if(T==q.MUTATE_EVENT)return U();if(T==q.ERROR_REVALIDATE_EVENT)return U(F)}});return h.current=!1,H.current=e,p.current=!0,X({_k:g}),ue&&(i(y)||ge?t():Ne(t)),()=>{h.current=!0,s()}},[e]),P(()=>{let t;function r(){const s=Re(C)?C(A().data):C;s&&t!==-1&&(t=setTimeout(l,s))}function l(){!A().error&&(R||o().isVisible())&&(M||o().isOnline())?U(ee).then(r):r()}return r(),()=>{t&&(clearTimeout(t),t=-1)}},[C,R,M,e]),n.useDebugValue(z),D&&i(y)&&e){if(!te&&ge)throw new Error("Fallback data is required when using suspense in SSR.");B.current=d,J.current=u,h.current=!1;const t=L[e];if(!i(t)){const r=ce(t);he(r)}if(i(j)){const r=U(ee);i(z)||(r.status="fulfilled",r.value=!0),he(r)}else throw j}return{mutate:ce,get data(){return W.data=!0,z},get error(){return W.error=!0,j},get isValidating(){return W.isValidating=!0,be},get isLoading(){return W.isLoading=!0,Ve}}},Fe=Oe(ye),Ee=te?a=>{a()}:Se.startTransition,xe=a=>{const[,d]=n.useState({}),u=n.useRef(!1),v=n.useRef(a),w=n.useRef({data:!1,error:!1,isValidating:!1}),D=n.useCallback(b=>{let E=!1;const V=v.current;for(const C in b){const R=C;V[R]!==b[R]&&(V[R]=b[R],w.current[R]&&(E=!0))}E&&!u.current&&d({})},[]);return P(()=>(u.current=!1,()=>{u.current=!0})),[v,w.current,D]},We=()=>(a,d,u={})=>{const{mutate:v}=pe(),w=n.useRef(a),D=n.useRef(d),b=n.useRef(u),E=n.useRef(0),[V,C,R]=xe({data:x,error:x,isMutating:!1}),M=V.current,K=n.useCallback(async(Y,m)=>{const[L,e]=ve(w.current);if(!D.current)throw new Error("Can’t trigger the mutation: missing fetcher.");if(!L)throw new Error("Can’t trigger the mutation: missing key.");const g=G(G({populateCache:!1,throwOnError:!0},b.current),m),p=re();E.current=p,R({isMutating:!0});try{const h=await v(L,D.current(e,{arg:Y}),G(g,{throwOnError:!0}));return E.current<=p&&(Ee(()=>R({data:h,isMutating:!1,error:void 0})),g.onSuccess==null||g.onSuccess.call(g,h,L,g)),h}catch(h){if(E.current<=p&&(Ee(()=>R({error:h,isMutating:!1})),g.onError==null||g.onError.call(g,h,L,g),g.throwOnError))throw h}},[]),I=n.useCallback(()=>{E.current=re(),R({data:x,error:x,isMutating:!1})},[]);return P(()=>{w.current=a,D.current=d,b.current=u}),{trigger:K,reset:I,get data(){return C.data=!0,M.data},get error(){return C.error=!0,M.error},get isMutating(){return C.isMutating=!0,M.isMutating}}},qe=ke(Fe,We);export{qe as u};
