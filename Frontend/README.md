After downloading the zip or cloning from Github, navigate into the project folder in terminal and run:
$ npm install

After intallation is complete, run:
$ npm start

Open localhost:3000


COMPONENTS FOLDER STRUCTURE:

  The src/Components directory holds two sub-directories:

  1. src/Components/Shared is a component library where reusable, dynamic components live. There should be no hardcoded state stored in these components. Information should be stored in the closest container component and then passed in with props.

  2. src/Components/Containers houses container components that store and pass information to shared components for them to render dynamically. Containers contain information and structure larger components using shared components.


CSS NAMING CONVENTIONS:

  For consistency with styling, I am using Block Element Modifier (http://getbem.com/). This is a css naming/styling convention. Here is an example which should give you the gist:

  JS file:


  return (
    <div className="ComponentName" id="someId">
      <h1 className="ComponentName__h1">Some content</h1>
      <p className="ComponentName__p">Some content</p>
      <a className="ComponentName__a">Some content</a>
    </div>
  )


  CSS file:

  .ComponentName {
    ...styles
  }

  .ComponentName__h1 {
    ...styles
  }

  .ComponentName__p {
    ...styles
  }

  .ComponentName__a {
    ...styles


1. All styling is assigned to classes. Not to id's nor to tags. This prevents naming and styling clashes.
2. The className of the outer-most element is the component name.
3. Elements that are nested within the outermost element are named ComponentName__tag.
  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
