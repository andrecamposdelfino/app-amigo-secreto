import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Participantes() {
  const participantes = [
    {
      id: 1,
      nome: "André Campos",
      dica: "Gosto de livros de ficção científica",
      email: "andre.campos@email.com",
    },
    {
      id: 2,
      nome: "Maria Silva",
      dica: "Gosto de música clássica",
      email: "maria.silva@email.com",
    },
    {
      id: 3,
      nome: "João Souza",
      dica: "Gosto de jogos de tabuleiro",
      email: "joao.souza@email.com",
    },
    {
      id: 4,
      nome: "Ana Oliveira",
      dica: "Gosto de plantas e jardinagem",
      email: "ana.oliveira@email.com",
    },
    {
      id: 5,
      nome: "Carlos Pereira",
      dica: "Gosto de esportes ao ar livre",
      email: "carlos.pereira@email.com",
    },
    {
      id: 6,
      nome: "Fernanda Costa",
      dica: "Gosto de arte e pintura",
      email: "fernanda.costa@email.com",
    },
    {
      id: 7,
      nome: "Ricardo Almeida",
      dica: "Gosto de tecnologia e gadgets",
      email: "ricardo.almeida@email.com",
    },
    {
      id: 8,
      nome: "Sofia Martins",
      dica: "Gosto de culinária e gastronomia",
      email: "sofia.martins@email.com",
    },
    {
      id: 9,
      nome: "Lucas Fernandes",
      dica: "Gosto de música e instrumentos musicais",
      email: "lucas.fernandes@email.com",
    },
    {
      id: 10,
      nome: "Mariana Rocha",
      dica: "Gosto de viagens e aventuras",
      email: "mariana.rocha@email.com",
    },
    {
      id: 11,
      nome: "Pedro Lima",
      dica: "Gosto de esportes e atividades físicas",
      email: "pedro.lima@email.com",
    },
  ];

  function handleSorteio() {
    // Lógica para entrar no grupo e participar do sorteio
    const sorteio =
      participantes[Math.floor(Math.random() * participantes.length)];
    Alert.alert(
      "Sorteio Realizado!",
      `O participante sorteado é: ${sorteio.nome}`,
    );

    let novaLista = participantes.filter(
      (participante) => participante.id !== sorteio.id,
    );
    console.log("Lista atualizada de participantes:", novaLista);
    // router.push("./sorteio");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participantes</Text>
      <View style={styles.content}>
        <FlatList
          data={participantes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{ padding: 5, borderBottomWidth: 1, borderColor: "#ccc" }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
              <Text>{item.dica}</Text>
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
