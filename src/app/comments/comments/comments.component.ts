import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: ``
})
export class CommentsComponent {
  comments = [
    { id: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ex id nibh gravida hendrerit. Morbi blandit, sem id commodo commodo,', user: 'Nathaniel B' },
    { id: 1, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ex id nibh gravida hendrerit. Morbi blandit, sem id commodo commodo,', user: 'Randy H' },
    { id: 2, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ex id nibh gravida hendrerit. Morbi blandit, sem id commodo commodo,', user: 'Sentry A' },
  ]
}
