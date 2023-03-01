import React, { useEffect, useState } from "react";
import "./Items.css"
import axios  from "axios";




export const Items = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
       const fetchItems = async () =>{
        try {
            const res = await axios('https://fakestoreapi.com/products')
            const response = await res.data;
            setData(response)
        } catch (error) {
            console.log(error);
        }
       }

       fetchItems()
    },[]);

    const aa = [];

    function informacion(item)  {
        aa.push(item)
        console.log(aa)
    }
    

const buttonToggle = () => {
    document.querySelector(".Shop-Card").classList.toggle("ShopCard-visible");
}
    

    return(
    <React.Fragment>
            <div className="Shop-Card">
                {
                  aa.map((item) => 
                    <h2>{item.title}</h2>
                  )
                    
                }
            </div>



             <div className="Items">
            {
                data.map((item) => 
                    <div className="card"  key={item.id} >
                        <div className="card-img">
                            <img  className="card-image" loading="lazy" src={item.image} alt={item.title} />
                        </div>
                        <button className="card-botton" key={item.id} onClick={() => informacion(item)}>
                                <span>Añadir al carrito</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#212121" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="6" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                    <path d="M15 6h6m-3 -3v6" />
                                </svg>
                            </button>
                        <div className="describe-card">
                            <span className="card-tittle" key={item.id}>{item.title}</span>
                            <span className="card-price" >${item.price} USB</span>
                        </div>
                    </div>
                )}
        </div>

        

    </React.Fragment>

        
    );
}