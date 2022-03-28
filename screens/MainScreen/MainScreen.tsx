import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import ChargePointWidget from '../../components/ChargePointWidget/ChargePointWidget';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARGE_POINTS } from '../../dataModel/queries';
import { styles } from './MainScreen.style';

const MainScreen = () => {
  const { data, loading } = useQuery(GET_ALL_CHARGE_POINTS);

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (data) {
    return (
      <View style={styles.pageContainer}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.textContainerWelcome}>Hello </Text>
          <Text style={styles.textContainerUserName}>USER NAME </Text>
          <Text style={styles.textContainerWelcome}>Nearby Chargers </Text>
          <Text style={styles.textContainerDesc}>
            Nearest charging stations within a radius of 50km
          </Text>
          <Text style={styles.textContainerDesc}>
            Your preference: CCS Type 2
          </Text>
          <ChargePointWidget data={data} />
        </ScrollView>
      </View>
    );
  }
};

export default MainScreen;
