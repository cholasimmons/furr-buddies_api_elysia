import { t } from "elysia"

export const ErrorSchema = t.Object({
  message: t.String({ default: "An error occurred" }),
  code: t.Number(),
  error: t.Optional(t.Nullable(t.String())),
  success: t.Boolean()
})

export const PaginationSchema = t.Object({
  page: t.Number(),
  limit: t.Number(),
  total: t.Number(),
  totalPages: t.Number()
})
