import MobileNav from "@/components/Shared/MobileNav";
import SideBar from "@/components/Shared/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <SideBar />
      <MobileNav />
      <div className='root-container'>
        <div className='wrapper'>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
