import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div>
            <h2>We Couldn't find that page{props.match.params.slug}</h2>
            <Link to="/">Return to homepage</Link>
        </div>
    );
}