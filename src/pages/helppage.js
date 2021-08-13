import styles from './helppage.module.css';
import './helppage.module.css';
import help_icon from "../images/help-icon.png";
import phone_icon from "../images/phone-icon.png";
import message_icon from "../images/message-icon.png";
import instagram_icon from "../images/instragram-icon.png";

function HelpPage() {
  return (
    <div className="menu">
      <h1><img src={help_icon} alt="help" className={styles.icon}/> Help</h1>
      <p>Contact us on:</p>
      <ul type="none">
        <li><img src={phone_icon} className={styles.icon}/> 1500-212</li>
        <li><img src={message_icon} className={styles.icon}/> <a href="mailto:squad.in@cs.co.id">squad.in@cs.co.id</a></li>
        <li><img src={instagram_icon} className={styles.icon}/> @squad.in</li>
        </ul>
    </div>
  );
}

export default HelpPage;