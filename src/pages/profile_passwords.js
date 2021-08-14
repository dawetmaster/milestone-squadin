import styles from './profile_passwords.module.css';

function ProfilePasswordsPage() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.left_box}>
                        Password Lama
                    </div>
                    <div className={styles.right_box}>
                        <input type="password" className={styles.input} required/>
                    </div>
                </div>
            
                <div className={styles.box}>
                    <div className={styles.left_box}>
                        Password Baru
                    </div>
                    <div className={styles.right_box}>
                        <input type="password" className={styles.input} required/>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.left_box}>
                        Konfirmasi Password
                    </div>
                    <div className={styles.right_box}>
                        <input type="password" className={styles.input} required/>
                    </div>
                </div>
            </div>
            <button className={styles.btn}>Konfirmasi</button>
        </div>
    );
}

export default ProfilePasswordsPage