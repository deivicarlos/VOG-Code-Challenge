
# VOG App Developers Code Challenge

This repository is a two-page react application React application for [VOG App Developers]. Eslint and Prettier are set and the syntax rules used wer Airbnb's. For the purpose of saving time the project was set up using [create-react-app].


### Features

#### Login Screen

This is a responsive Login Screen that connects to an API endpoint. The Login form was coded using redux-forms, the fields have validation and the button has an integrated spinner. API calls responses are shown with toastr messages at the bottom right corner.

<img src="https://i.imgur.com/hzSTPEb.png" width="100%">

#### Dashboard Screen
This screen is under a private route and will only be shown once the user has logged succesfully. The login accessToken is stored in the localStorage, and it is set as a default header for future API calls. A logout button was added, with and action that removes the accessToken  from localStorage. 

<img src="https://i.imgur.com/y5YSL3z.png" width="100%">


## Getting Started

### Installing
Clone the repo in your local box, then run:
```npm install```

### Starting the project
To start the project execute
```npm start```


## Architecture

### Tech Stack

I used the following technologies to make the App
- React
- Redux
- Redux Forms
- React Router
- SweetAlert2
- Axios
- History

And others.

### Design

I took some inspiration looking at Behance projects such as: 
- https://www.behance.net/gallery/48859839/Dashboard-Login-Signup-Page?tracking_source=search%257Clogin

The splash screen used in the Login screen belongs to Hack Capital on Unsplash:
- https://unsplash.com/photos/uv5_bsypFUM


### Styles

I used bootstrap for the most part as well as some custom styles.

### Component Organization

For the components, I grouped them by feature inside the features directory. Each feature has a Component folder as well as a Container one. I took this approach so it will be easier to add aditional containers and components related to a particular feature. Shared components were placed in the components folder.

### Directory organization 

```
./
├── LICENSE
├── README.md
├── public
├── src
├── .eslintrc.js
├── .prettierrc
└── package.json
```

The structure of the /src directory is as follows. 

```
./src
├── actions
├── components
├── constants
├── features
├── helpers
├── images
├── reducers
├── router
├── services
├── store
├── styles
└── utils
```
Details on the main parts of the App:
- `actions`: Redux store actions grouped by feature.
- `components`: Shared app components.
- `constants`: API and Actions constants.
- `features`: Components and the main logic of the application
- `helpers`: Common functions and tools used across the app 
- `reducers`: Reducers used on the redux store.
- `router`: react-router-dom public routes and private routes
- `services`: API calls grouped by feature.

[VOG App Developers]: (https://vogcalgaryappdeveloper.com/)
[create-react-app]: (https://github.com/facebook/create-react-app)

