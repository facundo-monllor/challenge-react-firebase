import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Responses } from "./views/Responses";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responses/:user" element={<Responses />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
