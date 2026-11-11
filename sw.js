/* Dutco HR app — no data is cached here; it only shows a message when there is no internet */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode!=='navigate')return;
  e.respondWith(fetch(e.request).catch(()=>new Response('<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#001F69;color:#fff;font-family:Arial,sans-serif;text-align:center;padding:24px"><div><div style="font-size:40px;font-weight:900;background:#FDCC00;color:#001F69;width:64px;height:64px;line-height:64px;border-radius:14px;margin:0 auto 16px">D</div><h2>No internet connection</h2><p>Connect to Wi-Fi or mobile data, then open Dutco HR again.</p></div>',{headers:{'Content-Type':'text/html'}})));});
