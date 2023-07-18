const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/app/immutable/entry/app.a158a8f1.js",
  a + "/app/immutable/assets/0.ca0e0025.css",
  a + "/app/immutable/nodes/0.1b6b25f2.js",
  a + "/app/immutable/nodes/1.cb8aa750.js",
  a + "/app/immutable/assets/2.971532cb.css",
  a + "/app/immutable/nodes/2.7f12f614.js",
  a + "/app/immutable/assets/3.fd2e7e0b.css",
  a + "/app/immutable/nodes/3.4ad5d2ce.js",
  a + "/app/immutable/nodes/4.824ceecd.js",
  a + "/app/immutable/nodes/5.90dc09f3.js",
  a + "/app/immutable/assets/Spinner.d9b647a8.css",
  a + "/app/immutable/chunks/Spinner.c154e812.js",
  a + "/app/immutable/chunks/each.d490452d.js",
  a + "/app/immutable/chunks/index.c79ec7ab.js",
  a + "/app/immutable/chunks/index.f0a0f8d2.js",
  a + "/app/immutable/chunks/scheduler.f620a928.js",
  a + "/app/immutable/chunks/singletons.fa9bc7a4.js",
  a + "/app/immutable/chunks/store.83c04e3c.js",
  a + "/app/immutable/entry/start.83f5f280.js"
], l = [
  a + "/kimigayo.mp3",
  a + "/kimigayo.opus",
  a + "/logo.svg",
  a + "/manifest.json",
  a + "/pwa-assets/apple-icon-180.png",
  a + "/pwa-assets/manifest-icon-192.maskable.png",
  a + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689675291179", i = `cache-${u}`, p = [
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
    const e = new URL(s.request.url), c = await caches.open(i);
    if (p.includes(e.pathname))
      return c.match(e.pathname);
    try {
      const n = await fetch(s.request);
      return n.status === 200 && c.put(s.request, n.clone()), n;
    } catch {
      return c.match(s.request);
    }
  }
  s.respondWith(t());
});
