import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {FormsModule, NgForm} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatInput} from '@angular/material/input';
import {Post} from '../../model/post.entity';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-post-card-create',
  imports: [
    MatDialogContent,
    MatIcon,
    MatFormField,
    FormsModule,
    MatIconButton,
    MatFormField,
    MatInput,
    MatFormField,
    MatButton
  ],
  templateUrl: './post-card-create.component.html',
  styleUrl: './post-card-create.component.css'
})
export class PostCardCreateComponent {
  @Input() post!: Post;
  @Output() postAddRequested = new EventEmitter<Post>();
  @ViewChild('postForm', {static: false}) protected postForm!: NgForm;
  constructor(private dialogRef: MatDialogRef<PostCardCreateComponent>) {
    this.post = new Post({});
  }
  private isValid = () => this.postForm.valid;

  protected onClose() {
    this.dialogRef.close();
  }
  protected onSubmit() {
    if (this.isValid()) {
      let emitter =  this.postAddRequested;
      emitter.emit(this.post);
    } else {
      console.error('Invalid form data');
    }
  }
}
