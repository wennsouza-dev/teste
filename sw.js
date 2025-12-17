// MarcAI Service Worker minimalista
// Apenas para habilitar o critério "add to home screen"
const CACHE_NAME = 'marcai-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Estratégia Network-Only para garantir que o usuário sempre veja a versão mais recente
  // Isso evita problemas de cache (tela branca ou versão antiga) no Cloudflare/Supabase
  event.respondWith(fetch(event.request));
});