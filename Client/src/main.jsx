import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BasketProvider from "./Context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
