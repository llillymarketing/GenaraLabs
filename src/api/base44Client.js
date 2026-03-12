// Standalone shim — replaces Base44 platform SDK for Vercel/standalone builds
// Auth, entity reads, and integrations are stubbed to prevent build errors.

const noopAsync = async () => null;

const entityProxy = () => ({
  list: async () => [],
  filter: async () => [],
  get: noopAsync,
  create: noopAsync,
  update: noopAsync,
  delete: noopAsync,
});

export const base44 = {
  auth: {
    me: noopAsync,
    isAuthenticated: async () => false,
    logout: (url) => { if (url) window.location.href = url; else window.location.reload(); },
    redirectToLogin: (next) => { console.warn('Auth not configured for standalone build.'); },
    updateMe: noopAsync,
  },
  entities: new Proxy({}, {
    get: (_, name) => entityProxy(name),
  }),
  integrations: {
    Core: {
      InvokeLLM: noopAsync,
      SendEmail: noopAsync,
      UploadFile: noopAsync,
      GenerateImage: noopAsync,
      ExtractDataFromUploadedFile: noopAsync,
    },
  },
  functions: {
    invoke: noopAsync,
  },
};