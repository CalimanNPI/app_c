import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Layout from "../../components/Layout";

const items = [
  {
    id: 1,
    title: "Honestidad",
    desc: `Con nosotros mismos y con nuestros compañeros, es una cualidad que consiste en comportarse y expresarse con sinceridad y coherencia (decir la verdad).`,
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 2,
    title: "Justicia",
    desc: `Hacia nuestro personal, tanto en el trato como en la asignación de actividades a realizar, dependiendo estas de la capacidad de cada uno de ellos.`,
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 3,
    title: "Confianza",
    desc: `En que realizáremos nuestras labores de la mejor manera, con la finalidad de satisfacer a nuestros usuarios.    `,
    image: "https://via.placeholder.com/400x200/",
  },
  {
    id: 4,
    title: "Compromiso",
    desc: `Con nuestros usuarios, al brindarles un servicio de calidad; con la sociedad, al brindar estabilidad a las familias de nuestro personal y con el medio ambiente al respetar y cumplir todas las normas establecidas para el cuidado de éste.    `,
    image: "https://via.placeholder.com/400x200/",
  },
];

const AboutScreen = () => {
  return (
    <ScrollView>
      <Layout>
        <View style={{ width: "100%" }}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://img.icons8.com/cute-clipart/64/000000/facebook-like.png",
              }}
            />
            <Text style={styles.companyName}>Nuestra historia</Text>
            <Text style={styles.slogan}>Centro Deportivo Coyoacán A.C.</Text>
            <View style={styles.descriptionContent}>
              <Text style={styles.description}>
                Centro Deportivo Coyoacán, A.C. es una asociación civil, no
                lucrativa, constituida en 1977 por varias instituciones con el
                objetivo de brindar a sus empleados y a sus familiares un
                espacio exclusivo de esparcimiento, desarrollo físico y mental.
              </Text>
            </View>
          </View>

          {items.map((item) => {
            return (
              <View style={styles.containerItem} key={item["id"]}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item["image"],
                  }}
                />

                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text style={[styles.textText, { color: "#FF3B30" }]}>
                      {item["title"]}
                    </Text>
                  </View>
                  <Text style={styles.textText}> {item["desc"]}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textText: {
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    fontSize: 16,
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FF3B30",
    marginVertical: 5,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  companyName: {
    fontSize: 32,
    fontFamily: "SpaceMono_700Bold",
    color: "#F2F2F7",
  },
  slogan: {
    fontSize: 18,
    fontFamily: "SpaceMono_700Bold",
    color: "#F2F2F7",
    marginTop: 10,
  },
  descriptionContent: {
    padding: 30,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    color: "#F2F2F7",
  },

  containerItem: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F2F2F7",
    marginVertical: 5,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
});

export default AboutScreen;
