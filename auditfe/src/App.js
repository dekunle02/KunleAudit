import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import SignInPage from "./pages/signin.page"
import MainLayout from "./pages/main.layout"
import NotFoundPage from "./pages/not-found.page";

import HomePage from "./pages/app/home.page"
import ProjectsPage from "./pages/app/projects.page"
import TransactionsPage from "./pages/app/transactions.page"
import ClientsPage from "./pages/app/clients.page"


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="clients" element={<ClientsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
