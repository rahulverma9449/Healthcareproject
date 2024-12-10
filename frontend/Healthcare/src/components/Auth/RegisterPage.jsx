import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function RegisterPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data: ", formData);
    };

    return (
        <div style={registerStyles.container}>
            <div style={registerStyles.card}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                    />
                    <button style={registerStyles.button} type="submit">
                        Register
                    </button>
                </form>
                <Link to="/" style={registerStyles.link}>
                    Back to Login
                </Link>
            </div>
        </div>
    );
}

// Define styles for the RegisterPage
const registerStyles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #74b9ff, #a29bfe)",
    },
    card: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "300px",
        textAlign: "center",
    },
    button: {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        background: "#0984e3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    link: {
        display: "block",
        marginTop: "15px",
        color: "#0984e3",
        textDecoration: "none",
    },
};

export default RegisterPage;
