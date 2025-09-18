import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Info } from '../info/info';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Info],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {

  question: string = 'What is your name?';

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  answer: string = 'unknown';

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  }

}
