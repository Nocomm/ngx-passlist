import { Component, OnInit } from '@angular/core';

import { Passlist } from './passlist';

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
    // TODO
  }

  onSubmit = (): void => {
    this.submitted = true;
    this.generatePassword(this.passlist);
  }

  private generatePassword = (passlist: Passlist): Passlist => {
    if (passlist.amount < 1) {
      for (let i = 0; i < 2; i++) {
        const password = 'abc';
        this.passlist.passwords.push(password);
      }
    }

    return this.passlist;
  }

  private generateCharset = (amount: number): string => {
    // TODO
    return 'abc';
  }
}
