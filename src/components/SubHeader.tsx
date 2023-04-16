import MyButton from "./MyButton";

function SubHeader() {
  return (
    <div className="flex justify-between items-center px-[200px] h-[80px] bg-blue-700">
      <p className="text-white">
        🚨 Your profile is invisible – employers can't find you.
      </p>
      <MyButton text="Edit my profile" />
    </div>
  );
}

export default SubHeader;
