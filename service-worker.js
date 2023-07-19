const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/app/immutable/entry/app.e97b9924.js",
  s + "/app/immutable/assets/0.f402590a.css",
  s + "/app/immutable/nodes/0.b83d0a74.js",
  s + "/app/immutable/nodes/1.890f8c9e.js",
  s + "/app/immutable/assets/2.971532cb.css",
  s + "/app/immutable/nodes/2.6c63400b.js",
  s + "/app/immutable/assets/3.fd2e7e0b.css",
  s + "/app/immutable/nodes/3.91a943f2.js",
  s + "/app/immutable/nodes/4.7e58ec11.js",
  s + "/app/immutable/assets/5.dba156e9.css",
  s + "/app/immutable/nodes/5.fa15f659.js",
  s + "/app/immutable/assets/Spinner.d9b647a8.css",
  s + "/app/immutable/chunks/Spinner.854c52f8.js",
  s + "/app/immutable/chunks/each.7271e79e.js",
  s + "/app/immutable/chunks/index.506cce27.js",
  s + "/app/immutable/chunks/index.5fdc0ad9.js",
  s + "/app/immutable/chunks/scheduler.212c71d7.js",
  s + "/app/immutable/chunks/singletons.57a3967e.js",
  s + "/app/immutable/chunks/store.a425e42c.js",
  s + "/app/immutable/chunks/stores.3fcd5686.js",
  s + "/app/immutable/entry/start.c3777910.js"
], l = [
  s + "/kimigayo.mp3",
  s + "/kimigayo.opus",
  s + "/logo.svg",
  s + "/manifest.json",
  s + "/pwa-assets/apple-icon-180.png",
  s + "/pwa-assets/manifest-icon-192.maskable.png",
  s + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689777437913", i = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const e of await caches.keys())
      e !== i && await caches.delete(e);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), c = await caches.open(i);
    if (p.includes(e.pathname))
      return c.match(e.pathname);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(t());
});
