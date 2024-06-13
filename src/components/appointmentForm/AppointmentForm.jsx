import React, { useState } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
    setDate(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Appointment title"
        required
      />

      <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        contact={contact}
      />

      <input
        type="date"
        value={selectedDate.toISOString().split("T")[0]}
        min={getTodayString()}
        onChange={handleDateChange}
        placeholder="Appointment date"
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Appointment time"
        required
      />

      <input type="submit" value="Add appointment" />
    </form>
  );
};

export default AppointmentForm;
