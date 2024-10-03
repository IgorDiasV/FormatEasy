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
     var textArea  = $("#text");
     var upperText: string = textArea.val()?.toString() || "";
     
     textArea.val(upperText.toUpperCase())
  } 

  lowerCase(){
    var textArea  = $("#text");
    var upperText: string = textArea.val()?.toString() || "";
    
    textArea.val(upperText.toLowerCase())
 } 
}
