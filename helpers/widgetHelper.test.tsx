import { sortData, kmConversion, availableConstructer } from './widgetHelper';

describe('Sort Data Helpers', () => {
  const testData = {
    data: {
      getAllChargePoints: [
        {
          stationName: 'Test',
          dlocation: 'Test',
          availableChargePoints: 'Test',
          totalChargePoints: 'Test',
          isFavourite: 'Test',
          distance: '300',
        },
        {
          stationName: 'Test',
          dlocation: 'Test',
          availableChargePoints: 'Test',
          totalChargePoints: 'Test',
          isFavourite: 'Test',
          distance: '200',
        },
        {
          stationName: 'Test',
          dlocation: 'Test',
          availableChargePoints: 'Test',
          totalChargePoints: 'Test',
          isFavourite: 'Test',
          distance: '100',
        },
        {
          stationName: 'Test',
          dlocation: 'Test',
          availableChargePoints: 'Test',
          totalChargePoints: 'Test',
          isFavourite: 'Test',
          distance: '150',
        },
        {
          stationName: 'Test',
          dlocation: 'Test',
          availableChargePoints: 'Test',
          totalChargePoints: 'Test',
          isFavourite: 'Test',
          distance: '299',
        },
      ],
    },
  };

  it('Gives you the shortest distance charge point first', () => {
    const result = sortData(testData);
    const answer = Number(result[0].distance);
    expect(answer).toEqual(100);
  });

  it('Gives you the longest distance charge point last', () => {
    const result = sortData(testData);
    const answer = Number(result[result.length - 1].distance);
    expect(answer).toEqual(300);
  });
});

describe('KM conversion helpers', () => {
  it('Converts to KM if dustance is over 1000', () => {
    const testValue = 1100;
    const answer = kmConversion(testValue);
    expect(answer).toEqual('1.1km');
  });

  it('Converts to M if distance is under 1000', () => {
    const testValue = 800;
    const answer = kmConversion(testValue);
    expect(answer).toEqual('800m');
  });
});

describe('Available Constructer Helpers', () => {
  it('Takes input and produces avaiable element', () => {
    const answer = availableConstructer(10, 11);
    expect(answer).toEqual('10/11');
  });
});
