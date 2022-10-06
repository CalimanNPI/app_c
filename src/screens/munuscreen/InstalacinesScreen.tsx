import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../components/Layout";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula...",
  },
  {
    id: 2,
    title: "Sit amet, consectetuer",
    time: "2018-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 3,
    title: "Dipiscing elit. Aenean ",
    time: "2017-08-05 12:21 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 4,
    title: "Commodo ligula eget dolor.",
    time: "2015-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 5,
    title: "Aenean massa. Cum sociis",
    time: "2013-06-12 12:11 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 6,
    title: "Natoque penatibus et magnis",
    time: "2018-08-12 12:56 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 7,
    title: "Dis parturient montes, nascetur",
    time: "2018-08-12 12:33 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 8,
    title: "Ridiculus mus. Donec quam",
    time: "2018-06-12 12:44 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 9,
    title: "Felis, ultricies nec, pellentesque",
    time: "2012-07-12 12:23 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 11,
    title: "Lorem ipsum dolor",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula...",
  },
  {
    id: 12,
    title: "Sit amet, consectetuer",
    time: "2018-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 13,
    title: "Dipiscing elit. Aenean ",
    time: "2017-08-05 12:21 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 14,
    title: "Commodo ligula eget dolor.",
    time: "2015-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 15,
    title: "Aenean massa. Cum sociis",
    time: "2013-06-12 12:11 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 16,
    title: "Natoque penatibus et magnis",
    time: "2018-08-12 12:56 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 17,
    title: "Dis parturient montes, nascetur",
    time: "2018-08-12 12:33 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 18,
    title: "Ridiculus mus. Donec quam",
    time: "2018-06-12 12:44 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 19,
    title: "Felis, ultricies nec, pellentesque",
    time: "2012-07-12 12:23 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 20,
    title: "Lorem ipsum dolor",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula...",
  },
  {
    id: 21,
    title: "Sit amet, consectetuer",
    time: "2018-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 22,
    title: "Dipiscing elit. Aenean ",
    time: "2017-08-05 12:21 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 23,
    title: "Commodo ligula eget dolor.",
    time: "2015-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 24,
    title: "Aenean massa. Cum sociis",
    time: "2013-06-12 12:11 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 25,
    title: "Natoque penatibus et magnis",
    time: "2018-08-12 12:56 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 26,
    title: "Dis parturient montes, nascetur",
    time: "2018-08-12 12:33 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
  {
    id: 27,
    title: "Ridiculus mus. Donec quam",
    time: "2018-06-12 12:44 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula...",
  },
  {
    id: 28,
    title: "Felis, ultricies nec, pellentesque",
    time: "2012-07-12 12:23 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula...",
  },
  {
    id: 29,
    title: "Lorem ipsum dolor",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula...",
  },
  {
    id: 30,
    title: "Sit amet, consectetuer",
    time: "2018-08-12 12:00 pm",
    image: [
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
      {
        img: "https://via.placeholder.com/400x200/FFB6C1/000000",
      },
    ],
    description:
      "Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...",
  },
];

const InstalacionesScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <FlatList
        data={data}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("InstalacioneDesc", {
                  id: item.id,
                  title: item.title,
                  desc: item.description,
                  images: item.image,
                })
              }
            >
              <Image
                style={styles.cardImage}
                source={{ uri: item.image[0]["img"] }}
              />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.timeContainer}>
                    <Image
                      style={styles.iconData}
                      source={{
                        uri: "https://img.icons8.com/color/96/3498db/calendar.png",
                      }}
                    />
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  /******** card **************/
  card: {
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "#F2F2F7",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },

  /******** card components **************/
  title: {
    fontSize: 18,
    fontFamily: "SpaceMono_700Bold",
    color: "#FF3B30",
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    fontFamily: "SpaceMono_700Bold",
    color: "#8E8E93",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
});

export default InstalacionesScreen;
