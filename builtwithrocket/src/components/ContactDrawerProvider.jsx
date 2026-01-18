import React, { createContext, useCallback, useContext, useState } from "react";
import Contact from "../pages/Contact";

const ContactDrawerContext = createContext({
    openDrawer: () => { },
    closeDrawer: () => { },
});

export const ContactDrawerProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ContactDrawerContext.Provider value={{ openDrawer, closeDrawer }}>
            {children}
            <Contact isOpen={isOpen} onClose={closeDrawer} />
        </ContactDrawerContext.Provider>
    );
};

export const useContactDrawer = () => useContext(ContactDrawerContext);

