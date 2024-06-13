import React, { Component } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      isDuplicate: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, isDuplicate } = this.state;
    if (!isDuplicate) {
      this.props.addContact(name, phone, email);
      this.setState({
        name: "",
        phone: "",
        email: "",
      });
    } else {
      alert("Name already taken!");
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    if (prevState.name !== name) {
      const duplicateContact = this.props.contacts.find(
        (contact) => contact.name === name
      );
      this.setState({
        isDuplicate: !!duplicateContact,
      });
    }
  }

  render() {
    const { contacts } = this.props;
    const { name, phone, email, isDuplicate } = this.state;

    return (
      <div>
        <section>
          <h2>Add Contact</h2>
          <ContactForm
            name={name}
            setName={(value) => this.setState({ name: value })}
            phone={phone}
            setPhone={(value) => this.setState({ phone: value })}
            email={email}
            setEmail={(value) => this.setState({ email: value })}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList data={contacts} />
        </section>
      </div>
    );
  }
}
