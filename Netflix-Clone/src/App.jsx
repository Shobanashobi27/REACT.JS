import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


