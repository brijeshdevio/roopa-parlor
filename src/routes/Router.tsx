import { BaseLayout } from "@/layouts";
import { Home, Service } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
