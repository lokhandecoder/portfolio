import React from "react";

function ContactInfo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
        <h3>You can direct contact me </h3>
        <p>
          Email:{" "}
          <a href="mailto:amitlokhande909@gmail.com">
            amitlokhande909@gmail.com
          </a>
        </p>
        <p>Phone: +91 9987753904</p>
        <p>Location: Navi Mumbai, India</p>
      </div>
    </div>
  );
}

export default ContactInfo;
