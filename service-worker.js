const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/app/immutable/entry/app.49d956f8.js",
  s + "/app/immutable/assets/0.45520334.css",
  s + "/app/immutable/nodes/0.f7fb6c7b.js",
  s + "/app/immutable/nodes/1.43691e62.js",
  s + "/app/immutable/assets/2.971532cb.css",
  s + "/app/immutable/nodes/2.c4b376f9.js",
  s + "/app/immutable/assets/3.fd2e7e0b.css",
  s + "/app/immutable/nodes/3.fc745d8a.js",
  s + "/app/immutable/nodes/4.dc47b7bb.js",
  s + "/app/immutable/nodes/5.6166a206.js",
  s + "/app/immutable/assets/Spinner.d9b647a8.css",
  s + "/app/immutable/chunks/Spinner.83fce099.js",
  s + "/app/immutable/chunks/each.1a80d1c6.js",
  s + "/app/immutable/chunks/index.bbd4559d.js",
  s + "/app/immutable/chunks/index.c77a4116.js",
  s + "/app/immutable/chunks/scheduler.a1dc3b87.js",
  s + "/app/immutable/chunks/singletons.f5217869.js",
  s + "/app/immutable/chunks/store.f1b5e2f5.js",
  s + "/app/immutable/entry/start.00c413f2.js"
], l = [
  s + "/kimigayo.mp3",
  s + "/kimigayo.opus",
  s + "/logo.svg",
  s + "/manifest.json",
  s + "/pwa-assets/apple-icon-180.png",
  s + "/pwa-assets/manifest-icon-192.maskable.png",
  s + "/pwa-assets/manifest-icon-512.maskable.png"
], u = "1689686667851", i = `cache-${u}`, p = [
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
    const e = new URL(a.request.url), n = await caches.open(i);
    if (p.includes(e.pathname))
      return n.match(e.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(t());
});
