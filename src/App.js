import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div>
      <div className="route_container">
        {routes.map((r, i) => (
          <Link to={r?.href} key={i}>
            {r?.name}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
