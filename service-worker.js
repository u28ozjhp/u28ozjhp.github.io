const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.ae0cf021.js",
  e + "/app/immutable/assets/0.1eaab022.css",
  e + "/app/immutable/nodes/0.6e17cf53.js",
  e + "/app/immutable/nodes/1.5c71e13f.js",
  e + "/app/immutable/assets/2.971532cb.css",
  e + "/app/immutable/nodes/2.15c8323f.js",
  e + "/app/immutable/assets/3.fd2e7e0b.css",
  e + "/app/immutable/nodes/3.4ad5d2ce.js",
  e + "/app/immutable/nodes/4.78901f05.js",
  e + "/app/immutable/nodes/5.d653e0d4.js",
  e + "/app/immutable/assets/Spinner.d9b647a8.css",
  e + "/app/immutable/chunks/Spinner.c154e812.js",
  e + "/app/immutable/chunks/each.d490452d.js",
  e + "/app/immutable/chunks/index.c79ec7ab.js",
  e + "/app/immutable/chunks/index.f0a0f8d2.js",
  e + "/app/immutable/chunks/scheduler.f620a928.js",
  e + "/app/immutable/chunks/singletons.6bdb5760.js",
  e + "/app/immutable/chunks/store.83c04e3c.js",
  e + "/app/immutable/chunks/stores.e6061ecb.js",
  e + "/app/immutable/entry/start.4f418e18.js"
], l = [
  e + "/kimigayo.mp3",
  e + "/kimigayo.opus",
  e + "/logo.svg",
  e + "/manifest.json",
  e + "/pwa-assets/apple-icon-180.png",
  e + "/pwa-assets/manifest-icon-192.maskable.png",
  e + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689690709693", i = `cache-${u}`, p = [
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
    const a = new URL(s.request.url), n = await caches.open(i);
    if (p.includes(a.pathname))
      return n.match(a.pathname);
    try {
      const c = await fetch(s.request);
      return c.status === 200 && n.put(s.request, c.clone()), c;
    } catch {
      return n.match(s.request);
    }
  }
  s.respondWith(t());
});
