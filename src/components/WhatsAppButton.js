import React from "react";

import "../styles.css";
const WhatsAppButton = () => {
    const phoneNumber = "923193175477";
    const message = "Hi Samad, I found your portfolio and want to contact you.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.container}
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                style={styles.icon}
            />
        </a>
    );
};

const styles = {
    container: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
    },
    icon: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        transition: "transform 0.2s ease",
    },
}
    export default WhatsAppButton;