export const formatBlogData = (data) => {
    return data.map(post => {
      return {
        id: post.node.id,
        ...post.node.frontmatter,
        slug: post.node.fields.slug
      }
    })
  }
  
export const findNextPosts = (posts, id) => {
    let prevPost, nextPost
    const formattedPosts = formatBlogData(posts)
    // .filter(post => !post.type.includes('quotes'))
    const index = formattedPosts.findIndex(post => post.id === id)
    nextPost = formattedPosts[index + 1]
    prevPost = formattedPosts[index - 1]
    if (index === posts.length - 1) {
        nextPost = formattedPosts[0]
    }
    if (index === 0) {
        prevPost = formattedPosts[formattedPosts.length - 1]
    }
    return {
        prevPost, nextPost
    }
}