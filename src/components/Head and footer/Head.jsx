import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./Head.css";

function Head() {
  return (
    <div className="top">
      <div className="left_top">
        <div className="info">
          <IoLocationOutline className="icon" />
          <p>Kenya</p>
        </div>
        <div className="info">
          <MdOutlineMailOutline className="icon" />
          <a href="mailto:info@cfsf.org">info@cfsf.org</a>
        </div>
        <div className="info">
          <FaPhoneAlt className="icon" />
          <a href="tel:+254720794573">+254 720 794 573</a>
        </div>
      </div>
      <div className="right_top">
        <a href="#" className="social"><FaXTwitter /></a>
        <a href="#" className="social"><FaFacebookF /></a>
      </div>
    </div>
  );
}

export default Head;
