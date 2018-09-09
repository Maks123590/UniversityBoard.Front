import { find } from 'lodash';
import routes from '../constants/routes';

export const getPath = value => find(routes, route => route.value === value).path;

export default getPath;
