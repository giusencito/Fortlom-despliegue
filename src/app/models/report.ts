import {Usuario} from "./usuario";

export interface Report {
    id: number;
    reportDescription:string;
    UserMain: Usuario;
    UserReported: Usuario;
}
