import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow MDX and markdown files to act as pages and modules
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // React strict mode helps surface potential problems
  reactStrictMode: true,
}

// Configure MDX. Additional remark/rehype plugins can be added here if desired.
const withMDX = createMDX({
  // Leave options empty for basic MDX support
})

// Merge the MDX configuration with the base Next.js configuration
export default withMDX(nextConfig)
