import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = firestore().collection('YOUR_COLLECTION_NAME');
      const snapshot = await collectionRef.get();
      let items = [];
      snapshot.forEach(doc => {
        items.push(doc.data());
      });
      setData(items);
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Text>{item.YOUR_FIELD_NAME}</Text>
      )}
    />
  );
};

export default App;
