import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data: ", formData);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button style={styles.button} type="submit">
                        Login
                    </button>
                </form>
                <div style={styles.links}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <Link to="/register">Create an Account</Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
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
    links: {
        marginTop: "15px",
    },
};

export default LoginPage;
