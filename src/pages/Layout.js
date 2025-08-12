import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
       <div>
        <TopHeader />
        <Outlet />
       </div> 
    )
}
