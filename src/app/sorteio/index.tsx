import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { id } = useLocalSearchParams();

export default function Index() {
  const { nome, dica } = useLocalSearchParams();

  return (
    <ScrollView style={{ flexGrow: 1 }}>
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
          <Text style={{ fontSize: 16, color: "#ccc", textAlign: "left" }}>
            Você tirou
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#050505",
              textAlign: "center",
            }}
          >
            {nome}
          </Text>
          <Text style={{ fontSize: 16, color: "#ccc", textAlign: "left" }}>
            Dica: {dica}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
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
    height: 150,
    backgroundColor: "#ec620c",
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
