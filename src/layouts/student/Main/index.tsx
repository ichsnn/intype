import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

export default function StudentLayout() {
  return (
    <Wrapper>
      <Header />
      <main className="py-10 px-4">
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}