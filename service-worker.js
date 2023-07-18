const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.a1f4731f.js",
  a + "/_app/immutable/assets/0.ca0e0025.css",
  a + "/_app/immutable/nodes/0.0b7b95ef.js",
  a + "/_app/immutable/nodes/1.2d708320.js",
  a + "/_app/immutable/assets/2.971532cb.css",
  a + "/_app/immutable/nodes/2.ca2b6801.js",
  a + "/_app/immutable/assets/3.fd2e7e0b.css",
  a + "/_app/immutable/nodes/3.d70f48da.js",
  a + "/_app/immutable/nodes/4.42e216de.js",
  a + "/_app/immutable/nodes/5.493831ce.js",
  a + "/_app/immutable/assets/Spinner.d9b647a8.css",
  a + "/_app/immutable/chunks/Spinner.ef9dd60d.js",
  a + "/_app/immutable/chunks/each.d490452d.js",
  a + "/_app/immutable/chunks/index.c79ec7ab.js",
  a + "/_app/immutable/chunks/index.f0a0f8d2.js",
  a + "/_app/immutable/chunks/scheduler.f620a928.js",
  a + "/_app/immutable/chunks/singletons.e15498fc.js",
  a + "/_app/immutable/chunks/store.83c04e3c.js",
  a + "/_app/immutable/entry/start.f884b44f.js"
], l = [
  a + "/kimigayo.mp3",
  a + "/kimigayo.opus",
  a + "/logo.svg",
  a + "/manifest.json",
  a + "/pwa-assets/apple-icon-180.png",
  a + "/pwa-assets/manifest-icon-192.maskable.png",
  a + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689673743601", i = `cache-${u}`, p = [
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
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), n = await caches.open(i);
    if (p.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && n.put(e.request, c.clone()), c;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(t());
});
