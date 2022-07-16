# Getting started with StoryBook

1. `npx sb init`

2. Clear the stories folder inside src folder and create an componets folder and create **Button** folder inside it .

3. Create an `Button,js`,`Button.css`,`Button.stories.js` inside that folder.

#### Adding Button in storybook

_Add below code in Button.Stories.js_

```js
import Button from "./Button";

//Adding Default export
export default {
  title: "Button", //mandatory and unique , It will be shown in left side navigation panel of storybook
  component: Button, //Optional ,But highly recommended
};

//Adding Named export

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
```

```sh
npm run storybook
```
