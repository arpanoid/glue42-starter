import { Glue42Web} from "@glue42/web";
import { Glue42 } from "@glue42/desktop";
import { App } from "./AppCard";

let windowID = 0;

export const startApp = (glue: Glue42Web.API | Glue42.Glue) => (name: string, url: string) => {

   const windowExists = (glue.windows.list() as any).find( (w: any) => w.name === name);

   if (!windowExists) {
       glue.windows.open(name, url).catch(console.error);
   };


}