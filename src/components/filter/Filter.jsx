import React from "react";
import "./filter.css"

export const Filter = () => {
    return (
        <div className="filter">
            <h3>FILTRO DE BÚSQUEDA</h3>
            <div className="colum">
                <h4>Ordenar por</h4>
                {/* <select name="" id="">
                    <option value="" select disabled>Precio</option>
                    <option value="">Precio : Menor a Mayor</option>
                    <option value="">Precio : Mayor a Menor</option>
                </select> */}
            </div>
            <div className="colum">
                <h4>Por Categoría</h4>
                <div className="category">
                    <input type="checkbox" />
                    <label htmlFor=""> Electronics</label>
                </div>
                <div className="category">
                    <input type="checkbox" />
                    <label htmlFor=""> Men's clothin</label>
                </div>
                <div className="category">
                    <input type="checkbox" />
                    <label htmlFor=""> Women's clothing</label>
                </div>
            </div>
            <div className="colum">
                <h4>Rango De Precios</h4>
                <div className="rango">
                    <p>De: </p>
                    <input type="text" />
                    <p> a </p>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}