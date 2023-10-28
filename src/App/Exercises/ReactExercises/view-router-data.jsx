import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok8/router-data';
import { Blok9MetaData } from './Blok9/router-data';
import { routerMetaData as FormsRouterMetaData } from './Forms/router-data';
import { routerMetaData as BasicFormsRouterMetaData } from './BasicForms/router-data';
import { ReduxMetaData } from './Redux/router-data';
import { ReduxTestMetaData } from './TestowyKomponent/router-data';
import { blockRouterMetaData as ToDoWithServer } from './ToDoWithServer/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8MetaData,
  Blok9MetaData,
  FormsRouterMetaData,
  BasicFormsRouterMetaData,
  ReduxMetaData,
  ReduxTestMetaData,
  ToDoWithServer,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
