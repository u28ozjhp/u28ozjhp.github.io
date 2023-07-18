const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/app/immutable/entry/app.7f1dbf83.js",
  a + "/app/immutable/assets/0.1eaab022.css",
  a + "/app/immutable/nodes/0.16e5525e.js",
  a + "/app/immutable/nodes/1.14ab4ef7.js",
  a + "/app/immutable/assets/2.971532cb.css",
  a + "/app/immutable/nodes/2.15c8323f.js",
  a + "/app/immutable/assets/3.fd2e7e0b.css",
  a + "/app/immutable/nodes/3.4ad5d2ce.js",
  a + "/app/immutable/nodes/4.78901f05.js",
  a + "/app/immutable/nodes/5.d653e0d4.js",
  a + "/app/immutable/assets/Spinner.d9b647a8.css",
  a + "/app/immutable/chunks/Spinner.c154e812.js",
  a + "/app/immutable/chunks/each.d490452d.js",
  a + "/app/immutable/chunks/index.c79ec7ab.js",
  a + "/app/immutable/chunks/index.f0a0f8d2.js",
  a + "/app/immutable/chunks/scheduler.f620a928.js",
  a + "/app/immutable/chunks/singletons.c70d1015.js",
  a + "/app/immutable/chunks/store.83c04e3c.js",
  a + "/app/immutable/chunks/stores.9c717f8b.js",
  a + "/app/immutable/entry/start.5074255a.js"
], l = [
  a + "/kimigayo.mp3",
  a + "/kimigayo.opus",
  a + "/logo.svg",
  a + "/manifest.json",
  a + "/pwa-assets/apple-icon-180.png",
  a + "/pwa-assets/manifest-icon-192.maskable.png",
  a + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689691711765", i = `cache-${u}`, p = [
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
