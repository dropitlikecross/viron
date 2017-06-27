import application from './application';
import components from './components';
import current from './current';
import dmc from './dmc';
import drawers from './drawers';
import endpoints from './endpoints';
import location from './location';
import menu from './menu';
import modals from './modals';
import oauthEndpointKey from './oauthEndpointKey';
import page from './page';
import toasts from './toasts';

const constants = {
  APPLICATION: 'APPLICATION',
  APPLICATION_ISLAUNCHED: 'APPLICATION_ISLAUNCHED',
  APPLICATION_ISNAVIGATING: 'APPLICATION_ISNAVIGATING',
  APPLICATION_ISNETWORKING: 'APPLICATION_ISNETWORKING',
  COMPONENTS: 'COMPONENTS',
  COMPONENTS_GET: 'COMPONENTS_GET',
  CURRENT: 'CURRENT',
  DMC: 'DMC',
  DMC_PAGES: 'DMC_PAGES',
  DMC_NAME: 'DMC_NAME',
  DMC_DASHBOARD: 'DMC_DASHBOARD',
  DMC_MANAGE: 'DMC_MANAGE',
  DRAWERS: 'DRAWERS',
  ENDPOINTS: 'ENDPOINTS',
  ENDPOINTS_ONE: 'ENDPOINTS_ONE',
  ENDPOINTS_ONE_BY_URL: 'ENDPOINTS_ONE_BY_URL',
  ENDPOINTS_NEXT_KEY: 'ENDPOINTS_NEXT_KEY',
  LOCATION: 'LOCATION',
  LOCATION_NAME: 'LOCATION_NAME',
  LOCATION_ROUTE: 'LOCATION_ROUTE',
  MENU_OPENED: 'MENU_OPENED',
  MENU_ENABLED: 'MENU_ENABLED',
  MODALS: 'MODALS',
  OAUTH_ENDPOINT_KEY: 'OAUTH_ENDPOINT_KEY',
  PAGE: 'PAGE',
  PAGE_NAME: 'PAGE_NAME',
  PAGE_COMPONENTS: 'PAGE_COMPONENTS',
  TOASTS: 'TOASTS'
};

export default {
  [constants.APPLICATION]: application.all,
  [constants.APPLICATION_ISLAUNCHED]: application.isLaunched,
  [constants.APPLICATION_ISNAVIGATING]: application.isNavigating,
  [constants.APPLICATION_ISNETWORKING]: application.isNetworking,
  [constants.COMPONENTS]: components.all,
  [constants.COMPONENTS_ONE]: components.one,
  [constants.CURRENT]: current.all,
  [constants.DMC]: dmc.all,
  [constants.DMC_PAGES]: dmc.pages,
  [constants.DMC_NAME]: dmc.name,
  [constants.DMC_DASHBOARD]: dmc.dashboard,
  [constants.DMC_MANAGE]: dmc.manage,
  [constants.DRAWERS]: drawers.all,
  [constants.ENDPOINTS]: endpoints.all,
  [constants.ENDPOINTS_ONE]: endpoints.one,
  [constants.ENDPOINTS_ONE_BY_URL]: endpoints.oneByURL,
  [constants.ENDPOINTS_NEXT_KEY]: endpoints.nextKey,
  [constants.LOCATION]: location.all,
  [constants.LOCATION_NAME]: location.name,
  [constants.LOCATION_ROUTE]: location.route,
  [constants.MENU_OPENED]: menu.opened,
  [constants.MENU_ENABLED]: menu.enabled,
  [constants.MODALS]: modals.all,
  [constants.OAUTH_ENDPOINT_KEY]: oauthEndpointKey.all,
  [constants.PAGE]: page.all,
  [constants.PAGE_NAME]: page.name,
  [constants.PAGE_COMPONENTS]: page.components,
  [constants.TOASTS]: toasts.all
};

export {
  constants
};
