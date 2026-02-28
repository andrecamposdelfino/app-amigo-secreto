import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [nome, setNome] = useState("");
  const [dica, setDica] = useState("");
  const [email, setEmail] = useState("");

  async function cadastrar() {
    let participantes = [];

    if (!nome || !dica || !email) {
      Alert.alert("Preencha todos os campos para participar do sorteio");
      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem("participantes");
      const participantes = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      const novoParticipante = {
        id: Date.now().toString(),
        nome,
        dica,
        email,
      };

      participantes.push(novoParticipante);

      await AsyncStorage.setItem(
        "participantes",
        JSON.stringify(participantes),
      );
      Alert.alert(
        "Cadastro realizado com sucesso! Você já está participando do sorteio.",
      );

      setNome("");
      setDica("");
      setEmail("");
    } catch (error) {
      console.log("Erro ao cadastrar participante" + error);
    }
  }

  function entrar() {
    router.push("/participantes");
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <Ionicons name="gift-outline" size={60} color="#fdfdfd" />
      </View>

      <Text style={styles.title}>Amigo Secreto</Text>
      <Text style={styles.subTitle}>
        Bem vindo! Insira seu nome para entrar no grupo e participar do sorteio
      </Text>

      <View style={styles.formulario}>
        <Text>Seu Nome</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 8,
          }}
          placeholder="Ex. André Campos"
          value={nome}
          onChangeText={setNome}
        />

        <Text>Dica de Presente</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 8,
          }}
          placeholder="Ex. Gosto de livros de ficção científica"
          value={dica}
          onChangeText={setDica}
        />

        <Text>Seu Email</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
          }}
          placeholder="Ex. andre@dominio.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.botaoEntrar}
        activeOpacity={0.7}
        onPress={cadastrar}
      >
        <View style={styles.contentBotao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoEntrar}
        activeOpacity={0.7}
        onPress={entrar}
      >
        <View style={styles.contentBotao}>
          <Text style={styles.textoBotao}>
            Ver participantes e participar do Sorteio
          </Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 16,
    color: "#bdbcbc",
    textAlign: "center",
    marginTop: 10,
  },

  formulario: {
    width: "100%",
    marginTop: 20,
  },

  botaoEntrar: {
    width: "100%",
    backgroundColor: "#ec620c",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    elevation: 10,
  },

  textoBotao: {
    color: "#fff",
  },

  icon: {
    marginLeft: 4,
  },

  contentBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  contentIcon: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ec620c",
    elevation: 10,
  },
});
