import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import AuthLayout from "./layouts/AuthLayout.tsx";
import {Callback, Login} from "./pages/auth";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="auth/callback" element={<Callback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
