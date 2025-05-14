export class Post {
  id: number;
  title: string;
  body: string;
  image:string;
  status: string;

  constructor(post: {
    id?: number,
    image?: string,
    title?: string,
    body?: string,
    status?: string,} = {}
  ) {
    this.id = post.id|| 0;
    this.title = post.title|| '';
    this.body = post.body|| '';
    this.image = post.image|| '';
    this.status = post.status || 'Disponible';
  }
}
