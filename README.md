# Getting Started with React Routing

1. `npm install`
2. `npm start`

#### Nested Routing were done.

1. in `App.js` nested routes are wrapped inside parent route

2. `<Outlet />` from the **react-router-dom** used to render the nested routes.

3. Nested routes contents (JSX) are rendring in the place of outlet. All other components in the Parent route is shared across the nested route. Here `Navbar` in the `Home` page is shared across it's nested routes
