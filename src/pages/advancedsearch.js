const AdvancedSearchPage = () => {
    return ( <div>
        <form class="search-form">
            <input type="search" value="" placeholder="Search" class="search-input"/>
            <button type="submit" class="search-button">
            {/*<svg class="submit-button">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
    </svg>*/}
            </button>    
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
            <symbol id="search" viewBox="0 0 32 32">
                <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
            </symbol>
        </svg>
        </form>
        <button class="filter-button">Filter</button>
        
        <div class="recomendation-box">
          <div class="recomendation-container">
            <p>Suggestion :</p>

            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
                id="Game" 
                name="category"
              />
              <label for="Game">Game</label>
            </div>

            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
                id="Lomba" 
                name="category"
              />
              <label for="Lomba">Lomba</label>
            </div>

            <div class="recomendation">
              <input 
                type="radio" 
                class="radio" 
                id="Coding" 
                name="category"
              />
              <label for="Coding">Coding</label>
            </div>
          </div>
        </div>

        <div class="filter-box">
          <div class="filter-container">
            <p>Filter :</p>

            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
                id="minimum" 
                name="category"
              />
              <label for="minimum">Jumlah anggota minimum</label>
            </div>

            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
                id="maksimum" 
                name="category"
              />
              <label for="maksimum">Jumlah anggota maksimum</label>
            </div>

            <div class="filter">
              <input 
                type="radio" 
                class="radio" 
                id="publik" 
                name="category"
              />
              <label for="publik">Grup publik</label>
            </div>
          </div>
        </div>
    </div> );
}
 
export default AdvancedSearchPage;