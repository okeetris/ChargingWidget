import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MainScreen from './screens/MainScreen/MainScreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4010/graphql',
  cache: new InMemoryCache(),
});

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MainScreen />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
