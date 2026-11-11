

### Reflection: A short section in your README.md or in a separate REFLECTION.md file detailing:

   1.  The most challenging part of the project for you.

      One of the most challenging parts of this project was understanding how data flows between different pages and components. Fetching recipe categories, displaying recipes based on selected categories, retrieving individual recipe details, and connecting the search functionality to the API took some time to understand. Implementing custom hooks like `useFetch`, `useDebounce`, and `useLocalStorage` helped me better understand API requests, loading and error states, and data persistence. Managing favorite recipes across different pages using React Context was another learning experience. Working through these challenges helped me gain a better understanding of React hooks, component communication, and state management.


    2. A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).

     One important design decision I made was to create reusable custom hooks and components to keep the application organized and avoid repeating code. For example, I created a `useFetch` hook to handle API requests, loading, and error states across different pages. I also used React Context API with a custom `useLocalStorage` hook to manage favorite recipes globally and ensure they remain saved even after refreshing the browser. Additionally, I created reusable components like `RecipeCard`, `Spinner`, and `ErrorMessage` so they could be shared across multiple pages. This approach helped make the application more organized, maintainable, and easier to update.

### Recipe Discovery App

## Project Description

The Recipe Discovery App is a React-based web application that allows users to explore different recipe categories, search for recipes, view recipe details, and save their favorite recipes.

The application uses TheMealDB API to retrieve recipe information.

Features

Browse different recipe categories.

View recipes based on selected categories.

Search for recipes by name.

View recipe details, ingredients, and cooking instructions.

Add recipes to Favorites.

Remove recipes from Favorites.

Save favorite recipes using browser Local Storage.

Responsive navigation between pages.

Loading and error messages.

## Learning Outcomes

Through this project, I practiced:

Building reusable React components.

Managing state using React hooks.

Creating custom hooks.

Implementing routing and navigation.

Fetching data from an external API.

Managing shared state using React Context.

Persisting data using Local Storage.

Implementing debounced search functionality.

## Pending Tasks

To improve the stying and to make the the project user friendly