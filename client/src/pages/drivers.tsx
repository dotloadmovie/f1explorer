import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const ALL_DRIVERS = gql`
{
  allDrivers {
    surname,
    forename
    url,
    driverId

  }
}`

const Drivers:React.FC = () => {
    const {loading, error, data} = useQuery(ALL_DRIVERS);
  
    if(loading) {
      return <p>loading</p>;
    };
  
    if(error) {
      return <p>error occurred</p>;
    }
  
    return (
      <div className="App">
        {data.allDrivers.map((item:any) => {
          return <p key={item.driverId}>{item.forename} {item.surname}</p>
        })}
      </div>
    );
}

export default Drivers;