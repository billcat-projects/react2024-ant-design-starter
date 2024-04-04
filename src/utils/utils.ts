export function buildOpenKeys(pathname: string) {
  const name = pathname.slice(1)

  // 二级菜单才有 openKeys
  if (name.includes('/')) {
    return ['/' + name.split('/')[0]]
  }
  return []
}
