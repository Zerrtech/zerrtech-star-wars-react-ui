import { SAGAS as HERO_SAGAS } from "./HeroListContainer";
import { SAGAS as AUTH_SAGAS } from './Auth';

const sagas = [...HERO_SAGAS, ...AUTH_SAGAS];

export default sagas;
