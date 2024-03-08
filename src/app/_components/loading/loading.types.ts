import { ComponentBase } from "..";

export type LoadingProps=Omit<ComponentBase,'isDisabled'> & {
type?:'spinner'|'ring'
}