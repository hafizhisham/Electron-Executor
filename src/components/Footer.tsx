function Footer() {
  return (
    <footer className="flex justify-between items-center mx-[100px] h-[80px]">
      <h1 className="text-xs  text-gray-400">
        Copyright {new Date().getFullYear()} Kerja-IT
      </h1>
      <div className="flex flex-row text-xs text-gray-400 space-x-7">
        <a href="www.gmail.com" className="cursor-pointer hover:underline">
          <h4>Email</h4>
        </a>
        <a href="www.twitter.com" className="cursor-pointer hover:underline">
          <h4>Twitter</h4>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
