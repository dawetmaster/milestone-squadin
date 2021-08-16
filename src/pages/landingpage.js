import styles from './landingpage.module.css';
import background from '../images/background.png';

function LandingPage() {
    return (
        <div className={styles.content}>
            <div className={styles.background}>
                <img src={background}/>
            </div>
            <div className={styles.title}>
                <h1 className={styles.titlename}>Squad.In</h1>
                <p className={styles.titledesc}>Create your dream squad with squad.in!</p>
                <p className={styles.titledesc2}>Squad.in helps ITB students who don't have circle/team/squad. Especially students who haven't been on an offline class till pandemic not over yet. </p>
            </div>
        </div>
    );
}

export default LandingPage;
