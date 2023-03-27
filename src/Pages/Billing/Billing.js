import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar/ProgressBar";

function Billing() {

    return (
        <div>
            <ProgressBar></ProgressBar>
            <div className="buttons">
                <Link to="/">
                    <button>Previous</button>
                </Link>
                <Link to="/review & payment">
                    <button>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default Billing;

