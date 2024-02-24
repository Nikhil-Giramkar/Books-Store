# Books-via-GraphQL
<li>A simple book store which displays list of books.</li>
<li>Users can add new books and associate them with authors present in database.</li>
<li>On clicking any book, users can view details of current book, its author and all other books written by same author.</li>

## Tech Stack
<li>Frontend - React, Apollo Client</li>
<li>Backend - Nodejs, Express Js, GraphQL </li>
<li>Database - MongoDB Atlas </li>
<hr/>

# Preview
<h3>Fetching all books from DB via getBooks query in GraphQL</h3>

![Screenshot (217)](https://github.com/Nikhil-Giramkar/Books-Store/assets/58767494/7c58fee2-001d-4f0b-a5e7-f6b0d45504f3)

<hr/>

<h3>Populating list of authors from DB in Drop-down via getAuthors query in GraphQL & </h3>
<h3>Adding new Book to above list on clicking + button using addBookMutation in GraphQL in background</h3>

![Screenshot (218)](https://github.com/Nikhil-Giramkar/Books-Store/assets/58767494/9b36988c-4278-49de-84ed-2c667b0285c3)
<hr/>

<h3>Displaying book details, author name and all books by that author - all of this via single GraphQL query</h3>

![Screenshot (219)](https://github.com/Nikhil-Giramkar/Books-Store/assets/58767494/34df97ba-5914-43ce-a404-48361179bd1a)

<hr/>

# To build this app from Scratch
<li>Go through each commit history and Notes.txt added.</li>
<li>I have written detailed description in Notes.txt with every commit.</li>
<hr/>

# To run the application

Start the server
```
  cd server
  nodemon app.js
```

Start the client
```
  cd client
  npm run dev
```
