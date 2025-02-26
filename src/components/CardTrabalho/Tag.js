import React from "react";
import "./styles.css";

export default function Tag({ text }) {
    return (
        <div className="tag">
            <span>{text}</span>
        </div>
    );
}
