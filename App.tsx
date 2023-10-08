import React from 'react';
import { View } from 'react-native';
import {styles} from './style';
import { Layout } from './src/component/2a/Layout';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout/>
      {/* <Verify /> */}
    </View>
  );
}
