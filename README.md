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

## About the project

This project was built using the following technologies:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Tailwindcss](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [Axios](https://axios-http.com/)

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

When the user is logged out, the tokens will be erased from the local storage, and youll be redirected to the login form page once again.

## Tests

The project have two different test sessions. The first one are unit tests and the second one are e2e tests.

For the unit tests the following technollogies were used:

- [Vitest](https://www.vitest.com)
- [React Testing Library](https://testing-library.com/)

And for the e2e tests the following technologies were used:

-[Playwright](https://playwright.dev/)

### Unit tests coverage

- Profile Page
    - should render successfully
    - should load the user data

To run the unit tests use the following command:

```bash
npm run test
```

### E2E tests coverage

- Sign in
    - should sign in successfully
    - should not be able to sign in with wrong credentials

- Sign out
    - should logout successfully

To run the e2e tests use the following command:

```bash
npx playwright test --ui
```

This command will open the playwright ui interface, where you can run the tests.
