import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Passion 
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>Graphics Design</li>
          <li>
              Video Editor
          </li>
          <li>
              Business
          </li>
          <li>
              Content Creator
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Work
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <b>Cholo Digital</b>: Managing Director{" "}
          </li>
          <li>
            <b> J4BMovies: </b>
            Bangladeshi Biggest Movie Download Website
          </li>
          
          <li><b> J4B Reaction: </b> 2020 to Present</li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Let's Connect
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaPhone className="text-primary" /> +88 01921-825028
            </span>
          </li>
          <li>
            <Link to={"https://www.facebook.com/sayedmahbub008"} className="flex items-center gap-1">
              <FaFacebook className="text-primary" /> /sayedmahbub
            </Link>
            
          </li>
          {/* <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
