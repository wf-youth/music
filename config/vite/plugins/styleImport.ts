import styleImport, { VantResolve } from "vite-plugin-style-import";

export const StyleImportPlugin = () => {
  return styleImport({
    resolves: [VantResolve()],
  });
};
