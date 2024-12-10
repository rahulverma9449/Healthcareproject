import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function ForgotPasswordPage() {
    const [formData, setFormData] = useState({ email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Forgot Password Data: ", formData);
    };

    return (
        <div style={forgotStyles.container}>
            <div style={forgotStyles.card}>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        onChange={handleChange}
                    />
                    <button style={forgotStyles.button} type="submit">
                        Submit
                    </button>
                </form>
                <Link to="/" style={forgotStyles.link}>
                    Back to Login
                </Link>
            </div>
        </div>
    );
}

// Define styles for ForgotPasswordPage
const forgotStyles = {
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

export default ForgotPasswordPage;
