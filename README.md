# Node_easy_API

A simple API to perform crud (add, get, delete)A new Flutter project.

## Getting Started

This project is a starting point for a jobb application.

Email validation preforms locally by isEmailValid(), in validators/v1/validation.js.
To start the app, use command:

- $ nodemon app.js start.

Use these links, to test my app.

Add a person POST [http://localhost:8000/crud/](http://localhost:8000/crud/)

{
"email":"[exemple@ex.com](mailto:exemple@ex.com)",
"fName":"Mouayad Mouayad",
"lName":"Mouayad Mouayad"
}

GET all persons registered.
GET [http://localhost:8000/crud/](http://localhost:8000/crud/)

{}

Delete a person by email DELETE [http://localhost:8000/crud/](http://localhost:8000/crud/)
{"email":"[exemple@ex.com](mailto:exemple@ex.com)"}.

@ By Mouayad Mouayad.
