# React + Electron (Decoupled)
This project uses <a href="https://www.npmjs.com/package/electron-serve" target="_blank">electron-serve</a> to create an electron app without a direct connection to the renderer code.<br/>
Both <b>backend</b> and <b>frontend</b>  are agnostic to each other, this means the frontend can be in React or in any other javascript bundle.

> <a href="https://www.electronforge.io/" target="_blank">Electron-forge</a> is used to package the application.

Electron server will just package any javascript inside the `backend/build` folder.


## Available Scripts

In the `backend` directory, you can run:

Start your application:<br/>
`npm start`

Package your application: (Dev)<br/>
`npm package` 

Make your application: (Prod)<br/>
`npm make` 

