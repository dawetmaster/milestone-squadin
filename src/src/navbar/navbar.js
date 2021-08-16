import styles from './navbar.module.css';
import Notifications from 'react-notifications-menu';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to="/">Squad.In</Link>
                </div>
                <ul className={styles.menulist}>
                    <li>
                        <Notifications className={styles.notifications}
                        header={{
                            title: 'Notifications',
                        }}
                        />
                    </li>
                    <li><Link className={styles.link} to="/home">Home</Link></li>
                    <li><Link className={styles.link} to="/search">Search</Link></li>
                    <li><Link className={styles.link} to="/help">Help</Link></li>
                    <li><Link className={styles.link} to="/login">Login</Link></li>
                    <li><Link className={styles.link} to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;