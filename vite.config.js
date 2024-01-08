import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";

const reloadOnSave = {
  name: "full-reload-always",
  handleHotUpdate({ server }) {
    // by default, vite uses hmr which doesn't work well with imperative handles
    server.ws.send({ type: "full-reload" });
    return [];
  },
};

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [react(), wasm(), reloadOnSave],
  build: {
    target: "esnext",
  },
};

if ("REPOSITORY" in process.env) {
  config.base = `/${process.env.REPOSITORY}/`;
}

export default config;

