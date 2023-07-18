const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.ce4992ee.js",
  e + "/app/immutable/assets/0.ca0e0025.css",
  e + "/app/immutable/nodes/0.ba1c1c64.js",
  e + "/app/immutable/nodes/1.d7584670.js",
  e + "/app/immutable/assets/2.971532cb.css",
  e + "/app/immutable/nodes/2.7f12f614.js",
  e + "/app/immutable/assets/3.fd2e7e0b.css",
  e + "/app/immutable/nodes/3.4ad5d2ce.js",
  e + "/app/immutable/nodes/4.824ceecd.js",
  e + "/app/immutable/nodes/5.90dc09f3.js",
  e + "/app/immutable/assets/Spinner.d9b647a8.css",
  e + "/app/immutable/chunks/Spinner.c154e812.js",
  e + "/app/immutable/chunks/each.d490452d.js",
  e + "/app/immutable/chunks/index.c79ec7ab.js",
  e + "/app/immutable/chunks/index.f0a0f8d2.js",
  e + "/app/immutable/chunks/scheduler.f620a928.js",
  e + "/app/immutable/chunks/singletons.81e27388.js",
  e + "/app/immutable/chunks/store.83c04e3c.js",
  e + "/app/immutable/entry/start.fcec9852.js"
], l = [
  e + "/kimigayo.mp3",
  e + "/kimigayo.opus",
  e + "/logo.svg",
  e + "/manifest.json",
  e + "/pwa-assets/apple-icon-180.png",
  e + "/pwa-assets/manifest-icon-192.maskable.png",
  e + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689675680223", i = `cache-${u}`, p = [
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
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(a.request.url), c = await caches.open(i);
    if (p.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(t());
});
