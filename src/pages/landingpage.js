import styles from './landingpage.module.css';
import background from '../images/background.png';

function LandingPage() {
    return (
        <div className={styles.background}>
            <img src={background}/>
        </div>
    );
}

export default LandingPage;
