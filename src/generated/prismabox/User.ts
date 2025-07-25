import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
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
);

export const UserRelations = t.Object(
  {
    sessions: t.Array(
      t.Object(
        {
          id: t.String(),
          expiresAt: t.Date(),
          token: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          ipAddress: __nullable__(t.String()),
          userAgent: __nullable__(t.String()),
          userId: t.String(),
          activeOrganizationId: __nullable__(t.String()),
          impersonatedBy: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    accounts: t.Array(
      t.Object(
        {
          id: t.String(),
          accountId: t.String(),
          providerId: t.String(),
          userId: t.String(),
          accessToken: __nullable__(t.String()),
          refreshToken: __nullable__(t.String()),
          idToken: __nullable__(t.String()),
          accessTokenExpiresAt: __nullable__(t.Date()),
          refreshTokenExpiresAt: __nullable__(t.Date()),
          scope: __nullable__(t.String()),
          password: __nullable__(t.String()),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    members: t.Array(
      t.Object(
        {
          id: t.String(),
          organizationId: t.String(),
          userId: t.String(),
          role: t.String(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    invitations: t.Array(
      t.Object(
        {
          id: t.String(),
          organizationId: t.String(),
          email: t.String(),
          role: __nullable__(t.String()),
          status: t.String(),
          expiresAt: t.Date(),
          inviterId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    twofactors: t.Array(
      t.Object(
        {
          id: t.String(),
          secret: t.String(),
          backupCodes: t.String(),
          userId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    profile: __nullable__(
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
  },
  { additionalProperties: false },
);

export const UserPlainInputCreate = t.Object(
  {
    name: t.String(),
    email: t.String(),
    emailVerified: t.Boolean(),
    image: t.Optional(__nullable__(t.String())),
    createdAt: t.Date(),
    updatedAt: t.Date(),
    twoFactorEnabled: t.Optional(__nullable__(t.Boolean())),
    role: t.Optional(__nullable__(t.String())),
    banned: t.Optional(__nullable__(t.Boolean())),
    banReason: t.Optional(__nullable__(t.String())),
    banExpires: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const UserPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    emailVerified: t.Optional(t.Boolean()),
    image: t.Optional(__nullable__(t.String())),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
    twoFactorEnabled: t.Optional(__nullable__(t.Boolean())),
    role: t.Optional(__nullable__(t.String())),
    banned: t.Optional(__nullable__(t.Boolean())),
    banReason: t.Optional(__nullable__(t.String())),
    banExpires: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const UserRelationsInputCreate = t.Object(
  {
    sessions: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    accounts: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    members: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    invitations: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    twofactors: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    profile: t.Optional(
      t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const UserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sessions: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      accounts: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      members: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      invitations: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      twofactors: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      profile: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          email: t.String(),
          emailVerified: t.Boolean(),
          image: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          twoFactorEnabled: t.Boolean(),
          role: t.String(),
          banned: t.Boolean(),
          banReason: t.String(),
          banExpires: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "User" },
  ),
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              email: t.String(),
              email: t.Object(
                { email: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ email: t.String() }),
            t.Object({
              email: t.Object(
                { email: t.String() },
                { additionalProperties: false },
              ),
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
              name: t.String(),
              email: t.String(),
              emailVerified: t.Boolean(),
              image: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              twoFactorEnabled: t.Boolean(),
              role: t.String(),
              banned: t.Boolean(),
              banReason: t.String(),
              banExpires: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "User" },
);

export const UserSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      email: t.Boolean(),
      emailVerified: t.Boolean(),
      image: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      sessions: t.Boolean(),
      accounts: t.Boolean(),
      members: t.Boolean(),
      invitations: t.Boolean(),
      twoFactorEnabled: t.Boolean(),
      twofactors: t.Boolean(),
      role: t.Boolean(),
      banned: t.Boolean(),
      banReason: t.Boolean(),
      banExpires: t.Boolean(),
      profile: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserInclude = t.Partial(
  t.Object(
    {
      sessions: t.Boolean(),
      accounts: t.Boolean(),
      members: t.Boolean(),
      invitations: t.Boolean(),
      twofactors: t.Boolean(),
      profile: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      emailVerified: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      twoFactorEnabled: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      role: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banned: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banReason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banExpires: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: false,
});

export const UserInputCreate = t.Composite(
  [UserPlainInputCreate, UserRelationsInputCreate],
  { additionalProperties: false },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInputUpdate, UserRelationsInputUpdate],
  { additionalProperties: false },
);
