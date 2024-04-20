import { Menu } from "../models/menu.model";

export const MENU_ITEMS: Menu[] = [
  {
    icon: 'grid_view',
    title: 'Dashboard',
    url: '/dashboard/home'
  },
  {
    icon: 'web',
    title: 'Proyectos',
    url: '/dashboard/projects'
  },
  {
    icon: 'person_outline',
    title: 'Usuarios',
    url: '/dashboard/users'
  },
  {
    icon: 'fullscreen_exit',
    title: 'Roles',
    url: '/dashboard/roles'
  },
];
