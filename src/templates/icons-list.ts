import fs from "fs"
import path from "path"
import matter from "gray-matter"


//gets content directory where icons are stored

const postsDirectory = path.join(process.cwd(), "content/3dicons-meta")

export function getSortedPostsData() {
  
    // read file names
  const fileNames = fs.readdirSync(postsDirectory)

  // map and read file thourgh there names
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
    //return the data
    return allPostsData;
}
