import styles from './helppage.module.css';
import './../index.css';
import help_icon from "../images/help-icon.png";
import phone_icon from "../images/phone-icon.png";
import message_icon from "../images/message-icon.png";
import instagram_icon from "../images/instragram-icon.png";

function HelpPage() {
  return (
    <div className={styles.menu}>
      <h1 className={styles.title}> Butuh Bantuan?</h1>
      <p className={styles.desc}>Kontak kami di:</p>
      <section className={styles.contact}>
        <figure className={styles.figure}>
          <img src={phone_icon} className={styles.icon}/>
            <figcaption>
                <h3 className={styles.contactname}>Call Center</h3>
                <h4 className={styles.contactnumber}>1500-212</h4>
            </figcaption>
        </figure>
        <figure className={styles.figure}>
          <img src={message_icon} className={styles.icon}/>
            <figcaption>
                <h3 className={styles.contactname}>Instagram</h3>
                <h4 className={styles.contactnumber}>@squad.in</h4>
            </figcaption>
        </figure>
        <figure className={styles.figure}>
        <img src={instagram_icon} className={styles.icon}/>
            <figcaption>
                <h3 className={styles.contactname}>Email</h3>
                <h4 className={styles.contactnumber}><a href="mailto:squad.in@cs.co.id">squad.in@cs.co.id</a></h4>
            </figcaption>
        </figure>
    </section>
    </div>
  );
}

export default HelpPage;