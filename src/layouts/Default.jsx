import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useBreakpoint } from "../helpers";
import { FloatingButton } from "../components/FloatingButton";

export function Default() {
  const windowWidth = useBreakpoint();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {windowWidth < 450 && <FloatingButton />}
      <ScrollRestoration />
    </>
  );
}
