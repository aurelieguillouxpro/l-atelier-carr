import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "../Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
