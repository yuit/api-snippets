export type ApiLifecycle = "development" | "staging" | "production";

const API_FILE_TO_PATHS: Record<string, string> = {
  "thirdparty-v2.0-admin-snippets.yaml": "/api-thirdparty/v2/admin",
  "thirdparty-v2.0-payment-initiation-snippets.yaml": "/api-thirdparty/v2/payment-initiation",
  "thirdparty-v1.0-openapi3-snippets.yaml": "/api-thirdparty/v1",
  "fspiop-rest-v1.1-openapi3-snippets.yaml": "/api-fspiop/v1",
  "fspiop-rest-v2.0-openapi3-snippets.yaml": "/api-fspiop/v2",
  "fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml": "/api-fspiop/v2/iso20022",
};

export const isApiLifecycle = (value: unknown): value is ApiLifecycle =>
  value === "development" || value === "staging" || value === "production";

const extractInfoLifecycle = (yamlContent: string): ApiLifecycle | undefined => {
  const lines = yamlContent.split(/\r?\n/);
  let inInfoBlock = false;

  for (const line of lines) {
    if (!inInfoBlock) {
      if (/^info:\s*(?:#.*)?$/.test(line)) {
        inInfoBlock = true;
      }
      continue;
    }

    // Stop when reaching the next top-level YAML key
    if (/^[^ \t#\r\n]/.test(line)) {
      break;
    }

    const match = line.match(
      /^[ \t]+x-lifecycle:[ \t]*["']?([a-zA-Z0-9_-]+)["']?[ \t]*(?:#.*)?$/,
    );
    if (match && isApiLifecycle(match[1])) {
      return match[1];
    }
  }

  return undefined;
};

const rawYamlFiles = import.meta.glob<string>("../apis/*.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const apiLifecycles: Record<string, ApiLifecycle | undefined> = Object.entries(
  rawYamlFiles,
).reduce<Record<string, ApiLifecycle | undefined>>((acc, [filePath, content]) => {
  const fileName = filePath.split("/").pop();
  const apiPath = fileName ? API_FILE_TO_PATHS[fileName] : undefined;
  if (!apiPath) return acc;

  const lifecycle = extractInfoLifecycle(content);
  if (lifecycle) {
    acc[apiPath] = lifecycle;
  }
  return acc;
}, {});

export const getApiLifecycle = (pathname: string): ApiLifecycle | undefined => {
  return apiLifecycles[pathname];
};
