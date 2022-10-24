import { P_DATA } from "@env";

export const reglamentos = [
  {
    id: 1,
    title: "Reglamento general de usuarios",
    pdf: P_DATA + "reglamento/rgeneral.pdf",
    image: P_DATA + "reglamento/img/usuario.jpg",
  },
  {
    id: 2,
    title: "Protocolo de Seguridad Sanitaria CDC",
    pdf: P_DATA + "reglamento/Protocolos_de_Seguridad_Sanitaria_CDC.pdf",
    image: P_DATA + "reglamento/img/Seguridad_Sanitaria.jpg",
  },
  {
    id: 3,
    title: "Reglamento Canchas de Tenis",
    pdf: P_DATA + "reglamento/Rtenis.pdf",
    image: P_DATA + "reglamento/img/Tenis.jpg",
  },
  {
    id: 4,
    title: "Reglamento Alberca y Chapoteadero",
    pdf: P_DATA + "reglamento/ralberca.pdf",
    image: P_DATA + "reglamento/img/Alberca.jpg",
  },

  {
    id: 6,
    title: "Reglamento Área Infantil",
    pdf: P_DATA + "reglamento/rjuegos.pdf",
    image: P_DATA + "reglamento/img/Areainfantil.jpg",
  },
  {
    id: 7,
    title: "Reglamento Pista Para Correr",
    pdf: P_DATA + "reglamento/pistaparacorrer.pdf",
    image: P_DATA + "reglamento/img/Pistacorrer.jpg",
  },
  {
    id: 8,
    title:
      "Reglamento de Vestidores Damas, Caballeros, Discapacitados e Infantiles",
    pdf: P_DATA + "reglamento/rvestidores.pdf",
    image: P_DATA + "reglamento/img/Vestidores.jpg",
  },
  {
    id: 5,
    title:
      "Reglamento de Gimnasio de Pesas, Ludoteca y Salones de Actividades Deportivas",
    pdf: P_DATA + "reglamento/rpesas.pdf",
    image: P_DATA + "reglamento/img/GYM.jpg",
  },
  {
    id: 9,
    title: "Reglamento Servicio de Nutricón y Servicio de inBody",
    pdf: P_DATA + "reglamento/Reglamento_Servicio_De_Nutricion.pdf",
    image: P_DATA + "reglamento/img/Nutricon.jpg",
  },
  {
    id: 12,
    title:
      "Procedimiento de Entrada y Salida de los Deportistas Participantes de los Juegos bancaros y sus Invitados",
    pdf:
      P_DATA +
      "reglamento/PROCEDIMIENTO ENTRADA Y SALIDA DEPORTISTAS JUEGOS BANCARIO.pdf",
    image: P_DATA + "reglamento/img/Juegosbancaros.png",
  },
  {
    id: 10,
    title: "Reglamento Estacionamiento",
    pdf: P_DATA + "reglamento/Estacionamiento.pdf",
    image: P_DATA + "reglamento/img/Estacionamiento.jpg",
  },

  {
    id: 11,
    title: "Reglamento Deportistas de los Equipos Representativos",
    pdf: P_DATA + "reglamento/Reglamento Deportistas.pdf",
    image: P_DATA + "reglamento/img/Juegosbancaros.png",
  },

  {
    id: 13,
    title: "Aviso de Privacidad Corto Página de Internet",
    pdf: P_DATA + "reglamento/avisocdcac_c.pdf",
    image: P_DATA + "reglamento/img/AvisoPrivacidad.jpg",
  },
  {
    id: 14,
    title: "Aviso de Privacidad Íntegro Página de Internet",
    pdf: P_DATA + "reglamento/avisocdcac_i.pdf",
    image: P_DATA + "reglamento/img/AvisoPrivacidad.jpg",
  },
];

export const instalaciones = [
  {
    id: 1,
    title: "Gimnasio de Pesas",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        id: 1,
        image: P_DATA + "instalaciones/gym/1.jpg",
      },
      {
        id: 2,
        image: P_DATA + "instalaciones/gym/2.jpg",
      },
      {
        id: 3,
        image: P_DATA + "instalaciones/gym/3.jpg",
      },
      {
        id: 4,
        image: P_DATA + "instalaciones/gym/4.jpg",
      },
      {
        id: 5,
        image: P_DATA + "instalaciones/gym/5.jpg",
      },
      {
        id: 6,
        image: P_DATA + "instalaciones/gym/6.jpg",
      },
    ],
    description:
      "El Gimnasio de Pesas cuenta con todos los equipos y aparatos necesarios para fortalecer y moldear tu figura.",
  },
  {
    id: 2,
    title: "Canchas de Tenis",
    time: "2018-08-01 12:15 pm",
    image: [
      {
        id: 1,
        image: P_DATA + "instalaciones/tenis/1.jpg",
      },
      {
        id: 2,
        image: P_DATA + "instalaciones/tenis/2.jpg",
      },
      {
        id: 3,
        image: P_DATA + "instalaciones/tenis/3.jpg",
      },
      {
        id: 4,
        image: P_DATA + "instalaciones/tenis/4.jpg",
      },
      {
        id: 5,
        image: P_DATA + "instalaciones/tenis/5.jpg",
      },
      {
        id: 6,
        image: P_DATA + "instalaciones/tenis/6.jpg",
      },
      {
        id: 7,
        image: P_DATA + "instalaciones/tenis/7.jpg",
      },
      {
        id: 8,
        image: P_DATA + "instalaciones/tenis/8.jpg",
      },
    ],
    description:
      "El Centro Deportivo cuenta con 6 canchas con superficie de arcilla para la práctica del tenis; 3 de ellas se encuentran techadas y 3 al aire libre.",
  },
];

export const horario = [
  {
    id: 30,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "06:00 AM",
    closeH: "22:00 PM",
    daySer: "Lunes a Viernes",
  },
  {
    id: 31,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "07:00 AM",
    closeH: "19:00 PM",
    daySer: "Sábados",
  },
  {
    id: 33,
    day: 0,
    month: "",
    desc: "Horarios habituales del Centro Deportivo Coyoacán, A.C.",
    openH: "08:00 AM",
    closeH: "18:00 PM",
    daySer: "Domingos",
  },
  {
    id: 14,
    day: 0,
    month: "",
    desc: "Semana Santa",
    openH: "09:00 AM",
    closeH: "17:00 PM",
    daySer: "Jueves, Viernes, Sábado y Domingo",
  },

  {
    id: 3,
    day: 2,
    month: "Nov",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 4,
    day: 12,
    month: "Dic",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 5,
    day: 24,
    month: "Dic",
    desc: "",
    openH: "06:00 AM",
    closeH: "13:30 PM",
  },
  {
    id: 6,
    day: 31,
    month: "Dic",
    desc: "",
    openH: "06:00 AM",
    closeH: "13:30 PM",
  },

  {
    id: 7,
    day: 5,
    month: "Feb",
    desc: "El primer lunes de febrero en conmemoración del 5 de febrero",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 8,
    day: 21,
    month: "Mar",
    desc: "El tercer lunes de marzo en conmemoración del 21 de marzo",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 9,
    day: 1,
    month: "May",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 10,
    day: 16,
    month: "Sep",
    desc: "",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 11,
    day: 20,
    month: "Nov",
    desc: "El tercer lunes de noviembre en conmemoración del 20 de noviembre",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 12,
    day: 0,
    month: "",
    desc: "El primero de diciembre de cada seis años cuando corresponda a la transmisión del Poder Ejecutivo Federal",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },
  {
    id: 13,
    day: 0,
    month: "",
    desc: "El que determine las leyes federales y locales electorales en el caso de elecciones ordinarias, para efectuar la jornada electoral",
    openH: "09:00 AM",
    closeH: "17:00 PM",
  },

  {
    id: 1,
    day: 1,
    month: "Ene",
    desc: "El C.D.C. permanecerá cerrado.",
    openH: "00:00 AM",
    closeH: "00:00 PM",
  },
  {
    id: 2,
    day: 25,
    month: "Dic",
    desc: "El C.D.C. permanecerá cerrado.",
    openH: "00:00 AM",
    closeH: "00:00 PM",
  },
];

export const cuotas = [
  { id: 1, name: "Trámite de credencial", status: "active", cost: "180,00" },
  { id: 2, name: "Reposición de credencial", status: "active", cost: "245,00" },
  { id: 3, name: "Extravío de toalla", status: "active", cost: "245,00" },
  { id: 4, name: "Extravío de placa", status: "active", cost: "127,00" },
  {
    id: 5,
    name: "Extravío de boleto de estacionamiento",
    status: "active",
    cost: "180,00",
  },
  { id: 6, name: "Servicio de toalla", status: "active", cost: "10,00" },
  {
    id: 7,
    name: "Estacionamiento por fracciones de 15 minutos",
    status: "active",
    cost: "$4,00",
  },
  {
    id: 8,
    name: "Estacionamiento por fracciones de 15 minutos (MOTOS)",
    status: "active",
    cost: "2,50",
  },
  {
    id: 9,
    name: "Prueba de InBody® usuarios e inivitados",
    status: "active",
    cost: "5,00",
  },
  { id: 10, name: "Una cita de Nutrición", status: "active", cost: "514,00" },
  {
    id: 11,
    name: "Una cita de Nutrición invitados",
    status: "active",
    cost: "599,00",
  },
  {
    id: 12,
    name: "Paquete de 4 citas de Nutrición	",
    status: "active",
    cost: "1.542,00",
  },
  {
    id: 13,
    name: "Paquete de 4 citas de Nutrición Invitados	",
    status: "active",
    cost: "1.797,00",
  },
  { id: 14, name: "Pase de visita entre semana:", status: "", cost: "" },
  { id: 15, name: "Adulto", status: "active", cost: "240,00" },
  {
    id: 16,
    name: "Niños y estudiantes con credencial menores de 25 años	",
    status: "active",
    cost: "180,00",
  },
  { id: 17, name: "Mayores de 60 años", status: "active", cost: "180,00" },
  { id: 18, name: "Pase de visitas fines de semana:", status: "", cost: "" },
  { id: 19, name: "Adulto", status: "active", cost: "240,00" },
  {
    id: 20,
    name: "Niños y estudiantes con credencial menores de 25 años	",
    status: "active",
    cost: "350,00",
  },
  { id: 21, name: "Mayores de 60 años	", status: "active", cost: "180,00" },
];

export const menus = [
  {
    id: 1,
    title: "Menú del día",
    desc: "Los sabores que te harán sentir bien. ",
    image: P_DATA + "menus/img/dia.png",
    pdf: P_DATA + "menus/Menu-Infantil.pdf",
  },
  {
    id: 2,
    title: "Menú de desayunos",
    desc: "Los sabores que te harán sentir bien. ",
    image: P_DATA + "menus/img/desayunos.png",
    pdf: P_DATA + "menus/Menu-De-Desayunos.pdf",
  },
  {
    id: 3,
    title: "Menú comidas y cenas",
    desc: "Los sabores que te harán sentir bien. ",
    image: P_DATA + "menus/img/comidas.png",
    pdf: P_DATA + "menus/Menu-De-Comida-y-Cenas.pdf",
  },
  {
    id: 4,
    title: "Menú infantil",
    desc: "Los sabores que te harán sentir bien. ",
    image: P_DATA + "menus/img/infantil.png",
    pdf: P_DATA + "menus/Menu-Infantil.pdf",
  },
  {
    id: 5,
    title: "Menú de comida rapida",
    desc: "Los sabores que te harán sentir bien. ",
    image: P_DATA + "menus/img/fast.png",
    pdf: P_DATA + "menus/Menu-De-Comida-Rapida.pdf",
  },
];

export const valores = [
  {
    id: 1,
    title: "Honestidad",
    desc: `Con nosotros mismos y con nuestros compañeros, es una cualidad que consiste en comportarse y expresarse con sinceridad y coherencia (decir la verdad).`,
    image: "https://img.icons8.com/cute-clipart/64/fffffff/facebook-like.png",
  },
  {
    id: 2,
    title: "Justicia",
    desc: `Hacia nuestro personal, tanto en el trato como en la asignación de actividades a realizar, dependiendo estas de la capacidad de cada uno de ellos.`,
    image: "https://img.icons8.com/cute-clipart/64/000000/facebook-like.png",
  },
  {
    id: 3,
    title: "Confianza",
    desc: `En que realizáremos nuestras labores de la mejor manera, con la finalidad de satisfacer a nuestros usuarios.    `,
    image: "https://img.icons8.com/cute-clipart/64/000000/facebook-like.png",
  },
  {
    id: 4,
    title: "Compromiso",
    desc: `Con nuestros usuarios, al brindarles un servicio de calidad; con la sociedad, al brindar estabilidad a las familias de nuestro personal y con el medio ambiente al respetar y cumplir todas las normas establecidas para el cuidado de éste.    `,
    image: "https://img.icons8.com/cute-clipart/64/000000/facebook-like.png",
  },
];
