import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface RacesInterface {
  raceIds: number[];
}

const ALL_RACES = gql`
  query AllRaces($raceIds: [Int]) {
    allRaces(where: { raceId_in: $raceIds }, sortBy: date_ASC) {
      name
      circuitId
      date
    }
  }
`;
const Races: React.FC<RacesInterface> = ({ raceIds }) => {
  const { data, error, loading } = useQuery(ALL_RACES, {
    variables: {
      raceIds,
    },
  });

  return <div>Races... {data && JSON.stringify(data)}</div>;
};

export default Races;
