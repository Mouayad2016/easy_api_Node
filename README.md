# Node_easy_API

A simple API to perform crud (add, get, delete) A Nodejs project.

## Getting Started

This project is a starting point for a job application and is a solution for the following request.

Etimo has been commissioned to develop a REST API for a customer's personnel register. Write one so well
solution as possible to show your technical knowledge. Make sure not to rush through
the task without showing what you can do it in the best way. Also keep in mind that you later in
the recruitment process must be able to explain and justify the solution you submitted.

### Features of this project.
- Node js API. 
- Framework Express.js.
- DB in this application is a Map().
- Protocol HTTP


Note that email validation preforms locally by isEmailValid(), in validators/v1/validation.js.
To start the app, use command:

- $ nodemon app.js start.

Use these links, to test my app.

###### Add a person POST [http://localhost:8000/crud/](http://localhost:8000/crud/)

Data to use:

{
"email":"[exemple@ex.com](mailto:exemple@ex.com)",
"fName":"Mouayad Mouayad",
"lName":"Mouayad Mouayad"
}

GET all persons registered.
aGET [http://localhost:8000/crud/](http://localhost:8000/crud/)

Data to use:
{}

Delete a person by email DELETE [http://localhost:8000/crud/](http://localhost:8000/crud/)

Data to use:

{"email":"[exemple@ex.com](mailto:exemple@ex.com)"}.

@ By Mouayad Mouayad.
