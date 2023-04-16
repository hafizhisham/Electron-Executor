import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import MyBlueButton from "../components/MyBlueButton";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

function Job() {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredJob] = filteredArray;
  const date = new Date(filteredJob.post_date);
  const isNew = date.getFullYear() === 2023;

  // destructuring
  //   const array = [1, 2, 3];
  //   console.log(array);

  //   const [a, b, c, d, e] = array;
  //   console.log(a, b, c, d, e);

  return (
    <div className="bg-slate-50">
      <Header />
      <SubHeader />

      <div className="h-auto pt-7 py-4 flex justify-center items-center font-medium">
        Jobs / {filteredJob.job} -{" "}
        <h4 className="capitalize"> {filteredJob.company} </h4>
      </div>

      <div className="h-auto py-2 flex justify-center items-center flex-col space-y-4 ">
        <div className="border p-9 rounded-md w-[700px] space-y-4 bg-white">
          <div className="space-x-1">
            {filteredJob.stacks.map((stack: string, index: number) => {
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
          <div>
            <h4 className="text-2xl font-medium inline-block">
              {filteredJob.job}
            </h4>
            <p>{filteredJob.company}</p>
          </div>
          <div>
            <div className="flex">
              <p>🗓 Posted on {filteredJob.post_date}</p>
              {isNew ? (
                <span className="bg-green-300 inline-block px-1 text-sm text-gray-700 ml-2 rounded-sm">
                  New
                </span>
              ) : null}
            </div>
            <p>📍 {filteredJob.district}</p>
            <p className="capitalize">💼 {filteredJob.work_type}</p>
          </div>
          <div className="inline-block pt-4">
            <a href={filteredJob.link} target="_blank">
              <MyBlueButton
                className="h-auto py-3 cursor-pointer"
                text="Apply Now 🚀"
              />
            </a>
            <p className="h-auto py-5 font-medium text-xl">
              ✍️ Job Description
            </p>
            <p className="font-bold h-auto pt-7">What you will be doing:</p>
            <div className="space-x-1">
              {filteredJob.details.job_description.map(
                (description: string, index: number) => {
                  return (
                    <div className="flex text-justify">
                      <li key={index}></li>
                      <p>{description}</p>
                    </div>
                  );
                }
              )}
            </div>
            <p className="font-bold h-auto pt-10">What you will need:</p>
            <div className="space-x-1">
              {filteredJob.details.qualification.map(
                (qualification: string, index: number) => {
                  return (
                    <div className="flex text-justify">
                      <li key={index}></li>
                      <p>{qualification}</p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="h-auto pt-10 pb-4 cursor-pointer">
              <a href={filteredJob.link} target="_blank">
                <MyBlueButton className="h-auto py-3" text="Apply Now 🚀" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default Job;
