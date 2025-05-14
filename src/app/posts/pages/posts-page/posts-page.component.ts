import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {PostCardComponent} from '../../components/post-card/post-card.component';
import {Post} from '../../model/post.entity';
import {PostService} from '../../services/post.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {PostCardCreateComponent} from '../../components/post-card-create/post-card-create.component';

@Component({
  selector: 'app-posts-page',
  imports: [
    MatButton,
    NgIf,
    PostCardComponent,
    NgForOf
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent implements OnInit{
  protected postData!: Post;
  private postService: PostService = inject(PostService);
  protected dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();
  private dialog: MatDialog = inject(MatDialog);

  constructor() {
    this.dataSource = new MatTableDataSource();
    console.log(this.postService);
  }
  private getAllPosts() {
    this.postService.getAll().subscribe((response: Post[]) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  ngOnInit(): void {
    this.getAllPosts();
  }
  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(PostCardCreateComponent, {
      width: '50%',
      height: '40%',
      data: { post: new Post({}) },
      disableClose: false,
      panelClass: 'custom-dialog-container'
    });
    dialogRef.componentInstance.postAddRequested.subscribe((post: Post) => {
      this.onPostAddRequested(post);
    });

  }
  protected onPostAddRequested(item: Post) {
    this.postData = item;
    this.createPost();
  }
  private createPost() {


    this.postService.create(this.postData).subscribe((response: Post) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }
}
