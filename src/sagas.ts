import { SAGAS as HERO_SAGAS } from "./HeroListContainer";
import { SAGAS as SQUAD_SAGAS } from "./HeroListContainer/SquadList";
import { SAGAS as PAGE_SAGAS } from "./page";

const sagas = [...HERO_SAGAS, ...SQUAD_SAGAS, ...PAGE_SAGAS];

export default sagas;
