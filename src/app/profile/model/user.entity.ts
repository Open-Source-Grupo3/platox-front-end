export class User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: 'diner' | 'chef';
  plan: 'basic' | 'premium';

  constructor(user: {
    id?: number,
    username?: string,
    fullName?: string,
    email?: string,
    role?: "diner" | "chef",
    plan?: 'basic' | 'premium'
  }) {
    this.id = user.id || 0;
    this.username = user.username || '';
    this.fullName = user.fullName || '';
    this.email = user.email || '';
    this.role = user.role || 'diner';
    this.plan = user.plan || 'basic';
  }
}
