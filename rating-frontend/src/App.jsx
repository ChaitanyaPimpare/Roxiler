import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StoreList from "./pages/StoreList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stores" element={<StoreList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;