/* 운명의 아이들 SW — index는 네트워크 우선(BUILD 자동갱신 유지), 캐릭터/아이콘은 캐시 우선 */
const CACHE='unmyeong-v1';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin) return;
  const isStatic=/\/char\/|icon-|apple-touch|favicon|manifest/.test(url.pathname);
  if(isStatic){
    // 캐시 우선(이미지는 ?v=N으로 버전 관리되므로 안전)
    e.respondWith(caches.open(CACHE).then(c=>c.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok)c.put(e.request,res.clone());return res;}))));
  }else{
    // 네트워크 우선, 오프라인이면 캐시 폴백 → BUILD 자동갱신 로직 그대로 동작
    e.respondWith(fetch(e.request).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put(e.request,res.clone()));return res;}).catch(()=>caches.match(e.request)));
  }
});
