import { Usuario } from './../models/usuario';
export interface Forum{
  id: number;
  forumName: string;
  forumDescription: string;
  userid:Usuario;


}
