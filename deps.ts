// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

// provide better logging, see src/log.ts
export * as log from "https://deno.land/x/branch@0.1.0/mod.ts";

// colors for a pretty cli
export {
  setColorEnabled,
  reset,
  bold,
  blue,
  green,
  yellow,
  italic,
  red,
  gray,
} from "https://deno.land/std@0.68.0/fmt/colors.ts";

// configuration reading
export {
  exists,
  existsSync,
  walk, // ... and one type of file monitoring
} from "https://deno.land/std@0.68.0/fs/mod.ts";

// configuration parsing (YAML)
export {
  JSON_SCHEMA,
  parse as parseYaml,
} from "https://deno.land/std@0.68.0/encoding/yaml.ts";

// file watching and directory matching
export {
  relative,
  dirname,
  extname,
  resolve,
  globToRegExp,
} from "https://deno.land/std@0.68.0/path/mod.ts";

// configuration parsing and writing (JSON)
export { readJson } from "https://deno.land/std@0.68.0/fs/read_json.ts";
export { writeJson } from "https://deno.land/std@0.68.0/fs/write_json.ts";

// event control
export { deferred, delay } from "https://deno.land/std@0.68.0/async/mod.ts";

// permission management
export { grant } from "https://deno.land/std@0.68.0/permissions/mod.ts";
