import React from "react";
import {Link} from 'react-router-dom';


function Header(props){

    return (
        <div className="header">

            <Link id="homeLink" to='/'>
                <img id="homeIcon" src="../css/home-run.svg" alt="homeicon"/>
            </Link>


            <h1 id="headerTitle">eartrain.me</h1>    

            <img id="logoutIcon" src="../css/logout.svg"/>

        </div>

    ) 

}

export default Header;