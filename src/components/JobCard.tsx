import { useNavigate } from "react-router-dom";

function JobCard(props: any) {
  //  function to detect if the year is 2023, isNew === true
  const date = new Date(props.job.post_date);
  const isNew = date.getFullYear() === 2023;

  // navigation function
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/SEC-2023-Day-15/job/${props.job.id}`);
      }}
      className="border p-4 rounded-md w-[350px] space-y-4 cursor-pointer bg-white"
    >
      <div>
        <h4 className="text-xl font-medium inline-block">{props.job.job}</h4>
        {/* condition rendering here, render if isNew === true by using tenary operator*/}
        {isNew ? (
          <span className="bg-green-300 inline-block px-1 text-sm text-gray-700 ml-2 rounded-sm">
            New
          </span>
        ) : null}
        <p>{props.job.company}</p>
      </div>
      <div>
        <p>🗓 Posted on {props.job.post_date}</p>
        <p>📍 {props.job.district}</p>
        <p className="capitalize">💼 {props.job.work_type}</p>
      </div>
      <div className="space-x-1">
        {props.job.stacks.map((stack: string, index: number) => {
          return (
            <p
              key={index}
              className="bg-gray-200 p-1 inline-block rounded capitalize"
            >
              {stack}
            </p>
          );
        })}
      </div>
      <p>Added on {props.job.post_date}</p>
    </div>
  );
}

export default JobCard;
