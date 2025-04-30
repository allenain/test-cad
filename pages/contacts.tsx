import React from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/sections/ContactsForm";
import Meta from "@/components/sections/Meta";

const Contacts = () => {
    return (
        <>
            <Meta
                title="Some Company - Contacts"
                description="Most important title on the page"
            />
            <Header/>
            <ContactForm/>
            <Footer black />
        </>
    );
};

export default Contacts;