// External Libraries
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export function ModalContent({alcoholValue, gasolineValue, closeModal}) {
  // Functions
  function calculateTheBestOption() {
    Keyboard.dismiss();

    let result = alcoholValue / gasolineValue;

    if (result < 0.7) return 'Álcool';

    return 'Gasolina';
  }

  function formatPrice(price) {
    return `R$ ${parseFloat(price).toFixed(2)}`;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gas.png')} />
      <Text style={styles.title}>Compensa usar {calculateTheBestOption()}</Text>

      <Text style={styles.subtitle}>Com os preços:</Text>
      <Text style={styles.text}>Álcool: {formatPrice(alcoholValue)}</Text>
      <Text style={styles.text}>Gasolina: {formatPrice(gasolineValue)}</Text>

      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Text style={styles.buttonText}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

//Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A1B0E',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#32CD32',
    margin: 25,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  button: {
    width: 250,
    alignItems: 'center',
    borderColor: '#FF4500',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 20,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FF4500',
  },
});
