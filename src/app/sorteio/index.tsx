import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <Ionicons name="sparkles-outline" size={60} color="#fdfdfd" />
      </View>

      <Text style={styles.title}>Sorteio Realizado</Text>
      <Text style={styles.subTitle}>
        Guarde segredo. Esta é a pessoa que você tirou no sorteio do amigo
        secreto. Não conte para ninguém!
      </Text>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, color: "#ccc" }}>Você tirou</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#050505" }}>
          Carlos Eduardo
        </Text>
        <Text style={{ fontSize: 16, color: "#ccc", textAlign: "center" }}>
          Dica: Gosta de livros de ficxao e café especial
        </Text>
      </View>

      <TouchableOpacity style={styles.botaoEntrar} activeOpacity={0.7}>
        <View style={styles.contentBotao}>
          <Text style={styles.textoBotao}>
            Enviamos uma copia para o seu e-mail
          </Text>
          <Ionicons name="mail" size={20} color="#ec620c" style={styles.icon} />
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
    backgroundColor: "#f0efee",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    elevation: 10,
  },

  textoBotao: {
    color: "#858383",
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

  card: {
    width: "100%",
    backgroundColor: "#ec620c",
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
