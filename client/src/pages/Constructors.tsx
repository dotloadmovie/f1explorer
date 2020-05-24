import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const ALL_CONSTRUCTORS = gql`
{
  allConstructors {
    name
    url
    constructorId
  }
}`

const Constructors:React.FC = () => {
    const {loading, error, data} = useQuery(ALL_CONSTRUCTORS);
  
    if(loading) {
      return <p>loading</p>;
    };
  
    if(error) {
      return <p>error occurred</p>;
    }
  
    return (
      <div className="App">
        {data.allConstructors.map((item:any) => {
          return <p key={item.constructorId}>{item.name}</p>
        })}
      </div>
    );
}

export default Constructors;