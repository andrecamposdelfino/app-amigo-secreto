import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function Index() {
  function handleSorteio() {
    router.push("./sorteio");
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
        />
      </View>

      <TouchableOpacity
        style={styles.botaoEntrar}
        activeOpacity={0.7}
        onPress={handleSorteio}
      >
        <View style={styles.contentBotao}>
          <Text style={styles.textoBotao}>
            Entrar para o grupo e participar do sorteio
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
