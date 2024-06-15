import Eight from "./components/Eight";
import Eleven from "./components/Eleven";
import Fifteen from "./components/Fifteen";
import Five from "./components/Five";
import Four from "./components/Four";
import Fourteen from "./components/Fourteen";
import Nine from "./components/Nine";
import One from "./components/One";
import Seven from "./components/Seven";
import Six from "./components/Six";
import Ten from "./components/Ten";
import Thirteen from "./components/Thirteen";
import Three from "./components/Three";
import Twelve from "./components/Twelve";
import Two from "./components/Two";

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Another Item",
    "Another item 2",
  ];
  return (
    <>
      <Fifteen items={items} />
    </>
  );
}

export default App;
