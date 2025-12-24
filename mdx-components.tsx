import type { MDXComponents } from 'mdx/types'

// This file allows you to customise how markdown elements are rendered.
// For this project, we intentionally keep the default rendering behaviour.

const components: MDXComponents = {
  // Example: override rendering of h1 elements
  // h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
}

export function useMDXComponents(): MDXComponents {
  return components
}
