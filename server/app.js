const express = require("express");

const {graphqlHTTP} = require("express-graphql")

const app = express();

//We will use graphql by adding it as a middleware at a route
//The below code will trigger graphqlHTTP() with options when someone hits /graphql route
app.use("/graphql", graphqlHTTP({

}));

app.listen(4000, ()=>{
    console.log("Listening at http://localhost:4000");
})