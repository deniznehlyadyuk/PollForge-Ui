import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import {Callback} from "./pages/auth";
import {Home} from "./pages/Home";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
