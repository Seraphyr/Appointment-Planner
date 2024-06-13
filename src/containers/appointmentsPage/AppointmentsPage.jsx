import React, { Component } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contact: "",
      date: "",
      time: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, contact, date, time } = this.state;
    this.props.addAppointment(title, contact, date, time);
    this.setState({
      title: "",
      contact: "",
      date: "",
      time: "",
    });
  };

  render() {
    const { contacts, appointments } = this.props;
    const { title, contact, date, time } = this.state;

    return (
      <div>
        <section>
          <h2>Add Appointment</h2>
          <AppointmentForm
            contacts={contacts}
            title={title}
            setTitle={(value) => this.setState({ title: value })}
            contact={contact}
            setContact={(value) => this.setState({ contact: value })}
            date={date}
            setDate={(value) => this.setState({ date: value })}
            time={time}
            setTime={(value) => this.setState({ time: value })}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
          <TileList data={appointments} />
        </section>
      </div>
    );
  }
}
