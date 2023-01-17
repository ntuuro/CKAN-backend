import Router from 'next/router';

export const changeRoute = (route: any, query?:any) => {
  Router.replace(route, query);
};
