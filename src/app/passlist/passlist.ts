import { Password } from './password';

export class Passlist {
  constructor(
    public amount: number,
    public letterAmount: number,
    public numberAmount: number,
    public passwords: string[],
    public symbolAmount?: number,
  ) { }
}
