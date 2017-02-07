import React from 'react';
import DataProvider from './datasource.js';
import '../style/style.css';

function Title () {
  return <h1>Wikipedia Searcher</h1>;
}

function Error (props) {
  return (
    <div>
      <h1>{props.code}</h1>
      <p>{props.info}</p>
    </div>
  );
}

class ResultCard extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open('http://en.wikipedia.org/?curid=' + this.props.pageid);
  }

  render () {
    return(
      <div className="result-card" onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <p>{this.props.extract}</p>
      </div>
    );
  }
}

class ResultSection extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    var rows = [];
    var res = this.props.results;
    Object.keys(res).map(function(key, index) {
      rows.push(<ResultCard
                key={index}
                title={res[key].title}
                extract={res[key].extract}
                pageid={res[key].pageid}/>);
    });

    if (rows.length == 0) {
      res = <h2>No Result</h2>;
    } else {
      res = <div id="result-section">{rows}</div>;
    }

    return res;
  }
}

class WikiSearch extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.onRandomButtonClick = this.onRandomButtonClick.bind(this);
  }

  handleChange (e) {
    this.setState({inputText: e.target.value});
  }

  onSearchButtonClick () {
    var that = this;
    DataProvider.getData(this.state.inputText, function(jsonObj) {
      that.props.onSearchComplete(jsonObj);
    });
  }

  onRandomButtonClick () {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  }

  render () {
    return (
      <div>
        <input id="search-input" type="text" name="search" onChange={this.handleChange}/>
        <div className="search-section">
          <input id="submit-btn" className="btn" type="submit" value="search" onClick={this.onSearchButtonClick} />
          <input id="random-btn" className="btn" type="button" value="random" onClick={this.onRandomButtonClick} />
        </div>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      success: true,
      res: {}
    };
    this.onSearchComplete = this.onSearchComplete.bind(this);
  }

  onSearchComplete (results) {
    if (results.hasOwnProperty('query')) {
      this.setState({
        success: true,
        res: results.query.pages
      });
    } else {
      this.setState({res: {}});
    }

    if(results.hasOwnProperty('error')) {
      this.setState({
        success: false,
        res: results.error
      });
    }
  }

  render() {
    var res = this.state.res;
    var result = null;
    if (this.state.success) {
      result = <ResultSection results={res}/>;
    } else {
      result = <Error code={res.code} info={res.info}/>;
    }
    return (
      <div>
        <Title />
        <WikiSearch onSearchComplete={this.onSearchComplete} />
        {result}
      </div>
    );
  }
}

export default App;
