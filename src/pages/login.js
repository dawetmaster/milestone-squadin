import styles from './login.module.css'
import {Link} from 'react-router-dom'

function LoginPage() {
    return(
        <div className={styles.loginpage}>
            <div className={styles.form}>
                <div className={styles.login}>
                    <h3>LOGIN</h3>
                </div>
                <form className = {styles.form}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p className={styles.message}>Not registered? <a href="/"><Link to = "/signup" >Sign Up</Link></a></p>
                </form>
            </div>
        </div>
    );
  }
  
  export default LoginPage;