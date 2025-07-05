import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const IdType = t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
  additionalProperties: false,
});
