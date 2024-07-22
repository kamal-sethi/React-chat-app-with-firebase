import logo from "./logo.svg";
import "./App.css";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/details/Detail";
import Login from "./components/login/Login";
import Notifications from "./components/notifications/Notifications";

function App() {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notifications />
    </div>
  );
}

export default App;
