import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const OrganizationPlain = t.Object(
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
);

export const OrganizationRelations = t.Object(
  {
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
    address: __nullable__(
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
  },
  { additionalProperties: false },
);

export const OrganizationPlainInputCreate = t.Object(
  {
    name: t.String(),
    slug: t.Optional(__nullable__(t.String())),
    logo: t.Optional(__nullable__(t.String())),
    createdAt: t.Date(),
    metadata: t.Optional(__nullable__(t.String())),
    type: t.Union(
      [t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")],
      { additionalProperties: false },
    ),
    contactEmail: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    services: t.Optional(__nullable__(t.Any())),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const OrganizationPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    slug: t.Optional(__nullable__(t.String())),
    logo: t.Optional(__nullable__(t.String())),
    createdAt: t.Optional(t.Date()),
    metadata: t.Optional(__nullable__(t.String())),
    type: t.Optional(
      t.Union([t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")], {
        additionalProperties: false,
      }),
    ),
    contactEmail: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    services: t.Optional(__nullable__(t.Any())),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const OrganizationRelationsInputCreate = t.Object(
  {
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
    address: t.Optional(
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

export const OrganizationRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
      address: t.Partial(
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

export const OrganizationWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          slug: t.String(),
          logo: t.String(),
          createdAt: t.Date(),
          metadata: t.String(),
          type: t.Union(
            [t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")],
            { additionalProperties: false },
          ),
          contactEmail: t.String(),
          phone: t.String(),
          licenseId: t.String(),
          services: t.Any(),
          isActive: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "Organization" },
  ),
);

export const OrganizationWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              slug: t.String(),
              slug: t.Object(
                { slug: t.String() },
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
            t.Object({ slug: t.String() }),
            t.Object({
              slug: t.Object(
                { slug: t.String() },
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
              slug: t.String(),
              logo: t.String(),
              createdAt: t.Date(),
              metadata: t.String(),
              type: t.Union(
                [t.Literal("CLINIC"), t.Literal("STORE"), t.Literal("SHELTER")],
                { additionalProperties: false },
              ),
              contactEmail: t.String(),
              phone: t.String(),
              licenseId: t.String(),
              services: t.Any(),
              isActive: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Organization" },
);

export const OrganizationSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      slug: t.Boolean(),
      logo: t.Boolean(),
      createdAt: t.Boolean(),
      metadata: t.Boolean(),
      members: t.Boolean(),
      invitations: t.Boolean(),
      type: t.Boolean(),
      address: t.Boolean(),
      contactEmail: t.Boolean(),
      phone: t.Boolean(),
      licenseId: t.Boolean(),
      services: t.Boolean(),
      isActive: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const OrganizationInclude = t.Partial(
  t.Object(
    {
      members: t.Boolean(),
      invitations: t.Boolean(),
      type: t.Boolean(),
      address: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const OrganizationOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      slug: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      logo: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contactEmail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      licenseId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      services: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isActive: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Organization = t.Composite(
  [OrganizationPlain, OrganizationRelations],
  { additionalProperties: false },
);

export const OrganizationInputCreate = t.Composite(
  [OrganizationPlainInputCreate, OrganizationRelationsInputCreate],
  { additionalProperties: false },
);

export const OrganizationInputUpdate = t.Composite(
  [OrganizationPlainInputUpdate, OrganizationRelationsInputUpdate],
  { additionalProperties: false },
);
