import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import SignInPage from "./pages/signin.page"
import SignOut from "./pages/signout.page"
import MainLayout from "./pages/main.layout"
import NotFoundPage from "./pages/not-found.page";

import HomePage from "./pages/home.page"

import ProjectsLayout from "./pages/projects/projects-layout"
import ProjectsIndex from "./pages/projects/projects-index.page";
import ProjectDetail from "./pages/projects/projects-detail.page"
import ProjectAdd from "./pages/projects/projects-add.page"

import ClientsLayout from "./pages/clients/clients-layout";
import ClientsIndex from "./pages/clients/clients-index.page"
import ClientsDetail from "./pages/clients/clients-detail.page"

import TransactionsLayout from "./pages/transactions/transactions-layout"
import TransactionsIndex from "./pages/transactions/transactions-index.page";
import TransactionsDetail from "./pages/transactions/transactions-detail.page"


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsIndex />} />
            <Route path=":projectId" element={<ProjectDetail />} />
            <Route path="new" element={<ProjectAdd />} />
          </Route>

          <Route path="clients" element={<ClientsLayout />}>
            <Route index element={<ClientsIndex />} />
            <Route path=":clientId" element={<ClientsDetail />} />
          </Route>

          <Route path="transactions" element={<TransactionsLayout />}>
            <Route index element={<TransactionsIndex />} />
            <Route path=":transactionId" element={<TransactionsDetail />} />
          </Route>
          
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
