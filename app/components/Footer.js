import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-800 py-2">
      <div className="container flex mx-auto justify-between items-center px-12">
        <div className="flex">
          <Link
            href="https://github.com/friatweldekidan"
            target="_blank"
            passHref
          >
            <span className="mx-2">
              <FontAwesomeIcon icon={faGithubSquare} width="36" height="24" />
            </span>
          </Link>
          <Link
            href="https://www.instagram.com/w.friat/"
            target="_blank"
            passHref
          >
            <span className="mx-2">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                width="36"
                height="24"
              />
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/friat-weldekidan/"
            target="_blank"
            passHref
          >
            <span className="mx-2">
              <FontAwesomeIcon icon={faLinkedin} width="36" height="24" />
            </span>
          </Link>
        </div>
        <div>
          <p className="text-sm">© {currentYear} FriatFolio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
