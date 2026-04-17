import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [estaLogado, setEstaLogado] = useState(false);
  
  const [endereco, setEndereco] = useState('');
  const [numeroPoste, setNumeroPoste] = useState('');

  const realizarLogin = () => {
    if (cpf.length >= 11) {
      setEstaLogado(true);
    } else {
      alert("Por favor, digite um CPF válido.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="lightbulb" size={50} color="#fffb00" />
        <Text style={styles.tituloHeader}>SIPE</Text>
      </View>

      {!estaLogado ? (
        <View style={styles.card}>
          <Text style={styles.label}>Acesso ao Menu da Solicitação:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite seu CPF (apenas números)" 
            keyboardType="numeric"
            onChangeText={setCpf}
          />
          <Button title="ENTRAR" onPress={realizarLogin} color="#004a8d" />
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.bemVindo}>Bem-vindo, Eduardo Melo!</Text>
          
          <Text style={styles.label}>Informe o Endereço:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Rua Damaso do Monte, Centro" 
            onChangeText={setEndereco}
            value={endereco}
          />

          <Text style={styles.label}>Informe o Número do Poste:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 5042" 
            keyboardType="numeric"
            onChangeText={setNumeroPoste}
            value={numeroPoste}
          />
          
          <Button 
            title="REGISTRAR OCORRÊNCIA" 
            onPress={() => alert(`Solicitação: ${endereco}, Poste nº ${numeroPoste}`)} 
            color="#2E7D32" 
          />
          
          <View style={{ marginTop: 20 }}>
            <Button title="SAIR" onPress={() => setEstaLogado(false)} color="#C62828" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0175',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  tituloHeader: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  bemVindo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004a8d',
    marginBottom: 15,
    textAlign: 'center'
  }
});
