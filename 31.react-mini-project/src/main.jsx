import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";


import { WishlistProvider } from "./context/WishlistContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </BrowserRouter>
  </Provider>
);
