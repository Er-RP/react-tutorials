# Getting started with StoryBook

```sh
npm run storybook
```

## Sorting and Renaming Stories

1. Add below code under _.storybook/preview.js_ to sort stories

```js
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
```

2.Add below line in bottom of _Input.Stories.js_

```js
Small.storyName = "Small renamed";
```
