# B2BIT Project

This project was developed for an internship application process.

It's a login form with validation and a profile page displaying user data.

## Getting started

First, clone the project using the following command.

```bash
git clone https://github.com/AOBarbosa/b2bit-login-form.git
```

Then access the project file

```bash
cd b2bit-login-form
```

Now you just need to install the dependencies, and run the project.

```bash
npm i
npm run dev
```

## How the project works

In your browser youll need to access the '/sign-in' page to login. After that you will fill the form fields with the following credentials:

```json
{
    "email": "cliente@youdrive.com",
    "password": "password"
}
```

Once the form is submitted, the app will make a request for the api, and, if succeeds,  will generate a jwt token that will be stored in the local storage. Then, the token will be used to authenticate the user to the profile page. Finally, youll be redireted to the profile page.

In the profile page, youll find a card with the user information, and a Logout button in the page header.

When the user is logged out, the tokens will be erased from the local storage, and youll be redirected to the login form page.
