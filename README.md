# Hooks TODO

A simple todo app built using React Hooks.

## Background

The project template was created by [jacob-ebey](https://github.com/jacob-ebey/), and a few features were added by [Kevin Besenio](https://github.com/besenio/).

Project template: https://github.com/tastejs/todomvc/tree/master/examples/react-hooks
Original live demo (not live demo for this version): https://jacob-ebey.github.io/hooks-todo/

## Scripts For Running This Application

In the project directory, you can run:

### `npm install`

Will install all the dependencies needed for this project.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## New Features

### Search Todos

A search bar was implemented to easily find certain todos. Search letters or terms are not case sensitive. The list updates with each character typed, no need to press enter. Happy searching!

### Sort Todos Alphabetically

A sort button was integrated to arrange todos alphabetically by label/title, ultimately optimizing the search process. Complete tasks efficiently in an organized manner!

### Assign Todo

An assign todo feature was added to delegate tasks to hard working individuals. As a result, getting more done in a shorter amount of time. Just hover over the todo, enter the assignee's name, and click the assign todo button. The assignee name will appear next to the todo. Todos can get reassigned by following the same procedure. To unassign a todo, leave the input field blank and click the assign todo button. Leave no task left undone!

## What Makes This Updated Project Uniquely Mine?

At first implementation, the assign todo input field and button were in plain sight for every todo. This made the todo list section look cluttered and took the attention away from the actual todos. With some thought, the idea of having the input field and button hidden until hovered over came to mind. To achieve this, the onMouseEnter and onMouseLeave event handlers were utilized. As a result, this made the user interface more friendly and aesthetically pleasing.

With that said, a goal of mine when creating an application is to make the application as user friendly as possible, so that the user can focus on enjoying the app more than dreading it. I believe the minor tweaks in hiding the assign todo features until needed makes this project uniquely mine.

## Areas Of Improvement

A priority queue and sort can be implemented for users to have more weighted tasks appear at the top of the list, tackling the bigger assignments first. In addition, a drag and drop feature can help out with this improvement; and at the same time, making the application more interactive.

## Other Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm start`

Serves the production build from the "build" folder.

### `npm run deploy`

Creates and deploys a production build to github pages.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
