function MyBlueButton(props: any) {
    return (
      <button className="p-2 hover:border rounded-md bg-blue-500 text-white w-[200px]">
        {props.text}{props.link}
      </button>
    );
  }
  
  export default MyBlueButton;