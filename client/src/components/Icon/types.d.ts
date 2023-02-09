type IconType =
  | 'committee'
  | 'members'
  | 'configurations'
  | 'search'
  | 'chevron'
  | 'options'
  | 'history'
  | 'edit'
  | 'disable'
  | 'download'
  | 'arrow-left'
  | 'save'
  | 'minus'
  | 'plus'
  | 'cancel'
  | 'pdf'
  | 'csv'
export interface IIcon {
  type: IconType
  position?: 'top' | 'down'
}
