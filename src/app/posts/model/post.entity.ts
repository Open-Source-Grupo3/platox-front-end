export class Post {
  id: number;
  title: string;
  description: string;
  image:string;
  status: string;

  constructor(post: {
    id?: number,
    image?: string,
    title?: string,
    description?: string,
    status?: string,} = {}
  ) {
    this.id = post.id|| 0;
    this.title = post.title|| '';
    this.description = post.description|| '';
    this.image = post.image|| '';
    this.status = post.status || 'Disponible';
  }
}
