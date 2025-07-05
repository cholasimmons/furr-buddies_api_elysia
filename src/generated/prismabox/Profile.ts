import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProfilePlain = t.Object(
  {
    id: t.String(),
    firstname: t.String(),
    lastname: t.String(),
    gender: t.Union(
      [t.Literal("MALE"), t.Literal("FEMALE"), t.Literal("OTHER")],
      { additionalProperties: false },
    ),
    dateOfBirth: t.Date(),
    idNumber: t.String(),
    idType: t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
      additionalProperties: false,
    }),
    userId: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ProfileRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String(),
        name: t.String(),
        email: t.String(),
        emailVerified: t.Boolean(),
        image: __nullable__(t.String()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
        twoFactorEnabled: __nullable__(t.Boolean()),
        role: __nullable__(t.String()),
        banned: __nullable__(t.Boolean()),
        banReason: __nullable__(t.String()),
        banExpires: __nullable__(t.Date()),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ProfilePlainInputCreate = t.Object(
  {
    firstname: t.String(),
    lastname: t.String(),
    gender: t.Union(
      [t.Literal("MALE"), t.Literal("FEMALE"), t.Literal("OTHER")],
      { additionalProperties: false },
    ),
    dateOfBirth: t.Date(),
    idNumber: t.String(),
    idType: t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
      additionalProperties: false,
    }),
  },
  { additionalProperties: false },
);

export const ProfilePlainInputUpdate = t.Object(
  {
    firstname: t.Optional(t.String()),
    lastname: t.Optional(t.String()),
    gender: t.Optional(
      t.Union([t.Literal("MALE"), t.Literal("FEMALE"), t.Literal("OTHER")], {
        additionalProperties: false,
      }),
    ),
    dateOfBirth: t.Optional(t.Date()),
    idNumber: t.Optional(t.String()),
    idType: t.Optional(
      t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
        additionalProperties: false,
      }),
    ),
  },
  { additionalProperties: false },
);

export const ProfileRelationsInputCreate = t.Object(
  {
    user: t.Object(
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

export const ProfileRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Object(
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

export const ProfileWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          firstname: t.String(),
          lastname: t.String(),
          gender: t.Union(
            [t.Literal("MALE"), t.Literal("FEMALE"), t.Literal("OTHER")],
            { additionalProperties: false },
          ),
          dateOfBirth: t.Date(),
          idNumber: t.String(),
          idType: t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
            additionalProperties: false,
          }),
          userId: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Profile" },
  ),
);

export const ProfileWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              idNumber: t.String(),
              userId: t.String(),
              id: t.Object({ id: t.String() }, { additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ idNumber: t.String() }),
            t.Object({ userId: t.String() }),
            t.Object({
              id: t.Object({ id: t.String() }, { additionalProperties: false }),
            }),
          ],
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
              firstname: t.String(),
              lastname: t.String(),
              gender: t.Union(
                [t.Literal("MALE"), t.Literal("FEMALE"), t.Literal("OTHER")],
                { additionalProperties: false },
              ),
              dateOfBirth: t.Date(),
              idNumber: t.String(),
              idType: t.Union([t.Literal("NRC"), t.Literal("PASSPORT")], {
                additionalProperties: false,
              }),
              userId: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Profile" },
);

export const ProfileSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      firstname: t.Boolean(),
      lastname: t.Boolean(),
      gender: t.Boolean(),
      dateOfBirth: t.Boolean(),
      idNumber: t.Boolean(),
      idType: t.Boolean(),
      userId: t.Boolean(),
      user: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProfileInclude = t.Partial(
  t.Object(
    {
      gender: t.Boolean(),
      idType: t.Boolean(),
      user: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProfileOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      firstname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lastname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dateOfBirth: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      idNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Profile = t.Composite([ProfilePlain, ProfileRelations], {
  additionalProperties: false,
});

export const ProfileInputCreate = t.Composite(
  [ProfilePlainInputCreate, ProfileRelationsInputCreate],
  { additionalProperties: false },
);

export const ProfileInputUpdate = t.Composite(
  [ProfilePlainInputUpdate, ProfileRelationsInputUpdate],
  { additionalProperties: false },
);
