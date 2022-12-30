import React from "react";
import "./SidebarItems.css";

function SidebarItems({ name, active, handClicked }) {
  return (
    <div className=" py-1 sidebarItems ">
      <button
        onClick={handClicked}
        className={`sidebar-button ${
          active ? "active" : ""
        }  border-0  py-4  w-75`}
      >
        {name}
      </button>
    </div>
  );
}

export default SidebarItems;
