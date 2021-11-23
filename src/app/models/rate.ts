import {Fanatic} from "./fanatic";
import {Artist} from "./artist";

export interface Rate {
    id: number;
    rates: number;
    artist: Artist;
    fanatic: Fanatic;
}
