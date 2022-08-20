## Project Choice (Tell us which project you're doing!)
>Spentrace

## This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.
> Include:<br />
> General App Idea/Purpose<br />

I myself have a hard time managing my money and I usually spend time just to get track of it. This app might help me and other people to manage their money better <br />

> Models including field names and their datatypes<br />
- Date: Date
- Amount: Number
- Name: String
- Expense: Boolean
- Notes: String

> A list of routes: <br />

| Verb        | URL           | Action  | Description |
|:---------:|:----------:|:-------:|:--------:|
| Get          | /plan          | index   | Show all income and expenses
| Get          | /plan/new  | new     | Show new form
| POST       | /plan         | create  | Create a new income/expense
| GET         | /plan/:id    | show    | Show income/expense with id and delete form
| GET         | /plan/:id/edit | edit  | Show edit form for entry with :id
| PUT         | /plan/:id/   | update | Update entry with :id
| DELETE   | /plan/:id/delete | destroy | Delete entry with :id


## Wireframes

### Main Page
![image](https://media.git.generalassemb.ly/user/43518/files/8b1fa197-cd42-4094-845c-fb45f73b06a1)

### Menu Button
![image](https://media.git.generalassemb.ly/user/43518/files/5a06464d-9f97-463f-ab51-e6f816cbc261)

### New Entry Page
![image](https://media.git.generalassemb.ly/user/43518/files/ee21a3b1-8b13-4b30-8aaa-24a8a48ae3dd)



## User Stories
> User stories detailing app functionality<br />
- As a user, I want to be able to create an entry and add an amount, so that it will show up on the list.
- As a user, I want to be able to toggle an entry, so I can change it from expense or income.
- As a user, I want to be able to edit an entry, so I can change the value to be updated.
- As a user, I want to be able to delete an entry, so I can correct any incorrect entry.
- As a user, I want to be able to clear all entry, so I can start from a clean data.


### MVP Goals
- A working full-stack application, using Node.js, Mongoose, Express and EJS
- Adhere to the MVC file structure: Models, Views, Controllers
- One model with all 7 RESTful routes and full CRUD.
- Be deployed online and accessible to the public via Heroku
- App can show total earnings and expenses
- App can show projected income needed for incoming expense/s


### Stretch Goals
- Include sign up/log in functionality, with encrypted passwords & an authorization flow
- Add a second model that will make the app entries exclusive to each user only.
- Use EJS Partials
- Use a CSS framework
- App can be able to sort by date, amount, by expenses or by earnings

### Additional Stretch Goals / Future Implementation
- Add Calendar View
