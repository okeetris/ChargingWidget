/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import DirectionsIcon from '@mui/icons-material/Directions';
import StarIcon from '@mui/icons-material/Star';
import { kmConversion, availableConstructer } from '../../helpers/widgetHelper';
import { styles } from './ChargePointRow.style';

const ChargePointRow = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvailable}>
        <Text style={styles.photo}>
          {availableConstructer(
            data.availableChargePoints,
            data.totalChargePoints,
          )}
        </Text>
        <Text style={styles.availText}>Available</Text>
      </View>
      <View style={styles.containerText}>
        <Text numberOfLines={1} style={styles.title}>
          {data.stationName}
        </Text>
        <Text style={styles.description}>{data.location}</Text>
      </View>
      {data.isFavourite ? (
        <StarIcon sx={{ color: 'gold', fontSize: '1rem' }} />
      ) : (
        <Text></Text>
      )}
      <View style={styles.containerDirections}>
        <DirectionsIcon sx={{ color: 'blue' }} />
        <Text>{kmConversion(data.distance)}</Text>
      </View>
    </View>
  );
};

export default ChargePointRow;
