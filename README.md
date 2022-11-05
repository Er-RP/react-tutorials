## Adding redux

```sh
npm install @reduxjs/toolkit react-redux
```

## Creating store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

1. Initially we have empty reducer
2. Import **store and Provider** in _index.js_. Wrap _APP_ component with Provider.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./App/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Creating a Slice

```javascript
/* Slice is an collection of the reducer logic and actions for a single feature in app*/

import { createSlice } from "@reduxjs/toolkit";

/* Initial state of the counter */

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  /* reducers contains logics */
  reducers: {
    increment: (state) => (state.count += 1),
    decrement: (state) => (state.count -= 1),
    reset: (state) => (state.count = 0),
  },
});

/* actions */
export const { increment, decrement, reset } = counterSlice.actions;

/* reducers */

export default counterSlice.reducer;
```
