import React from "react";
import './style.css';

const Brand = ({
    forename,
    surname,
    description
}) => (
    <div className="brand">
        <h1>{forename} <span>{surname}</span></h1>
        <p>{description}</p>
    </div>
);

export default Brand;