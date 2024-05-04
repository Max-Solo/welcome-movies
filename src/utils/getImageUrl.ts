export function getImageUrl(name: string, ext: string) {
  const path = new URL('@/assets/images/', import.meta.url)
  return `${path}/${name}.${ext}`
}
