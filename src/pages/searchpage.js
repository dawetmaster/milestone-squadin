import {ReactComponent as SearchIcon} from '../images/searchlogo.svg';
<<<<<<< HEAD
import styles from './searchpage.module.css';

const SearchPage = () => {
    return ( <div>
        <form className={styles.searchform}>
            <input type="search" value="" placeholder="Search" className={styles.searchinput}/>
            <button type="submit" className={styles.searchbutton}>
=======
import './searchpage.module.css';

const SearchPage = () => {
    return ( <div>
        <form class="search-form">
            <input type="search" value="" placeholder="Search" class="search-input"/>
            <button type="submit" class="search-button">
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
              <SearchIcon />
            </button>    
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
            <symbol id="search" viewBox="0 0 32 32">
                <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
            </symbol>
        </svg>
        </form>
<<<<<<< HEAD
        <button className={styles.filterbutton}>Filter</button>
        
        <div className={styles.recomendationbox}>
          <div className={styles.recomendationcontainer}>
            <p>Suggestion :</p>

            <div className={styles.recomendation}>
              <input 
                type="radio" 
                className={styles.radio} 
=======
        <button class="filter-button">Filter</button>
        
        <div class="recomendation-box">
          <div class="recomendation-container">
            <p>Suggestion :</p>

            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="Game" 
                name="category"
              />
              <label for="Game">Game</label>
            </div>

<<<<<<< HEAD
            <div className ={styles.recomendation}>
              <input 
                type="radio" 
                className={styles.radio}  
=======
            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="Lomba" 
                name="category"
              />
              <label for="Lomba">Lomba</label>
            </div>

<<<<<<< HEAD
            <div className={styles.recomendation}>
              <input 
                type="radio" 
                className={styles.radio} 
=======
            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="Coding" 
                name="category"
              />
              <label for="Coding">Coding</label>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className={styles.filterbox}>
          <div className={styles.filtercontainer}>
            <p>Filter :</p>

            <div className={styles.filter}>
              <input 
                type="radio" 
                className={styles.radio} 
=======
        <div class="filter-box">
          <div class="filter-container">
            <p>Filter :</p>

            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="minimum" 
                name="category"
              />
              <label for="minimum">Jumlah anggota minimum</label>
            </div>

<<<<<<< HEAD
            <div className={styles.filter}>
              <input 
                type="radio" 
                className={styles.radio}  
=======
            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="maksimum" 
                name="category"
              />
              <label for="maksimum">Jumlah anggota maksimum</label>
            </div>

<<<<<<< HEAD
            <div className={styles.filter}>
              <input 
                type="radio" 
                className={styles.radio} 
=======
            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
>>>>>>> 81b8e4a6d6297edd77cf5f956819fd0dd75cd26c
                id="publik" 
                name="category"
              />
              <label for="publik">Grup publik</label>
            </div>
          </div>
        </div>
    </div> );
}
 
export default SearchPage;