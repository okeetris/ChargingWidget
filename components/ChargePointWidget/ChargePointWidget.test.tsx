import React from 'react';
import renderer from 'react-test-renderer';
import ChargePointWidget from './ChargePointWidget';

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
  const tree = renderer.create(<ChargePointWidget data={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow(<button onClick={mockCallBack}>Ok!</Button>);
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
