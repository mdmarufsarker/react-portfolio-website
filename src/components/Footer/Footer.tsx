import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>M</span>
        <span>aruf</span>
      </a>
      <div>
        <p>
          <img src={reactIcon} alt="React" /> Honour of this website
          <span>❤️</span>{" "}
          <a href="https://github.com/joaotuliojt">joaotuliojt</a>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jtsoares/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/joaotuliojt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/tulio_joaob/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.com/users/426120432991862784"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
