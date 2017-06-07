import { Component, OnInit } from '@angular/core';

import { Passlist } from './passlist';
import { PasswordAmountType } from './password';

@Component({
  selector: 'app-passlist',
  templateUrl: './passlist.component.html',
  styleUrls: ['./passlist.component.css']
})
export class PasslistComponent implements OnInit {

  passlist: Passlist;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.passlist = new Passlist(0, 0, 0, [], 0);
  }

  onReset = (): void => {
    this.submitted = false;
    this.onClear('passlistContainer');
  }

  onSubmit = (): void => {
    this.submitted = true;
    this.generatePassword(this.passlist);
  }

  onClear = (elementId: string): void => {
    document.getElementById(elementId).innerHTML = '';
  }

  private generatePassword = (passlist: Passlist): Passlist => {
    let tempPset = '';
    if (passlist.amount < 1) {
      const lset = this.generateCharset(10, PasswordAmountType.LETTER);
      const nset = this.generateCharset(6, PasswordAmountType.NUMBER);
      passlist.passwords.push(lset + nset);
    } else if (passlist.amount >= 1 && passlist.amount <= 100) {
      for (let i = 0; i < passlist.amount; i++) {
        if (passlist.letterAmount > 0) {
          let lset = this.generateCharset(passlist.letterAmount, PasswordAmountType.LETTER);
          tempPset += lset;
          lset = '';
        }
        if (passlist.numberAmount > 0) {
          let nset = this.generateCharset(passlist.numberAmount, PasswordAmountType.NUMBER);
          tempPset += nset;
          nset = '';
        }
        if (passlist.symbolAmount > 0) {
          let sset = this.generateCharset(passlist.symbolAmount, PasswordAmountType.SYMBOL);
          tempPset += sset;
          sset = '';
        }
        passlist.passwords.push(tempPset);
        tempPset = '';
      }
    }
    return this.passlist;
  }

  private generateCharset = (amount: number, type: PasswordAmountType): string => {
    // TODO
    // 48 - 57, 65-90, 97-122, 33-47
    const tempArr: string[] = [];
    if (type === PasswordAmountType.LETTER) {
      for (let i = 0; i < amount; i++) {
        const flipBit = Math.round(Math.random());
        if (flipBit === 0) {
          const c = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
          tempArr.push(c);
        } else if (flipBit === 1) {
          const c = String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65);
          tempArr.push(c);
        }
      }
    } else if (type === PasswordAmountType.NUMBER) {
      for (let i = 0; i < amount; i++) {
        const n = String.fromCharCode(Math.floor(Math.random() * (57 - 48)) + 48);
        tempArr.push(n);
      }
    } else if (type === PasswordAmountType.SYMBOL) {
      for (let i = 0; i < amount; i++) {
        const s = String.fromCharCode(Math.floor(Math.random() * (47 - 33)) + 33);
        tempArr.push(s);
      }
    }
    const rawStr: string = tempArr.join('');
    return rawStr;
  }
}
