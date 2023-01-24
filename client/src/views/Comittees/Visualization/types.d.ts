export interface IVisualization {
    blurBg: boolean
    handleSeeHistory: (id: number) => void
    handleEdit: (id: number) => void
    handleDisable: (id: number) => void
}