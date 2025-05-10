import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useLoad } from "@/hooks/useLoad";
import { Preloader } from "@/components/Preloader";
import { NavBar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollTop";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const load = useLoad();

  return (
    <React.Fragment>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
