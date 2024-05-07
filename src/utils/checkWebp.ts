export function checkWebp(): boolean {
  const elem = document.createElement('canvas')
  if (elem.getContext && elem.getContext('2d')) {
    elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      ? document.body.classList.add('webp')
      : ''
  }
  return false
}
