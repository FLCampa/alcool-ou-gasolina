// External Libraries
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

// Components
import {ModalContent} from './src/components/ModalContent';

function App() {
  //States
  const [alcohol, setAlcohol] = useState();
  const [gasoline, setGasoline] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('./src/assets/logo.png')} />
        <Text style={styles.title}>Qual a melhor opção?</Text>
      </View>

      <Text style={styles.label}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.input}
        value={alcohol}
        onChangeText={text => setAlcohol(text)}
        placeholder="0.00"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.input}
        value={gasoline}
        onChangeText={text => setGasoline(text)}
        placeholder="0.00"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={() => handleOpenModal()}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Modal animationType="slide" visible={isModalOpen}>
        <ModalContent
          alcoholValue={alcohol}
          gasolineValue={gasoline}
          closeModal={() => handleCloseModal()}
        />
      </Modal>
    </View>
  );
}

//Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2A1B0E',
    padding: 5,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    margin: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    fontSize: 25,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF4500',
    borderRadius: 5,
    marginTop: 20,
    padding: 8,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
  },
});

export default App;
