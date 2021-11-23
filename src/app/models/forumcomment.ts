import { Forum } from "./forum";
import { Usuario } from "./usuario";

export interface Forumcomment {
    id:number;
    forumCommentDescription:string;
    forum:Forum;
    date:string;
    user:Usuario
}

