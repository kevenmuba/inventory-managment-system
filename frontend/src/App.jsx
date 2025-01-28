import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import "./App.css";
import Dashboard from "./screens/Dashboard.jsx";
import Layout from "./Layout/Layout.jsx";
import RegisterScreen from "./screens/userScreens/RegisterScreen.jsx";
import LoginScreen from "./screens/userScreens/LoginScreen.jsx";
import Warehouse from "./screens/productScreens/Warehouse.jsx";
import AuthUser from "./components/AuthUser.jsx";
import ProductDetails from "./screens/productScreens/ProductDetails.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import RequisitionType from "./screens/productScreens/RequisitionType.jsx";
import PurchaseRequisition from "./screens/productScreens/PurchaseRequisition.jsx";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />

      <Route
        path="/*"
        exact
        element={
          <AuthUser>
            <Layout>
              <Dashboard />
            </Layout>
          </AuthUser>
        }
      />

      <Route
        path="/warehouse"
        exact
        element={
          <AuthUser>
            <Layout>
              <Warehouse />
            </Layout>
          </AuthUser>
        }
      />

      <Route
        path="/product/:id"
        exact
        element={
          <AuthUser>
            <Layout>
              <ProductDetails />
            </Layout>
          </AuthUser>
        }
      />

      <Route
        path="/store-requisition"
        exact
        element={
          <AuthUser>
            <Layout>
              <CartScreen />
            </Layout>
          </AuthUser>
        }
      />

      <Route
        path="/requisition-type"
        exact
        element={
          <AuthUser>
            <Layout>
              <RequisitionType />
            </Layout>
          </AuthUser>
        }
      />

      <Route
        path="/purchase-requisition"
        exact
        element={
          <AuthUser>
            <Layout>
              <PurchaseRequisition />
            </Layout>
          </AuthUser>
        }
      />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}
