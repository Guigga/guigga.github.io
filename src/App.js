import React from "react";
import { HashRouter as Router } from "react-router-dom"; // Alterado para HashRouter
import AppRoutes from "./routes";

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
