import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar/ProgressBar";

function Payment() {

    return (
        <div>
            <ProgressBar></ProgressBar>
            <div className="buttons">
                <Link to="/shipping">
                    <button>Previous</button>
                </Link>
                <Link to="/complete">
                    <button>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default Payment;
