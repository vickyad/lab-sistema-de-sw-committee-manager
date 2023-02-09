export interface NavItem {
  icon: 'committee' | 'members' | 'configurations'
  href: string
}

export interface INavBar {
  data: NavItem[]
}
