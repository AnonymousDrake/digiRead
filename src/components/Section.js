import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SubSection from './SubSection';

const Section = ({ data, fetchData, onBookPress }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SubSection data={data.continueReading} fetchData={fetchData} onBookPress={onBookPress} category="continueReading" />
      <SubSection data={data.recommended} fetchData={fetchData} onBookPress={onBookPress} category="recommended" />
      <SubSection data={data.myBooks} fetchData={fetchData} onBookPress={onBookPress} category="myBooks" />
      <SubSection data={data.favorites} fetchData={fetchData} onBookPress={onBookPress} category="favorites" />
      <SubSection data={data.purchased} fetchData={fetchData} onBookPress={onBookPress} category="purchased" />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Section;