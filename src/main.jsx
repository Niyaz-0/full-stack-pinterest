import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./routes/Homepage";
import CreatePinpage from "./routes/CreatePinpage";
import Postpage from "./routes/Postpage";
import Authpage from "./routes/Authpage";
import Profilepage from "./routes/Profilepage";
import Searchpage from "./routes/Searchpage";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainlayout from "./routes/layouts/Mainlayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePinpage />} />
          <Route path="/pin/:id" element={<Postpage />} />
          <Route path="/:username" element={<Profilepage />} />
          <Route path="/search" element={<Searchpage />} />
        </Route>
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
