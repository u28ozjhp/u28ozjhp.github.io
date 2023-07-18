const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/app/immutable/entry/app.f93d0c53.js",
  a + "/app/immutable/assets/0.45520334.css",
  a + "/app/immutable/nodes/0.6e473da6.js",
  a + "/app/immutable/nodes/1.d7e3d94c.js",
  a + "/app/immutable/assets/2.971532cb.css",
  a + "/app/immutable/nodes/2.c4b376f9.js",
  a + "/app/immutable/assets/3.fd2e7e0b.css",
  a + "/app/immutable/nodes/3.fc745d8a.js",
  a + "/app/immutable/nodes/4.dc47b7bb.js",
  a + "/app/immutable/nodes/5.6166a206.js",
  a + "/app/immutable/assets/Spinner.d9b647a8.css",
  a + "/app/immutable/chunks/Spinner.83fce099.js",
  a + "/app/immutable/chunks/each.1a80d1c6.js",
  a + "/app/immutable/chunks/index.bbd4559d.js",
  a + "/app/immutable/chunks/index.c77a4116.js",
  a + "/app/immutable/chunks/scheduler.a1dc3b87.js",
  a + "/app/immutable/chunks/singletons.3b26fd86.js",
  a + "/app/immutable/chunks/store.f1b5e2f5.js",
  a + "/app/immutable/entry/start.659b9aac.js"
], l = [
  a + "/kimigayo.mp3",
  a + "/kimigayo.opus",
  a + "/logo.svg",
  a + "/manifest.json",
  a + "/pwa-assets/apple-icon-180.png",
  a + "/pwa-assets/manifest-icon-192.maskable.png",
  a + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689687358308", i = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (s) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  s.waitUntil(t());
});
self.addEventListener("activate", (s) => {
  async function t() {
    for (const e of await caches.keys())
      e !== i && await caches.delete(e);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(s.request.url), n = await caches.open(i);
    if (p.includes(e.pathname))
      return n.match(e.pathname);
    try {
      const c = await fetch(s.request);
      return c.status === 200 && n.put(s.request, c.clone()), c;
    } catch {
      return n.match(s.request);
    }
  }
  s.respondWith(t());
});
