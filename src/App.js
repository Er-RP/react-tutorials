import { NavLink, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div>
      <div className="route_container">
        {routes.map((r, i) => (
          <NavLink
            to={r?.href}
            key={i}
            style={({ isActive }) => ({ opacity: isActive && 1 })}
          >
            {r?.name}
          </NavLink>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Counter title="counter" />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </div>
  );
}

export default App;
