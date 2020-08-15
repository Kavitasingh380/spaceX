
**npm install**  
**npm start**                      // start dev app at [localhost:5000](http://localhost:5000)  

## BUILDING APP
**npm run build**

```
.
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── dist                     # Builded App with all Files needed for running on browser.
├── public                   # favicon.ico humans.txt robots.txt files.
│   ├── humans.txt           # File that kept for description like developers list who contributed etc App etc
│   └── robots.txt           # Text file tells search engines what to index and what to leave.
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── assets               # All Images to be kept here
│   ├── components           # All Dumb Components here
│   ├── config               # project general environment dependent config
│   │   ├── development      # development config
│   │   ├── index            # index converging config
│   │   └── production       # production config
│   ├── modules              # Reusable Container Components
│   │   └── spaceX            # Dumb SpaceX
│   │   
│   ├── redux                # Reducers and action for each module inside this dir
│   │   ├── auth             # Container for module wise actions & reducer
│   │   │   ├── actions      # Module wise actions
│   │   │   └── reducers     # Module wise reducer
│   │   ├── actions.js       # Actions are defined here that are being imported to dispatch any api call & response
│   │   ├── constants.js     # Defines constants for the actions
│   │   ├── reducers.js      # Imports all reducers of diffrent modules and combine it
│   │   └── update.js        # Manual commands defined to update the reducers
│   ├── routes               # App routes
│   ├── services             # firing Api
│   ├── styles               # Application-wide styles (generally settings)
│   │   ├── main.scss        # Imports all scss form the diffrent module wise scss
│   │   └── auth             # Contains scss for the respective modules
│   ├── main.js              # Application bootstrap, routes and rendering
│   └── index.html           # Project's html file
├── project.config.js        # project build and development config
├── package.json             # Project's package.json file
│
:
```

