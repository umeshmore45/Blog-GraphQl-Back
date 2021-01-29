const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");
const { Blog } = require("../modles/blog");

const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    id: { type: GraphQLString },
    author: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

const RootType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    blogs: {
      type: new GraphQLList(BlogType),
      resolve(parent, args) {
        return Blog.find({});
      },
    },

    blog: {
      type: BlogType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log(args.id);
        return Blog.findOne({ id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootType,
});
