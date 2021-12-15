import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostsService } from '../../shared/posts.service';
import { TinqDto } from '../../shared/tinqDto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  maxLength: number = 500;
//TODO PROPER USERID SHOULD BE ADDED HERE
  postForm = this.fb.group({
    title: [''],
    body: [''],
    tags: ['']
  });

  constructor(private fb: FormBuilder, private _postService: PostsService) {}

  createPost() {
    // @ts-ignore
    let title = this.postForm.get('title').value;
    // @ts-ignore
    let body = this.postForm.get('body').value;
    // @ts-ignore
    let tags = this.postForm.get('tags').value;
    let userId = JSON.parse(<string>localStorage.getItem("user")).id;
    this._postService.createPost(title, body, tags, userId);
    window.location.reload();
  }

  ngOnInit(): void {
    const characterCount = document.getElementById('content');
    const counter = document.getElementById("current");

    // @ts-ignore
    characterCount.addEventListener('input', function (e) {
      const target = e.target;

      // Get the `maxlength` attribute
      // @ts-ignore
      const maxLength = target.getAttribute('maxlength');

      // Count the current number of characters
      // @ts-ignore
      const currentLength = target.value.length;

      // @ts-ignore
      counter.innerHTML = `${currentLength}/${maxLength}`;
    });
  }
}
