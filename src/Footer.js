import { FaGithub, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer-section text-center py-4">
      <div className="container">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Waldric Garcia. All Rights Reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/Waldric/react-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/waldricjude.garcia"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
