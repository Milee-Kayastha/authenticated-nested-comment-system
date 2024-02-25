import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoginRegisterDialog from "./LoginRegisterDialog";

export default function Layout() {
  return (
    <main className="max-w-4xl my-0 mx-auto px-2">
      <Header />
      <hr />
      <div className="mt-8">
        <Outlet />
      </div>
      <LoginRegisterDialog />
    </main>
  );
}
