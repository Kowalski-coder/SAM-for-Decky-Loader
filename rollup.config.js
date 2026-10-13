import deckyPlugin from "@decky/rollup";
import { defineConfig } from "rollup";

export default defineConfig((options) => {
  return deckyPlugin(options);
});
