/// <reference types="vite/client" />

declare module '*?w=*&format=webp&quality=*' {
  const src: string;
  export default src;
}

declare module '*?w=*&format=webp' {
  const src: string;
  export default src;
}
