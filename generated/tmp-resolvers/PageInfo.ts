// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { PageInfoResolvers } from "../graphqlgen";

export const PageInfo: PageInfoResolvers.Type = {
  ...PageInfoResolvers.defaultResolvers,

  hasNextPage: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  hasPreviousPage: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
