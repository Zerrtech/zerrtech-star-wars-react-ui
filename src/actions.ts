import { FluxStandardAction } from "flux-standard-action";

export interface IFSARequiredPayload<Payload>
  extends FluxStandardAction<Payload> {
  payload: Payload;
}

export type FSANoPayload = FluxStandardAction<undefined>;
