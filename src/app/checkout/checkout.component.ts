import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('test', [Validators.required, Validators.minLength(5)]),
      email: new FormControl()
    });

    this.form.valueChanges.subscribe(valueChanges => console.log(valueChanges));
  }


  public submit() {
    console.log(this.form.value);
  }
}
