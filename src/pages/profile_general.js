import styles from './profile_general.module.css';
import profile_icon from "../images/Shiina.png";
import {Link} from 'react-router-dom'

function ProfileGeneralPage() {
    return(
        <div className={styles.container}>
            <div className={styles.footer_content}>
                <div className={styles.leftbox}>
                    <img className={styles.profile_image} src={profile_icon} alt="profile-image"/>
                    <div className={styles.option_profile}>
                        <button className={styles.btn_first}> Change </button>
                        <button className={styles.btn_first}> Remove </button>
                    </div>
                </div>
            
                <div className={styles.rightbox}>
                    <div className={styles.box}>
                        <div className={styles.left_box}>
                            Name
                        </div>
                        <div className={styles.right_box}>
                            <input type="text" className={styles.input} required/>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left_box}>
                            Faculity
                        </div>
                        <div className={styles.right_box}>
                            <input type="text" className={styles.input} required/>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left_box}>
                            Interest
                        </div>
                        <div className={styles.right_box}>
                            <input type="text" className={styles.input} required/>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left_box}>
                            Email
                        </div>
                        <div className={styles.right_box}>
                            <input type="text" className={styles.input} required/>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left_box}>
                            LinkedIn
                        </div>
                        <div className={styles.right_box}>
                            <input type="text" className={styles.input} required/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.downbox}>
                <button className={styles.btn}> Edit Profile </button>
                <button className={styles.btn}><Link to="/change_password">Change Password </Link></button>
                <button className={styles.btn}> Log Out </button>
                <button className={styles.btn}> <span className={styles.red}>Delete Account</span></button>
            </div>
        </div>
    );
}

export default ProfileGeneralPage;