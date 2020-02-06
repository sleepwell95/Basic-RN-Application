// import React, { useState } from 'react'; //Šio importo reikia norint naudoti State
import { View, Text, Button } from 'react-native';
import React from 'react'; //!React importas nėra būtinas jeigu yra naudojamas "State".

const CounterScreen = () => {
    //? Reikalingi kintamieji norint panaudoti "State"
  // const [counter, setCounter] = useState(0);
  let counter = 0;

  return (
    //! Tekstas Neatsinaujina nenaudojant state!
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
          console.log(counter);
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          counter--;
          console.log(counter);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>

    // <View>
    //   <Button title="Increase" onPress={() => setCounter(counter + 1)} />
    //   <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
    //   <Text>Current Count: {counter}</Text>
    // </View>
  );
};
export default CounterScreen;