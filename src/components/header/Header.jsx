import React from "react";
import "./header.css"

import "../shopCardAdd/shopcardadd.css"

export const Header = () => {
    const buttonToggle = () => {
        document.querySelector(".Shop-Card").classList.toggle("ShopCard-visible");
    }

    return(
        <React.Fragment>
        <header className="header">
            <div className="content flex">
                <h1 className="tittle">Fake<span className="fw-normal">Store</span><span className="tittle-api"> Api</span></h1>
                <button className="shop" onClick={buttonToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"  width="32" height="32" viewBox="0 0 24 24" stroke="#ECF0F1" fill="none" strokeLinecap="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </button>
            </div>
        </header>
        </React.Fragment>
    );
}