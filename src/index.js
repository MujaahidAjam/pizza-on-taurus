import React from "react";
import ReactDOM from "react-dom/client";
import MenuItems from "./components/menuItems";

const Hello = () => {
    return (
        <div>
            <MenuItems/>
        </div>
    )
}
export default Hello;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Hello/>)