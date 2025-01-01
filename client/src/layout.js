import { Outlet } from "react-router-dom";
import Header from "./header";
import Post from "./post";

export default function Layout() {
    return(
        <main>
            <Header />
            <Post />
            <Outlet />
        </main>
    )
}