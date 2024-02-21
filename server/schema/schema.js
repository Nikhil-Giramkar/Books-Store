const graphql = require("graphql")

const {GraphQLObjectType, GraphQLString} = graphql
//We will have two object types
//Books and Authors
//We also need to define relation between them and how to query data

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({ //We ned to wrap all props of the obeject in function called fields
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})