import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { View, Text, FlatList } from 'react-native';
import ChargePointRow from '../ChargePointRow/ChargePointRow';
import { sortData } from '../../helpers/widgetHelper';
import { styles } from './ChargePointWidget.style';

const ChargePointWidget = (data) => {
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(true);

  // Flip count from 3 to  10 and back when pressed
  // Flip text on button to more/less when pressed
  const buttonPressed = () => {
    setExpand(!expand);
    setCount(!count);
  };

  if (data) {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={sortData(data).slice(0, count ? 3 : 10)}
          renderItem={({ item }) => <ChargePointRow data={item} />}
        />
        <Button
          variant="outlined"
          sx={{
            marginTop: 3,
            borderRadius: 8,
            color: 'black',
            border: '2px solid #B9A6D2',
            textTransform: 'unset !important',
            '&:hover': {
              border: '2px solid #B9A6D2',
            },
          }}
          onClick={() => {
            buttonPressed();
          }}
        >
          {expand ? 'Show Less' : 'Show All'}
        </Button>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>NO DATA</Text>
    </View>
  );
};

export default ChargePointWidget;
