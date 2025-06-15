export class User {
  id: number;
  fullName: string;
  email: string;
  role: 'diner' | 'chef';
  restaurant: string;
  profilePicture: string;


  constructor(user: {id?: number, fullName?: string, email?: string, role?: "diner" | "chef", restaurant?: string, profilePicture?: string}) {
    this.id = user.id || 0;
    this.fullName = user.fullName || '';
    this.email = user.email || '';
    this.role = user.role || 'diner';
    this.restaurant = user.restaurant || '';
    this.profilePicture = user.profilePicture || '';
  }
}
