# Rick and Morty Character Search

Hello, this is a basic Vue single-page application (SPA) designed to search the Rick and Morty API for specific characters and return their name, image, species, and status.

You can search for characters by name. Pages are limited to 20 results, and you can change pages using the buttons at the bottom of the search results. There's a 'clear' button to reset your search and some custom error handling for 404s. There's also some basic caching on the api requests.

## Development Choices

I've used Vue templates over JSX as it's less familiar to me, and I wanted to try something new.

Work was done on feature branches then merged into main via terminal (hence slightly messy commit history!). Would usually PR in for a communal project. See branches.

## Docs

Rick and Morty API docs: https://rickandmortyapi.com/

## Running Locally

To run the project locally, please follow these steps:

1. First, install the necessary dependencies by running the following command in your terminal:

```
npm install
```

2. Once the dependencies are installed, start the development server with the following command:

```
   npm run serve
```

3. Finally, open your web browser and navigate to [http://localhost:8080/](http://localhost:8080/) to access the app.

Enjoy!
