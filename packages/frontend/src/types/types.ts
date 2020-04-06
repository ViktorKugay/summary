export interface Post {
  attributes: {
    title: string;
    date: string;
    image: string;
    description: string;
  };
  body: string;
  bodyBegin: number;
  frontmatter: string;
  html: string;
}
