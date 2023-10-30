import React, { useState } from "react";
import "./multiple.css";



// This is the Multiple component. It is the main component for the Multiple page.
export default function Multiple() {
    const[formData, setFormData] = useState({
        company: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: ""
    });

    const [selectedProvince, setSelectedProvince] = useState("Choose your province");
    const handleSelectChange = (event) => {
        setSelectedProvince(event.target.value);
    }
    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData((prevFormData) => ({  
            ...prevFormData,
            [name]: value,
        
        }));

    }
        const handleSubmit = (event) => {
            event.preventDefault();
            alert(
                `Company: ${formData.company}\n
                First Name: ${formData.firstName}\n
                Last Name: ${formData.lastName}\n
                Email: ${formData.email}\n
                Phone: ${formData.phone}\n
                Address: ${formData.address}\n
                City: ${formData.city}\n
                Province: ${formData.province}\n`
            );
        };
    
    return (
        <form onSubmit={handleSubmit} className="multiple">
            <label className="multiple_text" htmlFor="company">
                Company:
            </label>
            <input
                className="multiple_input"
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
            />
            <label className="multiple_text" htmlFor="firstName">
                First Name:*
                </label>
            
            <input 
                className="multiple_input"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required = "required"
            />
            
            
            <label className="multiple_text" htmlFor="lastName">
                Last Name:*
            </label>
            <input 
                className="multiple_input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <label className="multiple_text" htmlFor="email">
                Email:
            </label>
            <input 
                className="multiple_input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <label className="multiple_text" htmlFor="phone">
                Phone:
            </label>
            <input 
                className="multiple_input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <label className="multiple_text" htmlFor="address">
                Address:*
            </label>
            <input 
                className="multiple_input"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required = "required"
            />
            <label className="multiple_text" htmlFor="city">
                City:*
            </label>
            <input 
                className="multiple_input"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required = "required"
            />
            <label className="multiple_text" htmlFor="province">
                Province:*
            </label>
            <select 
                className="multiple_input"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required = "required"
            >
                <option value="Choose your province" disabled>Choose your province</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
            </select>
            <button className="multiple_button" type="submit">Submit</button>
            

            
            </form>
    );

            
        }


    
