// Standalone shim — replaces Base44 platform SDK for Vercel/standalone builds

const noop = async () => null;
const noopList = async () => [];

function makeEntity() {
  return {
    list: noopList,
    filter: noopList,
    get: noop,
    create: noop,
    update: noop,
    delete: noop,
    schema: async () => ({}),
  };
}

// Pre-define all entities used in this app
const entities = {
  Product: makeEntity(),
  Order: makeEntity(),
  User: makeEntity(),
};

// Proxy so any entity name works without crashing
const entitiesProxy = new Proxy(entities, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return makeEntity();
  },
});

export const base44 = {
  auth: {
    me: noop,
    isAuthenticated: async () => false,
    logout: (url) => { window.location.href = url || '/'; },
    redirectToLogin: () => {},
    updateMe: noop,
  },
  entities: entitiesProxy,
  integrations: {
    Core: {
      InvokeLLM: noop,
      SendEmail: noop,
      UploadFile: noop,
      GenerateImage: noop,
      ExtractDataFromUploadedFile: noop,
    },
  },
  functions: { invoke: noop },
  analytics: { track: () => {} },
};