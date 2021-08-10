# E-commerce Demo built with Bit components in React

The ecommerce socpe is made up of components from the base-ui scope and these componets are used to compose the store apps.

<img width="1124" alt="CleanShot 2021-08-10 at 23 26 40@2x" src="https://user-images.githubusercontent.com/13063165/128937364-5c814d60-7538-4e00-8571-31ad3020bae6.png">
Exported components can be seen [here](https://bit.dev/learn-bit-react/ecommerce)

<img width="1788" alt="CleanShot 2021-08-10 at 19 48 13@2x" src="https://user-images.githubusercontent.com/13063165/128909487-9f256996-d321-4fac-b5d6-836daa34bb4e.png">

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace

```bash
bit init
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.ecommerce/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)
