import styles from './profile_passwords.module.css';

function ProfilePasswordsPage() {
    return(
        <div className={container}>
            <div className={content}>
                <div className={box}>
                    <div className={left_box}>
                        Password Lama
                    </div>
                    <div className={right_box}>
                        <input type="password" className={input} required/>
                    </div>
                </div>
            
                <div className={box}>
                    <div className={left_box}>
                        Password Baru
                    </div>
                    <div className={right_box}>
                        <input type="password" className={input} required/>
                    </div>
                </div>

                <div className={box}>
                    <div className={left_box}>
                        Konfirmasi Password
                    </div>
                    <div className={right_box}>
                        <input type="password" className={input} required/>
                    </div>
                </div>
            </div>
            <button className={btn}>Konfirmasi</button>
        </div>
    );
}

export default ProfilePasswordsPage