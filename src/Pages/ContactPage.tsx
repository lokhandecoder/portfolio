import React from "react";
import ContactMessage from "../Components/ContactPageComponents/ContactMessage";
import ContactInfo from "../Components/ContactPageComponents/ContactInfo";
import ContactForm from "../Components/ContactPageComponents/ContactForm";

function ContactPage() {
  return (
    <div>
      <ContactMessage />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default ContactPage;
