// Estas son las rutas que vamos a usar en la aplicacion
// Es conveniente colocarle un tipado extricto para que cada propiedad del objeto se respete lo que se espera

import { Ionicons } from "@expo/vector-icons";

// Asi le agregamos el tipado a nuestro objeto de rutas y principalmente a la parte de los Iconos le agregarmos un tipado de los iconos de Ionic
interface MenuRoute {
  title: string,
  icon: keyof typeof Ionicons.glyphMap,
  name: string,
}

export const menuRoutes: MenuRoute[] = [
  {
    title: 'Pull to refresh',
    icon: 'refresh-outline',
    name: 'pull-to-refresh/index',
  },
  {
    title: 'Section List',
    icon: 'list-outline',
    name: 'section-list/index',
  },
  {
    title: 'Modal',
    icon: 'copy-outline',
    name: 'modal', // Se cambia para que por defecto entre a "_layout.tsx"
  },
  {
    title: 'InfiniteScroll',
    icon: 'download-outline',
    name: 'infinite-scroll/index',
  },
  {
    title: 'Slides',
    icon: 'flower-outline',
    name: 'slides/index',
  },
  {
    title: 'Themes',
    icon: 'flask-outline',
    name: 'themes/index',
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    title: 'Switches',
    icon: 'toggle-outline',
    name: 'switches/index',
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    name: 'alerts/index',
  },
  {
    title: 'TextInputs',
    icon: 'document-text-outline',
    name: 'text-inputs/index',
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    title: 'Animation 101',
    icon: 'cube-outline',
    name: 'animation-101/index',
  },
  {
    title: 'Animation 102',
    icon: 'albums-outline',
    name: 'animation-102/index',
  },
];

export const allRoutes: MenuRoute[] = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
