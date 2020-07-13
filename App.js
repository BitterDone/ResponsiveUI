/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const getColumnImgStyle = () => ({
  aspectRatio: 1,
  // width: undefined,
  width: '100%',
  // height: undefined,
  resizeMode: 'cover',
  // height: 'auto',
  // minHeight: 15,
});

const sources = [
  'https://loremflickr.com/320/240',
  'https://www.placecage.com/250/350',
  'https://source.unsplash.com/collection/1163637',
  'https://source.unsplash.com/random',
];

const getSource = () => {
  const r = Math.random();
  const randomIndex = r * 3;
  const rounded = Math.round(randomIndex);
  const uri = sources[rounded];
  // console.log(`${r} ${randomIndex} ${rounded} ${uri}`);
  return uri;
};

const getImg = () => (
  <Image
    style={getColumnImgStyle()}
    source={{ uri: getSource() }}
  />
);

const buildColumn = (width, backgroundColor) => (
  <View style={{
    display: 'flex', justifyContent: 'flex-start', width, backgroundColor
  }}
  >
    {/* <Text>1</Text> */}
    {getImg()}
    {getImg()}
    {getImg()}
  </View>
);

// const App: () => React$Node = () => ( // Type annotations can only be used in TypeScript files.
const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {buildColumn('33%', 'lightgreen')}
          {buildColumn('33%', 'cyan')}
          {buildColumn('33%', 'yellow')}
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
