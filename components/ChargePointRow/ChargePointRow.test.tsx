import React from 'react';
import renderer from 'react-test-renderer';
import ChargePointRow from './ChargePointRow';

const testData = [
  {
    stationName: 'Test',
    dlocation: 'Test',
    availableChargePoints: 'Test',
    totalChargePoints: 'Test',
    isFavourite: 'Test',
    distance: 'Test',
  },
];
test('renders correctly', () => {
  const tree = renderer.create(<ChargePointRow data={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
