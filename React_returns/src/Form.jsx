// Form.jsx code 

import { useState } from "react";

export default function Form(){
    const [name, setName] = useState("Yuvii");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });
    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [fieldName]: fieldValue
            }
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData(
            {
                fullName: "",
                username: "",
                password: ""
            }
        );
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">
                <i><u><h2>Full Name - </h2></u></i>
            </label>
            <input type="text" 
            placeholder="Enter your name" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName" 
            name="fullName"/>
            <br /> <br />
            <label htmlFor="username">
                <i><u><h2>Username - </h2></u></i>
            </label>
            <input type="text" 
            placeholder="Username" 
            value={formData.username} 
            onChange={handleInputChange}
            id="username" 
            name="username"/>
            <br /> <br />
            <label htmlFor="password">
                <i><u><h2>Password - </h2></u></i>
            </label>
            <input type="password" 
            placeholder="password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password" 
            name="password"/>
            <button>Submit</button>
        </form>
    );
}