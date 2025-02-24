import { Route,Routes } from "react-router";

import Home from "./views/Home";
import Core from "./views/Core";
import Settings from "./views/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/core" element={<Core />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
