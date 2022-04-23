# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone and Run?
After Clone this project directory, you can install all Node modules and then run:
### `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### App Features

Using an existing Movie API (https://www.themoviedb.org/documentation/api) provided by
The Movie DB, create a website using React, Redux and SASS with the following
functionalities:
• Home Page
o Display all movies
o Include Sort options you think would fit best
o Search
• Details Page
o Title, summary, poster image, release date, director, language, cast, run time,
rating, similar movies, etc.
o Add the functionality to rate the movie (you can use any UI you wish for this)
• Stats Page ( Important )
o Using D3 charts create a simple bar chart for the top 10 rated movies with yaxis being 0 – 10 (rating) and x-axis being the top 10 movies.
o Since a Movie can have a rating of 9.0 but had only been rated 2 times, let’s
make the stats a little more helpful to the viewers by adding a secondary bar
chart below with the Vote / Rating Count. This means the y-axis will now
represent the total times a movie has been rated and the x-axis will again
represent the top 10 movies.
o Use loading animation for the bars and tooltips for both charts.
o Use appropriate heading, axis titles and legends for each.