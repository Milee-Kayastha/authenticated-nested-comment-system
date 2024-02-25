// App.js
import React from "react";
import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { store } from "./store";
import { selectUser } from "./store/userSlice";
import Layout from "./components/Layout";

const App = () => {
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(clearUser());
  // };

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
