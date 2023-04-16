import MyBlackButton from "./MyBlackButton";
import MyButton from "./MyButton";

function Header() {
  return (
    <div className="bg-white">
    <header className="flex justify-between items-center mx-[200px] h-[80px]">
      <h1 className="text-xl font-bold">Kerja-IT</h1>
      <div className="space-x-2">
        <MyButton text="🏹 Talents" />
        <MyButton text="📢 Post Jobs" />
        <MyBlackButton text="👋 Hafiz Hisham" />
      </div>
    </header>
    </div>
  );
}

export default Header;
