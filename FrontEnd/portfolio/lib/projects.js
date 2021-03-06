import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectDir = path.join(process.cwd(), 'projects');

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectDir);

  return fileNames.map(fileName => {
    return {
      params: {
        projectid: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getProjectData(id) {
  const filePath = path.join(projectDir, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const mattered = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(mattered.content)
  const contentHtml = processedContent.toString();

  return {
    id, contentHtml, ...mattered.data
  }
}

export function getSortedProjectData() {
  const fileNames = fs.readdirSync(projectDir);
  const allProjectData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const filePath = path.join(projectDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const mattered = matter(fileContents);

    return {
      id,
      ...mattered.data
    }
  })

  return allProjectData.sort((a, b) => {
    if (a.projectId < b.projectId) return 1;
    else return -1;
  })
}
