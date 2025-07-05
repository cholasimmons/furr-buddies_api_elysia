import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const OrgType = t.Union(
  [t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")],
  { additionalProperties: false },
);
