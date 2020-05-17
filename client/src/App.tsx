import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";


const ALL_CIRCUITS = gql`
{
  allCircuits {
    name,
    url,
    circuitId

  }
}
`


function App() {
  const {loading, error, data} = useQuery(ALL_CIRCUITS);
  
  if(loading) {
    return <p>loading</p>;
  };

  if(error) {
    return <p>error occurred</p>;
  }

  return (
    <div className="App">
      {data.allCircuits.map((item:any) => {
        return <p key={item.circuitId}>{item.name}</p>
      })}
    </div>
  );
}

export default App;
