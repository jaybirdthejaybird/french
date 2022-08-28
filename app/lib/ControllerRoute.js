import { root, controllers } from './App.js';
import CamelCase from './CamelCase.js';
export default function getRoute(controller) {
    return `${root}.${controllers}.${CamelCase(controller)}`;
}
