export const config = {
  compatibility_flags: ["nodejs_compat"]
};

export default {
  fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  }
};
