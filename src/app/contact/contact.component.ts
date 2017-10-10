import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private model: Contact;
  private contact: FormGroup;
  constructor() {
    this.contact = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      help: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  private onSubmit(form): void {
    this.model = form.value;
    console.log(JSON.stringify(this.model));
    this.contact.reset();
  }

}
