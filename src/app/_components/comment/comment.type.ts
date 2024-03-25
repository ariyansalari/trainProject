import { Comment } from "@/types";
import { ComponentBase } from "..";

export type CommentProps = Omit<ComponentBase,'isDisabled'|'size'> & Comment ;