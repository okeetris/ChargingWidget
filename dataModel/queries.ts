import { gql } from '@apollo/client';

export const GET_ALL_CHARGE_POINTS = gql`
  query getAllChargePoints {
    getAllChargePoints {
      stationName
      location
      availableChargePoints
      totalChargePoints
      isFavourite
      distance
    }
  }
`;
