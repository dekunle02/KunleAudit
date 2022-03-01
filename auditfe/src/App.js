import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import SignInPage from "./pages/signin.page"
import MainLayout from "./pages/main.layout"
import DashboardPage from "./pages/app/dashboard.page"
import NotFoundPage from "./pages/not-found.page";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
