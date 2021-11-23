import {Usuario} from "./usuario";
import {Artist} from "./artist";

export interface Follow {
    id:number;
    artist: Artist;
    fanatic: Usuario;
}
