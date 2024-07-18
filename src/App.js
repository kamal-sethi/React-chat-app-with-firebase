import logo from "./logo.svg";
import "./App.css";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/details/Detail";

function App() {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
