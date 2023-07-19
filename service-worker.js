const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.1741fcfa.js",
  e + "/app/immutable/assets/0.66e5a1c1.css",
  e + "/app/immutable/nodes/0.bec91150.js",
  e + "/app/immutable/nodes/1.4e8e2186.js",
  e + "/app/immutable/assets/2.971532cb.css",
  e + "/app/immutable/nodes/2.35e4ae44.js",
  e + "/app/immutable/assets/3.fd2e7e0b.css",
  e + "/app/immutable/nodes/3.91a943f2.js",
  e + "/app/immutable/nodes/4.7e58ec11.js",
  e + "/app/immutable/assets/5.1d709fce.css",
  e + "/app/immutable/nodes/5.141971cb.js",
  e + "/app/immutable/assets/Spinner.d9b647a8.css",
  e + "/app/immutable/chunks/Spinner.854c52f8.js",
  e + "/app/immutable/chunks/each.7271e79e.js",
  e + "/app/immutable/chunks/index.506cce27.js",
  e + "/app/immutable/chunks/index.5fdc0ad9.js",
  e + "/app/immutable/chunks/scheduler.212c71d7.js",
  e + "/app/immutable/chunks/singletons.65fe4765.js",
  e + "/app/immutable/chunks/store.a425e42c.js",
  e + "/app/immutable/chunks/stores.b0f38b57.js",
  e + "/app/immutable/entry/start.6e6f9b1a.js"
], l = [
  e + "/kimigayo.mp3",
  e + "/kimigayo.opus",
  e + "/logo.svg",
  e + "/manifest.json",
  e + "/pwa-assets/apple-icon-180.png",
  e + "/pwa-assets/manifest-icon-192.maskable.png",
  e + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689770564719", i = `cache-${u}`, p = [
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
    for (const a of await caches.keys())
      a !== i && await caches.delete(a);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const a = new URL(s.request.url), c = await caches.open(i);
    if (p.includes(a.pathname))
      return c.match(a.pathname);
    try {
      const n = await fetch(s.request);
      return n.status === 200 && c.put(s.request, n.clone()), n;
    } catch {
      return c.match(s.request);
    }
  }
  s.respondWith(t());
});
