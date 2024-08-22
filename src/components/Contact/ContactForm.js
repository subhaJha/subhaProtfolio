import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contactNumber: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contactNumber, message } = this.state;

    const templateParams = {
      name,
      email,
      contactNumber,
      message,
    };

    // Send the original email
    emailjs
      .send(
        "service_0sjv2bc", // your EmailJS Service ID
        "template_k71gz2e", // your EmailJS Template ID
        templateParams,
        "YJIrA9a90RxPYvNqA" // your EmailJS User ID

      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          // Send the thank you email to the user
          emailjs
            .send(
              "service_0sjv2bc", // your EmailJS Service ID
              "template_fugvcic", // your EmailJS Template ID
              { name, email }, // Include the user's email and name
              "YJIrA9a90RxPYvNqA" // your EmailJS User ID
      
            )
            .then(
              (response) => {
                console.log("Thank You Email sent!", response.status, response.text);
              },
              (error) => {
                console.log("Failed to send Thank You Email...", error);
              }
            );

          alert("Email sent successfully!");
          this.setState({ name: "", email: "", contactNumber: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="email" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="contactNumber" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="contactNumber"
            value={this.state.contactNumber}
            onChange={this.handleChange}
            placeholder="Enter your contact number"
          />
        </Form.Group>

        <Form.Group controlId="message" style={{ paddingTop: "20px" }}>
          <Form.Control
            as="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Enter your message"
            rows={4}
          />
        </Form.Group>
        <div style={{ paddingTop: "20px" }}></div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
