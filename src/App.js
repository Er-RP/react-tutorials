import "./App.css";
import { StoryBookItems } from "./StoryBookItems";

const STORYBOOK_BASE_URL = "http://localhost:6006/?path=/story";

function App() {
  return (
    <>
      <h4 style={{ textAlign: "center" }}>StoryBook Demo</h4>
      <div className="App">
        {StoryBookItems.map((i, j) => (
          <div className="App" key={j}>
            <p>{i.title}</p>
            <a href={STORYBOOK_BASE_URL + i.url}>{i.component}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
