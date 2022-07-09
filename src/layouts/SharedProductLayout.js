import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <>
      <h4>Products Page (Deep Nested)</h4>
      <Outlet />
    </>
  );
};

export default SharedProductLayout;
