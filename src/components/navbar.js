import styles from './navbar.module.css';
import Notifications from 'react-notifications-menu';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <a href="/">Squad.In</a>
                </div>
                <ul className={styles.menulist}>
                    <li><Link className={styles.link} to="/">Home</Link></li>
                    <li><Link className={styles.link} to="/">Search</Link></li>
                    <li>
                        <Notifications
                        header={{
                            title: 'Notifications',
                        }}
                        />
                    </li>
                    <li><Link className={styles.link} to="/help">Help</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;