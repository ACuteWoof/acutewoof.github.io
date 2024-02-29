export interface ProjectInfo {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface PieceProps extends ProjectInfo {
  className?: string;
}
