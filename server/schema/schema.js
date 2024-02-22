const graphql = require("graphql")
_ = require("lodash")

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList} = graphql

//Dummy Data
var books = [
    {id:"1", name:"IronMan", genre: "Sci-Fi", authorId: "1"},
    {id:"2", name:"Cindrella", genre: "Fantasy", authorId: "2"},
    {id:"3", name:"Finding Nemo", genre: "Fantasy", authorId: "3"},
    {id:"4", name:"Ra One", genre: "Sci Fi", authorId: "2"},
    {id:"5", name:"Goblin", genre: "Drama", authorId: "1"},
    {id:"6", name:"Five Pointer", genre: "Drama", authorId: "3"},
]

var authors = [
    {id:"1", name:"Nikhil G", age: 23},
    {id:"2", name:"Atharva K", age: 35},
    {id:"3", name:"Shubham D", age: 76},
]


//We will have two object types
//Books and Authors
//We also need to define relation between them and how to query data

//Creating Structure for Book
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({ //We ned to wrap all props of the obeject in function called fields
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},

        author: {
            type: AuthorType,
            resolve(parent, args){
                console.log(parent); //Here parent is Book
                return _.find(authors, {id: parent.authorId})
                //Return author details based on authorId
            }
        }
    })
})

//Creating structure for Author
const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: ()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},

        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                //I want to query all books written by this author
                return _.filter(books, {authorId: parent.id});
            }
        }
    })
})

//We need to define the entry point for user in using GraphQL query
//User can try to access Book via Id or the Author as well
//So we define the start points which user can pick, Book or Author based on what he wants to fetch
//To wrap these start points we define a Root Query

//Wrapping all defined structures above in RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}}, //When user tries to access a particular book, he must pass the Id along it
            resolve(parent, args){
                //Below code will fetch a book based on Id
                //Lodash helps in writing minimal code
                return _.find(books, {id: args.id});
            }
        },

        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id});
            }
        },

        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books;
            }
        },

        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return authors;
            }
        }

    }
})

//We need to export the schema 
//Exporting RootType to outer world, to access graphQL
module.exports = new GraphQLSchema({
    query: RootQuery
})