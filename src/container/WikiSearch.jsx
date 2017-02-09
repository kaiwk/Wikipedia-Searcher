import React from 'react';
import DataProvider from '../js/datasource.js';

class WikiSearch extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({inputText: e.target.value});
  }

  render () {
    return (
      <div>
        <input id="search-input" type="text" name="search" onChange={this.handleChange}/>
        <div className="search-section">
          <input
            id="submit-btn"
            className="btn"
            type="submit"
            value="search"
            onClick={
              (e) => {
                e.preventDefault();
                DataProvider.getData(this.state.inputText, (jsonObj) => {
                  this.props.onSearchComplete(jsonObj);
                });
              }
            }/>
            <input
              id="random-btn"
              className="btn"
              type="button"
              value="random"
              onClick={
                (e) => {
                  e.preventDefault();
                  window.open("https://en.wikipedia.org/wiki/Special:Random");
                }
              }/>
        </div>
      </div>
    );
  }
}

export default WikiSearch;
