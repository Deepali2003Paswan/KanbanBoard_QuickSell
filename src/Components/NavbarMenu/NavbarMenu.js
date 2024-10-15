import React from "react";
import './NavbarMenu.css';

const NavbarMenu = (props) => {
  return (
    <div className="navbar-dropdown">
      <div className="nav-dropdown-category">
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </div>
      <div className="nav-dropdown-selector">
        <select
          value={props.groupValue}
          onChange={props.handleFunction}
          className="nav-selector"
          name={props.name}
          id={props.name}
        >
          {props.options.map((item, idx) => {
            console.log(item);
            return (<option value={item} id={idx}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>);
          })}
        </select>
      </div>
    </div>
  );
};

export default NavbarMenu;
