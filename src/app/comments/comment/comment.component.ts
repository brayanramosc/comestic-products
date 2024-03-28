import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: ``
})

export class CommentComponent {
  @Input() comment!: string;
  @Input() user!: string;
}
