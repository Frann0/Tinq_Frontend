import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  maxLength: number = 500;


  postForm = this.fb.group({
    title: [''],
    content: [''],
    tags: ['']
  });

  constructor(private fb: FormBuilder) {

  }


  post() {

  }

  ngOnInit(): void {
    const characterCount =  document.getElementById("content");
    const counter = document.getElementById("current");

    // @ts-ignore
    characterCount.addEventListener('input', function (e){
      const target = e.target;

      // Get the `maxlength` attribute
      // @ts-ignore
      const maxLength = target.getAttribute('maxlength');

      // Count the current number of characters
      // @ts-ignore
      const currentLength = target.value.length;

      // @ts-ignore
      counter.innerHTML = `${currentLength}/${maxLength}`;
    })
  }
}
