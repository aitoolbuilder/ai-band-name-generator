import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aibandnamegenerator.com'
  
  // 定义您网站的路由
  const routes = [''] // 目前只有主页，如果有其他页面，可以在这里添加

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }))
}