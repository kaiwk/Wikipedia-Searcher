import React from 'react';
import '../style/style.css';

import Title from './Title.jsx';
import Error from './Error.jsx';
import Results from './Results.jsx';
import WikiSearch from '../container/WikiSearch.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      success: true,
      res: {}
    };
  }

  render() {
    var res = this.state.res;
    var result = null;
    if (this.state.success) {
      result = <Results results={res}/>;
    } else {
      result = <Error code={res.code} info={res.info}/>;
    }
    return (
      <div>
        <Title />
        <WikiSearch
          onSearchComplete={
            (results) => {
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
          }/>
          {result}
      </div>
    );
  }
}

export default App;
