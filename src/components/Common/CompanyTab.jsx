import { useState } from "react";

// Import Components
import CompanyFormStep1 from "./forms/CompanyStepperForms/CompanyFormStep1";
import CompanyFormStep2 from "./forms/CompanyStepperForms/CompanyFormStep2";
import CompanyFormStep3 from "./forms/CompanyStepperForms/CompanyFormStep3";

import { useNavigate } from "react-router-dom";



const CompanyTab = prop => {

    const navigate = useNavigate();

    // State variables for each step
    const [activeStep, setActiveStep] = useState(1);
    const [stepsCompleted, setStepsCompleted] = useState({ 1: false, 2: false, 3: false });
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        companyAddress: '',
        businessLicense: '',
        postalCode:'',
        tin: '',
        vat: '',
        bankName: '',
        bankCode: '',
        accountNo: ''
    });

    // Function to handle form submission and mark the step as completed
    const handleFormSubmit = (step, values) => {    // Here each time new form data is coming in values
        setFormValues(prevValues => ({ ...prevValues, ...values }));
        
        // Check if all required fields in the current step are valid
        if (values) {
        setStepsCompleted({ ...stepsCompleted, [step]: true });
        if (step < 3) {
            setActiveStep(step + 1); // Move to next step
        } else {
            // Final step - submit the full form data
            navigate('/login');  // Redirect to login after successful completion
        }
        } else {
            alert('Please fill out the form to proceed.');
        }
    };

    // Function to go back to the previous step
    const handlePrev = (step) => {
        if (step > 1) {
        setActiveStep(step - 1);
        // Mark the current step as incomplete when going back
        setStepsCompleted({ ...stepsCompleted, [step-1]: false }); // Mark the current step as incomplete when going back
        }
    };


    // Handle form input changes
    const handleChange = (fieldName, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [fieldName]: value
        }));
    };

    return (
        <div>
            {/* Stepper */}
            <div className="stepper-wrapper">
                <div className={`stepper-item ${activeStep === 1 ? 'active' : ''} ${stepsCompleted[1] ? 'completed' : ''}`}>
                    <div className="circle">
                    <div className={`dot ${stepsCompleted[1] ? 'filled' : ''}`}></div>
                    </div>
                </div>
                <div className={`stepper-item ${activeStep === 2 ? 'active' : ''} ${stepsCompleted[2] ? 'completed' : ''}`}>
                    <div className="circle">
                    <div className={`dot ${stepsCompleted[2] ? 'filled' : ''}`}></div>
                    </div>
                </div>
                <div className={`stepper-item ${activeStep === 3 ? 'active' : ''} ${stepsCompleted[3] ? 'completed' : ''}`}>
                    <div className="circle">
                    <div className={`dot ${stepsCompleted[3] ? 'filled' : ''}`}></div>
                    </div>
                </div>
            </div>

            {/* Conditional rendering of forms based on the active step */}
            {/* Form 1 */}
            {
            activeStep === 1 && (
                <div className="form-step">
                    <CompanyFormStep1 handleSubmit={(values) => handleFormSubmit(1, values)} 
                    formValues={formValues}  // Pass form values
                    handleChange={(field, value) => handleChange(field, value)}/>
                </div>
            )}
            {/* Form 2 */}
            {
            activeStep === 2 && (
                <div className="form-step">
                    <CompanyFormStep2 handleSubmit={(values) => handleFormSubmit(2, values)} handlePrev={() => handlePrev(2)} 
                        formValues={formValues}  // Pass form values
                        handleChange={(field, value) => handleChange(field, value)}/>
                </div>
            )}
            {/* Form 3 */}
            {
            activeStep === 3 && (
                <div className="form-step">
                    <CompanyFormStep3 handleSubmit={(values) => handleFormSubmit(3, values)} handlePrev={() => handlePrev(3)} 
                    formValues={formValues} // Pass form values
                    handleChange={(field, value) => handleChange(field, value)}/>
                </div>
            )}
        </div>
    )
}

export default CompanyTab;