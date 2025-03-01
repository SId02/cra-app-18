
### Preview

    [Live Preview](https://cra-app-18.vercel.app/)  
	
# React JS with Vite

A modern React JS project setup using Vite for a faster and leaner development experience.

The new and recommended way to create React applications is by using Vite:

```
npm create vite@latest
```

Refer to the [Vite documentation](https://vite.dev/guide/) for more information.

## Creating React Apps: Traditional vs. Modern

### Old Way: Create React App (Deprecated)

```
npx create-react-app my-app
cd my-app
npm start
```

### Migrating from Create React App to Vite

If you have an existing Create React App project, here's how to migrate to Vite:

**Step One: Setting the Stage with Vite Installation**

Install Vite and React-related libraries as development dependencies:

```
npm install vite @vitejs/plugin-react --save-dev
npm uninstall react-scripts
```

**Step Two: Updating `package.json` for Vite Commands**

Modify the "scripts" section of your `package.json` file:

```
"scripts": {
  "start": "vite",
  "build": "vite build",
  "serve": "vite preview"
}
```

**Step Three: Renaming File Extensions**

Rename your file extensions  `.js` or `.ts` to `.jsx` or `.tsx`.

Refer to this guide for more detailed instructions: [How to Migrate Create React App to Vite](https://coreui.io/blog/how-to-migrate-create-react-app-to-vite/)

## React JS 18 with Vite

This project utilizes React JS version 18 along with other modern tools and libraries.

**Core Technologies:**

*   React JS (18.0.2 version)
*   Bulma CSS (0.9.4 version)
*   React Router DOM (Version 6)
*   Axios
*   Fetch API
*   React-i18next
*   i18next
*   Redux Toolkit


### Packages Installation

Install the necessary packages using npm:

```
npm install bulma
npm install axios
npm install react-router-dom
npm install i18next
npm install react-i18next
npm install @reduxjs/toolkit
npm install react-redux
```

### Icons

Free and open-source icons are used in this project.

*   [Bootstrap Icons](https://icons.getbootstrap.com/)
*   [Bulma](https://bulma.io/)
*   [Font Awesome](https://fontawesome.com)
*   [Feather Icons](https://feathericons.com/)

### API

The following APIs are used for demonstration purposes:

*   [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
*   [DummyJSON](https://dummyjson.com)

## Project List

This project contains a collection of small React projects:

*   Password Generator
*   Pagination
*   Counter
*   LoginPageWithDefault
*   Random Color Generator
*   Shop
*   Coin Exchange
*   Date Picker
*   Date Picker Max
*   Form Validation
*   Search
*   Select
*   Random Quotes
*   Age Validation
*   Leap Year Checker
*   LoginPageWithAPI
*   Currency Converter
*   Data Fetch
*   Github API
*   Typeahead
*   Tip Calculator
*   LightToDarkMode
*   Country Detail
*   Year Calculator
*   Toggle Password Visibility
*   Populate Data in table
*   Testimonial Slider
*   OTP Checker
```
