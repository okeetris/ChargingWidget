import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './MainScreen';
import { MockedProvider } from '@apollo/client/testing';
import { GET_ALL_CHARGE_POINTS } from '../../dataModel/queries';

const mocks = [
  {
    request: {
      query: GET_ALL_CHARGE_POINTS,
      variables: {},
    },
    result: {
      data: {
        getAllChargePoints: [
          {
            stationName: 'Paddington 36',
            location: 'W2 5TY, UK',
            availableChargePoints: '9',
            totalChargePoints: '18',
            isFavourite: true,
            distance: '140',
          },
          {
            stationName: 'London 2',
            location: 'W2 5TY, UK',
            availableChargePoints: '3',
            totalChargePoints: '10',
            isFavourite: false,
            distance: '12000',
          },
        ],
      },
    },
  },
];

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MainScreen />,
      </MockedProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
