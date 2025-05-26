// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import { BucketListProvider } from "../contexts/BucketListContext";

// Layout.jsx
const Layout = () => {
    return (
        <BucketListProvider>
            <div className="container">
                <Header />
                <main className="main-content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </BucketListProvider>
    );
};

export default Layout;