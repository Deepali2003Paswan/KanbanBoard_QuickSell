import React, {useState} from 'react'
import filterIcon from '../../Assets/Images/Display.svg'
import downIcon from '../../Assets/Images/down.svg'

import './Navbar.css'
import NavbarMenu from '../NavbarMenu/NavbarMenu';

const orderingOptions = ["priority", "title"];
const groupingOptions = ["status", "user", "priority"];

export default function Navbar(props) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="nav">
            <div className="nav-container">
                <div>
                    <div className="nav-disp-btn" onClick={handleDisplayToggle}>
                        <div className="nav-disp-icon nav-disp-filter">
                            <img src={filterIcon} alt="icon" />
                        </div>
                        <div className="nav-disp-heading">
                            Display
                        </div>
                        <div className="nav-disp-icon nav-disp-drop">
                            <img src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "nav-disp-dropdown nav-disp-dropdown-show" : "nav-disp-dropdown"}>
                        <NavbarMenu name = "grouping" groupValue = {props.groupValue} handleFunction = {handleDisplayToggle} options = {groupingOptions}></NavbarMenu>
                        <NavbarMenu name = "ordering" groupValue = {props.groupValue} handleFunction = {handleOrderingValue} options = {orderingOptions}></NavbarMenu>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
