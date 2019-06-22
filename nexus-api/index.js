const { queryType, stringArg, makeSchema } = require('nexus');
const { GraphQLServer } = require('graphql-yoga');

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: `${__dirname}/generated/schema.graphql`,
    typegen: `${__dirname}/generated/typings.ts`,
  },
});

const server = new GraphQLServer({
  schema,
});

server.start(() => 'Server is running on http://localhost:4000');
