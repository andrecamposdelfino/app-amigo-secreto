import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { router } from "expo-router";

interface Participante {
  id: string;
  nome: string;
  dica: string;
  email: string;
}

export default function Participantes() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  async function getParticipantes() {
    try {
      const dados = await AsyncStorage.getItem("participantes");

      if (dados) {
        setParticipantes(JSON.parse(dados));
      }
    } catch (error) {
      console.log("Erro ao buscar participantes" + error);
    }
  }

  useEffect(() => {
    getParticipantes();
  }, []);

  function handleSorteio() {
    const sorteio =
      participantes[Math.floor(Math.random() * participantes.length)];
    console.log(sorteio);

    Alert.alert(`Nome do Sorteado : ${sorteio.nome}`);

    const newLista = participantes.filter((item) => item.id !== sorteio.id);
    console.log(newLista);
    setParticipantes(newLista);

    router.push({
      pathname: "/sorteio",
      params: {
        nome: sorteio.nome,
        dica: sorteio.dica,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participantes</Text>
      <View style={styles.content}>
        <FlatList
          data={participantes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                borderColor: "#ececec",
                borderWidth: 1,
                marginBottom: 5,
                borderRadius: 8,
                height: 100,
              }}
              key={item.id}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.nome}
              </Text>
              <Text>Dica : {item.dica}</Text>
              <Text style={{ color: "#555" }}>{item.email}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.botaoEntrar}
        activeOpacity={0.7}
        onPress={handleSorteio}
      >
        <View style={styles.contentBotao}>
          <Text style={styles.textoBotao}>Realizar Sorteio</Text>
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
    padding: 15,
  },
  icon: {
    marginLeft: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },

  content: {
    flex: 1,
    width: "100%",
  },

  botaoEntrar: {
    width: "100%",
    backgroundColor: "#ec620c",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    elevation: 10,
    marginBottom: 30,
  },

  contentBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#fff",
  },
});
