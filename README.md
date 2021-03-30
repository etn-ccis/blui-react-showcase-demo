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

### Making changes as a submodule

When using this repository as a submodule, it can be treated as if you had checked out this repository directly. You can make changes in the submodule folder and commit them up to a branch in the same way you would if you checked out the repository on its own, e.g.:

```
cd folder/path/to/submodule
// make some changes
git checkout -b feature/my-feature-branch
git add -A
git commit -m "Made some changes to the submodule"
git push -u origin feature/my-feature-branch
```

You can then make a PR in this repository to merge your feature branch into the dev branch. Once the changes are merged into the dev branch, you'll want to make sure that any repositories that share this example are updated to get the latest changes (see below).

### Propogating changes to other projects

If you make changes to this example, ensure that you update the submodule pointer in the component library and themes repositories (along with any others that use this demo), e.g.:

```
git clone <parent_repository>
cd parent_repository
git submodule update --remote //this is the command to update the pointer
// Create a new branch and add/commit/push the updated pointer to the parent repository
```

Most parent repositories will have an NPM script to update the pointer.
