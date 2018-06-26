import { SAGAS as HERO_SAGAS } from "./HeroListContainer";
import { SAGAS as SQUAD_SAGAS } from "./HeroListContainer/SquadList";

const sagas = [...HERO_SAGAS, ...SQUAD_SAGAS];

export default sagas;
