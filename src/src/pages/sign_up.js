import styles from './sign_up.module.css'
import {Link} from 'react-router-dom'

function SignUpPage() {
    return(
        <div className={styles.sigUpPage}>
            <div className={styles.form}>
                <div className={styles.signUp}>
                    <div className={styles.header}>
                        <h3>SIGN UP</h3>
                    </div>
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="password confirmation"/>
                    <button>Sign Up</button>
                    <p class="message">Registered ? <Link to="/login">Log in </Link></p>
                </form>
            </div>
        </div>
    );
  }
  
  export default SignUpPage;