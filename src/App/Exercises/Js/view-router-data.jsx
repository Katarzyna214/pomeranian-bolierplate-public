import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsarrays } from './Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsarrayJavaScripts } from './Exercise-js-arrays-methods/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsarrays,
  blockRouterMetaDataJsarrayJavaScripts,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
