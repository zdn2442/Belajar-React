import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import User from "./pages/user";
import UserDetail from "./pages/userDetail";
import Error from "./pages/error";
import CreateUser from "./pages/createUser";
import UpdateUser from "./pages/updateUser";
import ProtectedRoute from "./routes/protectRoutes";
import Login from "./pages/auth/login";
import Artikel from './pages/article/index';
import CreateArtikel from './pages/article/createArticle';
import DetailArtikel from './pages/article/detailArticle'
import UpdateArtikel from './pages/article/updateArticle'

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">API Training</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:id/detail"
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel"
          element={
            <ProtectedRoute>
              <Artikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/createArtikel"
          element={
            <ProtectedRoute>
              <CreateArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/detailArtikel/:slug"
          element={
            <ProtectedRoute>
              <DetailArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/updateArtikel/:slug"
          element={
            <ProtectedRoute>
              <UpdateArtikel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
