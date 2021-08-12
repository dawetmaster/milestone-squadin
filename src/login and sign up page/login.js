import styles from './login.module.css'

function LoginPage() {
    return (
        <div className={styles.menu}>
            <div class="login-page">
                <div class="form">
                    <div class="login">
                        <div class="login-header">
                            <h3>LOGIN</h3>
                        </div>
                    </div>
                    <form class="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p class="message">Not registered? <a href="#">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default LoginPage;