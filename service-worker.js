const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/app/immutable/entry/app.b8f7c5fb.js",
  s + "/app/immutable/assets/0.945b41d9.css",
  s + "/app/immutable/nodes/0.dc513100.js",
  s + "/app/immutable/nodes/1.eb9d8006.js",
  s + "/app/immutable/assets/2.971532cb.css",
  s + "/app/immutable/nodes/2.9b714301.js",
  s + "/app/immutable/assets/3.fd2e7e0b.css",
  s + "/app/immutable/nodes/3.91a943f2.js",
  s + "/app/immutable/nodes/4.7e58ec11.js",
  s + "/app/immutable/assets/5.62101314.css",
  s + "/app/immutable/nodes/5.953686ad.js",
  s + "/app/immutable/assets/Spinner.d9b647a8.css",
  s + "/app/immutable/chunks/Spinner.854c52f8.js",
  s + "/app/immutable/chunks/each.7271e79e.js",
  s + "/app/immutable/chunks/index.506cce27.js",
  s + "/app/immutable/chunks/index.5fdc0ad9.js",
  s + "/app/immutable/chunks/scheduler.212c71d7.js",
  s + "/app/immutable/chunks/singletons.f5c325ce.js",
  s + "/app/immutable/chunks/store.a425e42c.js",
  s + "/app/immutable/chunks/stores.365a1986.js",
  s + "/app/immutable/entry/start.aa8a4c9e.js"
], l = [
  s + "/kimigayo.mp3",
  s + "/kimigayo.opus",
  s + "/logo.svg",
  s + "/manifest.json",
  s + "/pwa-assets/apple-icon-180.png",
  s + "/pwa-assets/manifest-icon-192.maskable.png",
  s + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689764842458", i = `cache-${u}`, p = [
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
