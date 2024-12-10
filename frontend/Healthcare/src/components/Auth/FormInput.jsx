import React from "react";

function FormInput({ label, type, name, placeholder, onChange }) {
    return (
        <div style={styles.formGroup}>
            <label style={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                style={styles.input}
                required
            />
        </div>
    );
}

const styles = {
    formGroup: {
        marginBottom: "15px",
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontSize: "14px",
        color: "#636e72",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #dfe6e9",
        borderRadius: "5px",
        outline: "none",
    },
};

export default FormInput;
