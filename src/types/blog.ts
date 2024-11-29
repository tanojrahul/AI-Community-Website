export interface BlogPost {
  title: string;
  content: string;
  coverImage: string;
  publishedAt: Date;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}