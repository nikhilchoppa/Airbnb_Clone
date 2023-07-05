import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from './components/register/register';
import Signin from './components/signin/signin';
function App() {
  const [update, setUpdate] = useState("");
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;