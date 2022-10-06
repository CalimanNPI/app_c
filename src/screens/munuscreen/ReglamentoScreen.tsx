import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { openURL } from "expo-linking";
import Layout from "../../components/Layout";

const data = [
  {
    id: 1,
    title: "Reglamento general de usuarios",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/rgeneral.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 2,
    title: "Protocolo de Seguridad Sanitaria CDC",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/Protocolos_de_Seguridad_Sanitaria_CDC.pdf",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 3,
    title: "Reglamento Canchas de Tenis",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/Rtenis.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 4,
    title: "Reglamento Alberca y Chapoteadero",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/ralberca.pdf",
    image: "https://via.placeholder.com/400x200/",
  },

  {
    id: 6,
    title: "Reglamento Área Infantil",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/rjuegos.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 7,
    title: "Reglamento Pista Para Correr",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/pistaparacorrer.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 8,
    title:
      "Reglamento de Vestidores Damas, Caballeros, Discapacitados e Infantiles",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/rvestidores.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 5,
    title:
      "Reglamento de Gimnasio de Pesas, Ludoteca y Salones de Actividades Deportivas",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/rpesas.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 9,
    title: "Reglamento Servicio de Nutricón y Servicio de inBody",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/Reglamento_Servicio_De_Nutricion.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 12,
    title:
      "Procedimiento de Entrada y Salida de los Deportistas Participantes de los Juegos bancaros y sus Invitados",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/PROCEDIMIENTO ENTRADA Y SALIDA DEPORTISTAS JUEGOS BANCARIO.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 10,
    title: "Reglamento Estacionamiento",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/Estacionamiento.pdf",
    image: "https://via.placeholder.com/400x200/",
  },

  {
    id: 11,
    title: "Reglamento Deportistas de los Equipos Representativos",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/Reglamento Deportistas.pdf",
    image: "https://via.placeholder.com/400x200/",
  },

  {
    id: 13,
    title: "Aviso de Privacidad Corto Página de Internet",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/avisocdcac_c.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 14,
    title: "Aviso de Privacidad Íntegro Página de Internet",
    pdf: "http://192.168.1.243/api_cdc/public/reglamento/avisocdcac_i.pdf",
    image: "https://via.placeholder.com/400x200/",
  },
];

const ReglamentoScreen = () => {
  const _handleOpen = (pdf: string) => {
    openURL(pdf);
  };

  return (
    <Layout>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => _handleOpen(item.pdf)}
            >
              <View style={styles.imageContainer}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.textText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    backgroundColor: "#F2F2F7",
    flexBasis: "45%",
    marginHorizontal: 5,
  },
  cardContent: {
    padding: 17,
    justifyContent: "space-between",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
    resizeMode: "cover",
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  textText: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ReglamentoScreen;
