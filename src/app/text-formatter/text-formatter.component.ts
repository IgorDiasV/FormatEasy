import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-text-formatter',
  standalone: true,
  imports: [],
  templateUrl: './text-formatter.component.html',
  styleUrl: './text-formatter.component.css'
})
export class TextFormatterComponent {
  btnClasses: string = "btn btn-primary";

  upperCase(){
      let textArea  = $("#text");
     let upperText: string = textArea.val()?.toString() || "";
     
     textArea.val(upperText.toUpperCase())
  } 

  lowerCase(){
    let textArea  = $("#text");
    let upperText: string = textArea.val()?.toString() || "";
    
    textArea.val(upperText.toLowerCase())
 } 

 captalize(){
    let textArea  = $("#text");
    let text: string = textArea.val()?.toString() || "";

    let captalizeWords: string[] = [];

    text.split(" ").forEach(word => {
      captalizeWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    })

    textArea.val(captalizeWords.join(" "))
 }
}
