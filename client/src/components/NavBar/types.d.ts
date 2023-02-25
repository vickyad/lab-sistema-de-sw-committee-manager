export type TabType = 'committee' | 'members' | 'configurations'
export interface NavItem {
  id: string
  icon: TabType
  label: string
  href: string
}

export interface INavBar {
  data: NavItem[]
}
