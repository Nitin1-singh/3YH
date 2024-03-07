export function TimeLine({ start, end }: { start: string, end: string }) {

  return (
    <div className="flex flex-col basis-3 justify-between my-5">
      <div className="flex flex-row items-center text-center">
        <div className="basis-1/4">
          <p>Start Date</p>
          <p>{start?.substring(0, 10).split("-").reverse().join("-")}</p>
        </div>
        <div className="basis-1/4">
          <p>Current Date</p>
          <p>{new Date().toDateString()}</p>
        </div>
        <div className="basis-1/4">
          <p>End date</p>
          <p>{end?.split("-").reverse().join("-")}</p>
        </div>
      </div>
    </div>
  )
}