import ILevel from "./ILevel";

export default interface IMap {
  id: string;
  name: string;
  levels: ILevel[];
  mapColor: string;
}
