import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CertificacaoBiometrica from "./pages/CertificacaoBiometrica";
import Artes from "./pages/Artes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificacao-biometrica" element={<CertificacaoBiometrica />} />
            <Route path="/artes" element={<Artes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}
