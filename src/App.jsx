import './App.css';
import { PaymentStep, PermitCheckStep, PostcodeStep, SelectSkipStep, WasteTypeStep } from './components/pages/index.js';
import Navbar from "./components/ui/stepper/Navbar.jsx";
import React, { useState } from 'react';

function App() {
    const [activeStep, setActiveStep] = useState(2); // Start at "Select Skip" step

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, 5));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const renderStep = () => {
        switch (activeStep) {
            case 0:
                return <PostcodeStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 1:
                return <WasteTypeStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 2:
                return <SelectSkipStep onNext={handleNext} onBack={handleBack} />;
            case 3:
                return <PermitCheckStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 4:
                return <ChooseDateStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 5:
                return <PaymentStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar activeStep={activeStep} setActiveStep={setActiveStep} />
            {renderStep()}
        </>
    );
}

export default App;