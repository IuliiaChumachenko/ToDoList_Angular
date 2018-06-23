import { JohnsnowInterface } from './johnsnowInterface';

export class Johnsnow implements JohnsnowInterface {
  constructor(public name: string, public gender: string) {
  }
}
