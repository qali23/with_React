import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import Ingredients from './pages/Ingredients';
import Actors from './pages/Actors';
import Films from './pages/Films';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "homepage",
    element: <Homepage/>,
  },
  {
    path: "ingredients",
    element: <Ingredients/>,
  },
  {
    path: "Actors",
    element: <Actors/>,
  },
  {
    path: "Films",
    element: <Films/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
