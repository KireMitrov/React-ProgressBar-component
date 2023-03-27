import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar/ProgressBar";

function Main() {

    return (
        <div className="buttons">
            <Link to="/shipping">
                <button>Go to checkout</button>
            </Link>
        </div>
    )
}

export default Main;
