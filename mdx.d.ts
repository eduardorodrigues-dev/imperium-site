/**
 * TypeScript module declaration for importing MDX files as React components.
 * This allows TypeScript to understand the shape of `.mdx` modules when
 * imported into TypeScript/React files. Each `.mdx` file will default export
 * a React component that accepts arbitrary props. You can further extend
 * this declaration if your MDX files export named values (e.g. metadata).
 */
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
