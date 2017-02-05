import React from 'react';
import './style.css'

function Title () {
    return <h1>Wikipedia Searcher</h1>;
}

function SearchInput () {
    return <input id="search-input" name="search" type="text"/>;
}

function SearchButton (props) {
    return <input id="submit-btn" className="btn" type="submit" value="search" onClick={props.onClick}/>;
}

function RandomButton (props) {
    return <input id="random-btn" className="btn" type="button" value="random" onClick={props.onClick}/>;
}

function onRandomButtonClick () {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

function WikiButton () {
    return (
        <div class="search-section">
            <SearchButton />
            <RandomButton onClick={onRandomButtonClick}/>
        </div>
    );
}

class App extends React.Component {
   render() {
       return (
           <div>
               <Title />
               <SearchInput />
               <WikiButton />
               <h2 id="error"></h2>
               <div id="result-section"></div>
           </div>
      );
   }
}

export default App;
