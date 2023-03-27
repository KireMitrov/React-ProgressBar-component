import React, { useEffect } from "react"
import "./progressBar.css"
import { useState } from "react";

function ProgressBar() {

    const steps = ["Shipping", "Review & Payment", "Complete"];
    const [width, setWidth] = useState(0);
    const currentStep = window.location.pathname.slice(1).replace(/%20/g, " ");
    const [completedSteps, setCompletedSteps] = useState([])

    useEffect(() => {
        const parts = 100 / (steps.length +1)
        const currentStepIndex = steps.findIndex( (elem) => elem.toLowerCase() === currentStep);
        let finishedSteps = Array.from({length:currentStepIndex}, (value, index) => 0 + index * 1);
        

        if ( currentStepIndex + 1 === steps.length){
            finishedSteps = Array.from({length : steps.length}, (value, index) => 0 + index * 1);
            setCompletedSteps(finishedSteps)
            setWidth(100)
        } else {
            setWidth((currentStepIndex + 1) * parts)
            setCompletedSteps(finishedSteps)
        }
        console.log(finishedSteps)
    },[currentStep])

    return (
        <div className="progress-bar-container">
            {steps.map((step, index) => (
                <div className="step">
                    <div className={`step-number ${completedSteps.includes(index) ? "step-completed" : ""}`}>{completedSteps.includes(index) ? <>&#10003;</> : index + 1 }</div>
                    <div className={`step-description ${completedSteps.includes(index) ? "step-description-completed" : ""}`}>{step}</div>
                </div>
            ))}
            <div className="progress" style={{width: width + "%" }}></div>
        </div>
    )
}

export default ProgressBar;