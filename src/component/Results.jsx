import React from 'react'

const Result = ({title, extract, pageid}) => (
  <div
    className="result-card"
    onClick={
      (e) => {
        e.preventDefault();
        window.open('http://en.wikipedia.org/?curid=' + pageid);
      }
    }>
    <h2>{title}</h2>
    <p>{extract}</p>
  </div>
);

const Results = ({results})  => {

  let rows = [];
  let res = results;
  Object.keys(res).map(function(key, index) {
    rows.push(<Result
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
};

export { Result };
export default Results;
