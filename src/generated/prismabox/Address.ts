import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AddressPlain = t.Object(
  {
    id: t.String(),
    number: t.String(),
    street: t.String(),
    city: t.String(),
    province: t.String(),
    orgId: t.String(),
  },
  { additionalProperties: false },
);

export const AddressRelations = t.Object(
  {
    organization: t.Object(
      {
        id: t.String(),
        name: t.String(),
        slug: __nullable__(t.String()),
        logo: __nullable__(t.String()),
        createdAt: t.Date(),
        metadata: __nullable__(t.String()),
        type: t.Union(
          [t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")],
          { additionalProperties: false },
        ),
        contactEmail: __nullable__(t.String()),
        phone: __nullable__(t.String()),
        licenseId: __nullable__(t.String()),
        services: __nullable__(t.Any()),
        isActive: t.Boolean(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const AddressPlainInputCreate = t.Object(
  {
    number: t.String(),
    street: t.String(),
    city: t.String(),
    province: t.String(),
  },
  { additionalProperties: false },
);

export const AddressPlainInputUpdate = t.Object(
  {
    number: t.Optional(t.String()),
    street: t.Optional(t.String()),
    city: t.Optional(t.String()),
    province: t.Optional(t.String()),
  },
  { additionalProperties: false },
);

export const AddressRelationsInputCreate = t.Object(
  {
    organization: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const AddressRelationsInputUpdate = t.Partial(
  t.Object(
    {
      organization: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const AddressWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          number: t.String(),
          street: t.String(),
          city: t.String(),
          province: t.String(),
          orgId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Address" },
  ),
);

export const AddressWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), orgId: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ orgId: t.String() })],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              number: t.String(),
              street: t.String(),
              city: t.String(),
              province: t.String(),
              orgId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Address" },
);

export const AddressSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      number: t.Boolean(),
      street: t.Boolean(),
      city: t.Boolean(),
      province: t.Boolean(),
      orgId: t.Boolean(),
      organization: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AddressInclude = t.Partial(
  t.Object(
    { organization: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const AddressOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      number: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      street: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      city: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      orgId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Address = t.Composite([AddressPlain, AddressRelations], {
  additionalProperties: false,
});

export const AddressInputCreate = t.Composite(
  [AddressPlainInputCreate, AddressRelationsInputCreate],
  { additionalProperties: false },
);

export const AddressInputUpdate = t.Composite(
  [AddressPlainInputUpdate, AddressRelationsInputUpdate],
  { additionalProperties: false },
);
