import JobCard from "../components/JobCard";
import MyBlackButton from "../components/MyBlackButton";
import MyButton from "../components/MyButton";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

function Home() {
  // import job json data
  // using the data to replicate job card

  // every react function must return a TSX
  return (
    <div className=" bg-slate-50">
      <Header />
      <SubHeader />
      {/* hero */}
      <div className="h-auto py-10 flex justify-center items-center flex-col space-y-4">
        <h1 className="text-3xl font-bold">Find Tech Jobs In Malaysia 🇲🇾</h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div className="space-x-2">
          <MyBlackButton text="🎯 I want companies to find me" />
          <MyButton text="🔍 Search Jobs" />
        </div>
      </div>
      {/* Cards container */}
      <div className="flex justify-center items-center flex-wrap gap-4 mx-[300px]">
        {/* Job card */}
        {JobData.map((job, index) => {
          return <JobCard job={job} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
