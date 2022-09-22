import { Route, Routes } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Olá</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/register" element={<div>Register</div>} />
    </Routes>
  );
};
