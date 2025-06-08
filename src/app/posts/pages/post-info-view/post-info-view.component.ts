import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {Post} from '../../model/post.entity';
import {PostService} from '../../services/post.service';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-info-view',
  imports: [
    MatButton,
    RouterLink,
    NgClass,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    FormsModule,
    NgIf,
  ],
  templateUrl: './post-info-view.component.html',
  styleUrl: './post-info-view.component.css'
})
export class PostInfoViewComponent implements OnInit {
  post!: Post;
  editableDescription!: string;
  editableTitle!: string;
  isEditMode: boolean = false; // Controla el modo de edición
  selectedStatus: string = ''; // Almacena el estado seleccionado
  constructor(private route: ActivatedRoute, private postService: PostService) {}
  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        this.post = post;
        this.editableDescription = post.description;
        this.editableTitle= post.title;
        this.selectedStatus = post.status || 'Disponible'; // Estado inicial
      });
    }
  }
  updatePost(): void {
    this.post.description = this.editableDescription;
    this.post.title = this.editableTitle;
    this.post.status = this.selectedStatus; // Actualiza el estado seleccionado
    this.postService.partialUpdatePost(this.post).subscribe(
      response => {
        console.log('Comentario actualizado');
      },
      error => {
        console.error('Error al actualizar el comentario', error);
      }
    );
  }
  toggleEditMode(): void {
    if (this.isEditMode) {
      this.updatePost(); // Actualiza la orden si el modo edición está activo
    }
    this.isEditMode = !this.isEditMode; // Cambia el modo de edición
  }

  handleToggleClick(): void {
    this.toggleEditMode();
  }
  selectStatus(status: string): void {
    this.selectedStatus = status; // Guarda el estado seleccionado
  }

}
