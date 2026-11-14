import type { ZudokuBuildConfig } from "zudoku";

async function addLifeCycle({ schema }: { schema: any }) {
  const rawLifecycle = schema.info?.["x-lifecycle"];
  return rawLifecycle
    ? {
        ...schema,
        "x-lifecycle": rawLifecycle,
      }
    : schema;
}

const buildConfig: ZudokuBuildConfig = {
  processors: [addLifeCycle],
};

export default buildConfig;
