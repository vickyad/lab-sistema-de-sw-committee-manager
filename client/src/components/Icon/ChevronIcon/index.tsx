const ChevronIcon = ({ position }: { position: 'top' | 'down' }) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${position === 'top' ? '180' : '0'}deg)` }}
    >
      <path
        d="M17.5566 8.95001L11.8102 15.47C11.1315 16.24 10.021 16.24 9.34237 15.47L3.59593 8.95001"
        stroke="#00000080"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ChevronIcon
