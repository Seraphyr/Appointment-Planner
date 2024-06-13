import React, { useState, useEffect } from "react";

export const ContactPicker = ({ contacts, onChange, contact }) => {
  const [selectedContact, setSelectedContact] = useState(contact);

  useEffect(() => {
    setSelectedContact(contact);
  }, [contact]);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedContact = contacts.find((contact) => contact.id === selectedId);
    setSelectedContact(selectedContact);
    onChange(selectedContact);
  };

  const options = contacts.map((contact) => (
    <option key={contact.id} value={contact.id}>
      {contact.name}
    </option>
  ));

  return (
    <select value={selectedContact ? selectedContact.id : ''} onChange={handleSelectChange} required>
      <option value="">Select contact</option>
      {options}
    </select>
  );
};
