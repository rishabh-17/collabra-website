import React from "react";
import Routes from "./Routes";
import { ContactDrawerProvider } from "./components/ContactDrawerProvider";

function App() {
    return (
        <ContactDrawerProvider>
            <Routes />
        </ContactDrawerProvider>
    );
}

export default App;
