import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Contact with me</h2>
        <p>
          Here is my email address and phone number for contact with me. Also
          you can search on google by my{" "}
          <a
            style={{ color: "white" }}
            href="https://www.google.com/search?channel=fs&client=ubuntu&q=md+maruf+sarker"
          >
            name
          </a>{" "}
          for more information about me.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:abdullahalmarufytofficial@gmail.com">
            abdullahalmarufytofficial@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel: 018**57**12">+88 018**57**12</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
