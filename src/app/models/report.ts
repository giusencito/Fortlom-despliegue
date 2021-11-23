import {Usuario} from "./usuario";

export interface Report {
    id: number;
    ReportDescription:string;
    UserMain: Usuario;
    UserReported: Usuario;
}
