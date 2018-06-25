import { NOT_FOUND } from "redux-first-router";
export const ACTIONS = {
  HERO_LIST: "HERO_LIST",
  HERO_DETAIL: "HERO_DETAIL",
  AUTH0_CALLBACK: "AUTH0_CALLBACK",
};
export { NOT_FOUND };

export const goHeroList = () => ({
  type: ACTIONS.HERO_LIST
});

export const goAuth0Callback = () => ({
  type: ACTIONS.AUTH0_CALLBACK,
});

export const goHeroDetail = (id: number) => {
  return {
    type: ACTIONS.HERO_DETAIL,
    payload: { id }
  };
};

export const notFound = () => ({
  type: NOT_FOUND
});
