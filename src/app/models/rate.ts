import {Fanatic} from "./fanatic";
import {Artist} from "./artist";

export interface Rate {
    id: number;
    rate: number;
    artist: Artist;
    fanatic: Fanatic; 
}
