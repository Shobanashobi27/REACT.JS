// types/meme.types.ts
export interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  color: string;
  strokeColor: string;
  strokeWidth: number;
  isBold: boolean;
  isItalic: boolean;
  rotation: number;
  opacity: number;
}

export interface MemeImage {
  id: string;
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  filters: ImageFilters;
}

export interface ImageFilters {
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
  sepia: number;
}

export interface MemeTemplate {
  id: string;
  name: string;
  imageUrl: string;
  textAreas: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}