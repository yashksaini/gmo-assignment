import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Posts} path="/posts" />
        </Routes>
        <footer
          style={{
            display: "flex",
            width: "100%",
            padding: "24px 12px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f1f1f1",
            fontSize: "14px",
            marginTop: "24px",
          }}
        >
          Developed by Yash Kumar Saini
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
