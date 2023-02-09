export type TabType = 'committee' | 'members' | 'configurations'
export interface NavItem {
  icon: TabType
  href: string
}

export interface INavBar {
  data: NavItem[]
}
