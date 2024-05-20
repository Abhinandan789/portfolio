import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formDetails;
    const mailtoLink = `mailto:abhigautam7899@gmail.com?subject=Contact Form Submission&body=First Name: ${firstName}%0A Last Name: ${lastName}%0A Email: ${email}%0A Phone: ${phone}%0A Message: ${message}`;

    // Reset the form details
    setFormDetails(formInitialDetails);
    setButtonText("Sending..."); // Optional: Update button text while sending

    // Simulate asynchronous form submission (you can replace this with an actual API call)
    setTimeout(() => {
      // Update status
      setStatus({
        success: true,
        message: "Form submitted successfully!",
      });

      setButtonText("Send"); // Reset button text after submission
    }, 1000);

    // Redirect user to mail client
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="connect">
      <Container className="align-items-center">
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="contact-img" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields go here */}
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>

              {status.message && (
                <Col>
                  <p
                    className={
                      status.success === false ? "danger" : "success"
                    }
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
