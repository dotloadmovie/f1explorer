import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Races from "../components/fragments/Races";

const DRIVER_AND_RACES = gql`
  query AllDrivers($id: Int) {
    allDrivers(where: { driverId: $id }) {
      surname
      forename
      url
      driverId
      nationality
      dob
    }
    allDriverStandings(where: { driverId: $id }) {
      position
      points
      raceId
    }
  }
`;

const Driver: React.FC = () => {
  const { id } = useParams();

  const { loading, error, data, fetchMore } = useQuery(DRIVER_AND_RACES, {
    variables: {
      id: parseInt(id),
    },
  });

  const getAllRaceIds = () => {
    return data.allDriverStandings.map((standing: any) => {
      return standing.raceId;
    });
  };

  return (
    <div>
      {data && JSON.stringify(data.allDrivers[0])}
      <div>{data && <Races raceIds={getAllRaceIds()} />}</div>
    </div>
  );
};

export default Driver;
