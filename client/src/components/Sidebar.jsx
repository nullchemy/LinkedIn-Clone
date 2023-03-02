import React from "react";

const Sidebar = ({ children, className }) => {
  return <aside className={className}> {children} </aside>;
};

Sidebar.defaultProps = {
  className: "aside",
};

export default Sidebar;
