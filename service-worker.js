const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/app/immutable/entry/app.12cdf03d.js",
  s + "/app/immutable/assets/0.66e5a1c1.css",
  s + "/app/immutable/nodes/0.9e4a5328.js",
  s + "/app/immutable/nodes/1.dbcd502c.js",
  s + "/app/immutable/assets/2.971532cb.css",
  s + "/app/immutable/nodes/2.e9cef8a0.js",
  s + "/app/immutable/assets/3.fd2e7e0b.css",
  s + "/app/immutable/nodes/3.91a943f2.js",
  s + "/app/immutable/nodes/4.7e58ec11.js",
  s + "/app/immutable/assets/5.1d709fce.css",
  s + "/app/immutable/nodes/5.141971cb.js",
  s + "/app/immutable/assets/Spinner.d9b647a8.css",
  s + "/app/immutable/chunks/Spinner.854c52f8.js",
  s + "/app/immutable/chunks/each.7271e79e.js",
  s + "/app/immutable/chunks/index.506cce27.js",
  s + "/app/immutable/chunks/index.5fdc0ad9.js",
  s + "/app/immutable/chunks/scheduler.212c71d7.js",
  s + "/app/immutable/chunks/singletons.198713c9.js",
  s + "/app/immutable/chunks/store.a425e42c.js",
  s + "/app/immutable/chunks/stores.1002a53f.js",
  s + "/app/immutable/entry/start.019fef29.js"
], l = [
  s + "/kimigayo.mp3",
  s + "/kimigayo.opus",
  s + "/logo.svg",
  s + "/manifest.json",
  s + "/pwa-assets/apple-icon-180.png",
  s + "/pwa-assets/manifest-icon-192.maskable.png",
  s + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689769855287", i = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== i && await caches.delete(a);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const a = new URL(e.request.url), c = await caches.open(i);
    if (p.includes(a.pathname))
      return c.match(a.pathname);
    try {
      const n = await fetch(e.request);
      return n.status === 200 && c.put(e.request, n.clone()), n;
    } catch {
      return c.match(e.request);
    }
  }
  e.respondWith(t());
});
