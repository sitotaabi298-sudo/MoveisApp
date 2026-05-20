
// Footer.jsx

import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="/" aria-label="Facebook">
          <FaFacebookF />
        </a>

        <a href="/" aria-label="Instagram">
          <FaInstagram />
        </a>

        <a href="/" aria-label="Twitter">
          <FaTwitter />
        </a>

        <a href="/" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.column}>
          <a href="/">Audio Description</a>
          <a href="/">Investor Relations</a>
          <a href="/">Legal Notices</a>
        </div>

        <div className={styles.column}>
          <a href="/">Help Centre</a>
          <a href="/">Jobs</a>
          <a href="/">Cookie Preferences</a>
        </div>

        <div className={styles.column}>
          <a href="/">Gift Cards</a>
          <a href="/">Terms of Use</a>
          <a href="/">Corporate Information</a>
        </div>

        <div className={styles.column}>
          <a href="/">Media Centre</a>
          <a href="/">Privacy</a>
          <a href="/">Contact Us</a>
        </div>
      </div>

      <p className={styles.copyright}>
        © 1997-2026 Netflix, Inc.
      </p>
    </footer>
  );
};

export default Footer;