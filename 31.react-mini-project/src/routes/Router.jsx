import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";

const Router = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default Router;
