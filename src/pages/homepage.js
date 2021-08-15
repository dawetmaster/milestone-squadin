import styles from './homepage.module.css'
import {Link} from 'react-router-dom'

function HomePage() {
    return(
        <div className={styles.topcontent}>
            <div className={styles.firstcontent}>
                <div className={styles.firstsection}>
                    <form className={styles.searchform}>
                        <button type="submit" className={styles.searchbutton}>
                            <svg className={styles.submitbutton}>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#search"></use>
                            </svg>
                        </button>
    
                        <input type="search" value="" placeholder="Search" className={styles.searchinput}/>   
    
                        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
                            <symbol id="search" viewBox="0 0 32 32">
                                <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                            </symbol>
                        </svg>
    
                    </form>
                    <button className={`${styles.filterbutton} ${styles.first}`}>Filter</button>
                    <button className={`${styles.filterbutton} ${styles.second}`}> <i className={`${styles.far} ${styles.fa_plus_square}`}></i> Create</button>
                </div>
            </div>

            <div className={styles.secondcontent}>

                <div className={styles.box}>
                    <div className={styles.boxleft}>
                        <h1> Bussiness Plan </h1>
                        <div className={styles.menuseciton}>
                            <div className={styles.category}> 
                                <div className={styles.minibox}> Hackathon </div>
                                <div className={styles.minibox}> Lomba </div>
                                <div className={styles.minibox}> Bussiness </div>
                            </div>

                            <div className={styles.description}>
                                <p>Tuliskan apapun yang mendeskripsikan seperti apa kelompok Anda untuk mengikuti perancangan Business Plan</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxright}>
                        <p> Kapasitas: </p>
                        <div className={styles.kapasitas}> 16 / 64 </div>
                        <button className={styles.minibox}> Ingin Masuk?</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxleft}>
                        <h1> Genshin Impact </h1>
                        <div className={styles.menuseciton}>
                            <div className={styles.category}> 
                                <div className={styles.minibox}> Game </div>
                                <div className={styles.minibox}> Genshin Impact </div>
                            </div>

                            <div className={styles.description}>
                                <p>Ayo ngebabu bareng di kota Liyue</p>
                                <p>Syarat: sudah pernah ke kota Liyue</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles.boxright}>
                        <p> Kapasitas: </p>
                        <div className={styles.kapasitas}> 4 / 8 </div>
                        <button className={styles.minibox}> Ingin Masuk?</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxleft}>
                        <h1> Bussiness Plan </h1>
                        <div className={styles.menuseciton}>
                            <div className={styles.category}> 
                                <div className={styles.minibox}> Hackathon </div>
                                <div className={styles.minibox}> Lomba </div>
                                <div className={styles.minibox}> Bussiness </div>
                            </div>

                            <div className={styles.description}>
                                <p>Tuliskan apapun yang mendeskripsikan seperti apa kelompok Anda untuk mengikuti perancangan Business Plan</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxright}>
                        <p> Kapasitas: </p>
                        <div className={styles.kapasitas}> 16 / 64 </div>
                        <button className={styles.minibox}> Ingin Masuk?</button>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxleft}>
                        <h1> Genshin Impact </h1>
                        <div className={styles.menuseciton}>
                            <div className={styles.category}> 
                                <div className={styles.minibox}> Game </div>
                                <div className={styles.minibox}> Genshin Impact </div>
                            </div>

                            <div className={styles.description}>
                                <p>Ayo ngebabu bareng di kota Liyue</p>
                                <p>Syarat: sudah pernah ke kota Liyue</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles.boxright}>
                        <p> Kapasitas: </p>
                        <div className={styles.kapasitas}> 4 / 8 </div>
                        <button className={styles.minibox}> Ingin Masuk?</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage