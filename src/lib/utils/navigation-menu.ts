import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';

export function parseMenuItem(
  defaultHost: string,
  menuItem: NavMenuItem,
  parent = {} as NavMenuItem
): NavMenuItem {

  const { children }: NavMenuItem = menuItem;

  const updatedChildren: NavMenuItem[] = children?.map((child) => {
    const fullPath: string = child.fullPath ?? `${parent.fullPath ?? parent.path ?? ''}${child.path ?? ''}`

    const updatedChildData: NavMenuItem = {
      ...child,
      fullPath,
      absUrl: child.absUrl ?? (fullPath ? `${child['host'] ?? parent.host ?? defaultHost}${fullPath}` : ''),
      host: child['host'] ?? defaultHost,
    }

    return parseMenuItem(defaultHost, updatedChildData as any, updatedChildData)
  })

  return {
    ...menuItem,
    children: updatedChildren ?? children,
  }
}
