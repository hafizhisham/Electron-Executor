function MyBlackButton(props: any) {
    return (
      <button className="p-2 hover:border rounded-md bg-gray-800 text-white">
        {props.text}
      </button>
    );
  }
  
  export default MyBlackButton;