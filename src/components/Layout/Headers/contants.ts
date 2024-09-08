import { AppRoute } from "../../../routes/constants";
export interface INavMenu {
  title: string;
  navpath: string;
}

export const HeaderNavOptions: INavMenu[] = [{
  title: 'Category',
  navpath: AppRoute.CATEGORY
},
{
  title: 'Popular Websites',
  navpath: AppRoute.POPULAR_WEBSITES
},
// {
//   title: 'Blogs',
//   navpath: AppRoute.BLOG
// },
{
  title: 'About',
  navpath: AppRoute.ABOUT
}]