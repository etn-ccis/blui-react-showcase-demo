# React Showcase Demo

[![](https://img.shields.io/circleci/project/github/pxblue/react-showcase-demo/master.svg?style=flat)](https://circleci.com/gh/pxblue/react-showcase-demo/tree/master)

This applications is a demo applications that is used to demonstrate and test various PX Blue components, resources, etc.

It is used as a git submodule for:

-   [react-component-library](https://github.com/pxblue/react-component-library)
-   [themes](https://github.com/pxblue/themes)

It can also be run as a standalone application or used as a starting point for your own applications.

It includes:

-   PX Blue themes and typography
-   Material UI components
-   PX Blue components
-   Right-to-Left support

## To run the project
Clone the repository:
```
git clone https://github.com/pxblue/react-showcase-demo
```
Install the dependencies:
```
yarn install
```
or 
```
npm install
```
and run the start command:
```
yarn start
```
or
```
npm run start
```

## Contributors

If you make changes to this example, ensure that you update the submodule pointer in the component library and themes repositories (along with any others that use this demo).

```
git submodule update --remote
```
