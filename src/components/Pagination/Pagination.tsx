export default function Pagination(props: {
  paginationNumber: number
  value: number
  onClick: any
}) {
  return (
    <div>
      <button className="btn" value={props.value} onClick={props.onClick}>
        {props.paginationNumber}
      </button>
    </div>
  )
}
