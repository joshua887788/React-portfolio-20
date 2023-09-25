import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const validateEmail = (email) => {
        
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let validationErrors = {};

        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = "Invalid email format";
        }
        if (!formData.message) validationErrors.message = "Message is required";

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form data submitted:", formData);
            
        }
    }

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
