# Birthday Wish Notifier (Node.js)

Welcome to the Birthday Wish Notifier project built with Node.js! 🎉

## Overview

This application helps you send birthday wishes via email to contacts whose birthdays are stored in a MySQL database with the help of smtp protocol and its server.

## Features

- **Database Management**: Utilizes MySQL to store contacts information (id,name, email, birthdate).
- **Automated Email Notifications**: Sends birthday wishes to contacts on their special day using SMTP protocol.
- **Predefined Templates**: Predefined email templates for birthday wishes.

## Installation

**Create a new fork of the repository and clone it to your machine**

```bash
    git clone https://github.com/Udayl56/birthdaywish-sender-nodejs.git
```

**Change current Directory to**

```bash
   cd birthdaywish-sender-nodejs
```

**Install Necessary modules**

MySQL Package for Node.js:

```bash
   npm install mysql
```

SMTP Module for Node.js

```bash
   npm install nodemailer
```

**DataBase SetUp**

Create your database locolly or on cloud using mysql

```bash
CREATE TABLE tableName( contactid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,Name VARCHAR(255),Email VARCHAR(30), dateOfBirth date)
```

Insert records into table

```bash
INSERT INTO  tableNmae(Name,Email,dateOfBirth) VALUES ('contactName','contactmail.com ','yyyy-mm-dd')

// Ensure that the 'dateOfBirth' field is set to today's date format, such as '2000-12-27'. If today's date isn't set as a contact's birthday, the MySQL server won't find any contacts with birthdays today, causing no emails to be sent.
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST= DatabaseHostName`

`DB_USER= userName`

`DB_PASSWORD= ******`

`DB_Name= databaseName`

`SMTP_HOST= smtp.gmail.com`// your smtp server host name

`SMTP_USER= your_email@example.com`

`SMTP_PASSWORD= ******`

`SMTP_PORT= 587`

## Run the application

```bash
  npm start
```

or

```bash
  node app.js
```

## 🛠 Skills

Node js , Javascript

   
