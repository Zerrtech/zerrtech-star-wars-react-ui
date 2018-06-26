import { NOT_FOUND } from "redux-first-router";
export const ACTIONS = {
  HERO_LIST: "HERO_LIST",
  HERO_DETAIL: "HERO_DETAIL",
};
export { NOT_FOUND };

export const goHeroList = (idList: number[] = []) => ({
  type: ACTIONS.HERO_LIST,
  payload: { idList: idList.join("-") },
});

export const goHeroDetail = (id: number) => {
  return {
    type: ACTIONS.HERO_DETAIL,
    payload: { id },
  };
};

export const notFound = () => ({
  type: NOT_FOUND,
});
