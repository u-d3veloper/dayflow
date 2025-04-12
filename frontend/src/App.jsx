import { Route,Routes } from "react-router";

import Home from "./views/Home";
import Core from "./views/Core";
import Settings from "./views/Settings";
import Import from "./views/Import";
import Tasks from "./views/Tasks";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/core" element={<Core />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/import" element={<Import/>}/>
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
