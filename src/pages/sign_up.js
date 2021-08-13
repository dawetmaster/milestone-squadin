<<<<<<< HEAD
import styles from './login.module.css'
import {Link} from 'react-router-dom'

function LoginPage() {
    return(
        <div className={styles.loginpage}>
            <div className={styles.form}>
                <div className={styles.login}>
                    <h3>SIGN UP</h3>
                </div>
                <form className = {styles.form}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="password confirmation"/>
                    <button>sign up</button>
                    <p className={styles.message}>Not registered? <a href="#"><Link to = "/signup" >Sign Up</Link></a></p>
=======
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
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                </form>
            </div>
        </div>
    );
  }
  
  export default SignUpPage;