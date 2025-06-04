export const navLinks = [
  {
    label: "Hogar",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Restaurar Imagen",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Relleno Generativo",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Remover Objeto",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Cambiar Color de Objeto",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Remover Fondo",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Perfil",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Comprar Créditos",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Gratis",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 créditos gratis",
        isIncluded: true,
      },
      {
        label: "Acceso Básico a Servicios",
        isIncluded: true,
      },
      {
        label: "Atención al cliente prioritaria",
        isIncluded: false,
      },
      {
        label: "Actualizaciones prioritarias",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Paquete Profesional",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Créditos",
        isIncluded: true,
      },
      {
        label: "Acceso Completo a los Servicios",
        isIncluded: true,
      },
      {
        label: "Atención al Cliente Prioritaria",
        isIncluded: true,
      },
      {
        label: "Actualizaciones Prioritarias",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Paquete Prémium",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Créditos",
        isIncluded: true,
      },
      {
        label: "Acceso Completo a los Servicios",
        isIncluded: true,
      },
      {
        label: "Atención al Cliente Prioritaria",
        isIncluded: true,
      },
      {
        label: "Actualizaciones Prioritarias",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restaurar Imagen",
    subTitle: "Refinar imágenes eliminando ruido e imperfecciones",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Remover Fondo",
    subTitle: "Remover el fondo de la imagen usando IA",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Relleno Generativo",
    subTitle: "Mejore las dimensiones de una imagen usando pintura con IA",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Remover Objeto",
    subTitle: "Identificar y eliminar objetos de las imágenes",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Cambiar Color de Objeto",
    subTitle: "Identificar y cambiar el color de los objetos de la imagen",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Cuadrado (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Retrato Standard (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Retrato de Teléfono (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;