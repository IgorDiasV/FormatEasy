import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text-formatter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-formatter.component.html',
  styleUrl: './text-formatter.component.css'
})

export class TextFormatterComponent {
  btnClasses: string = "btn btn-primary";
  text: string = "";

  upperCase(){
    this.text = this.text.toUpperCase();
  } 

  lowerCase(){
    this.text = this.text.toLowerCase();
 } 

 captalize(){
    let captalizeWords: string[] = [];
    this.text.split(" ").forEach(word => {
      captalizeWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    })

    this.text = captalizeWords.join(" ");
 }
}
