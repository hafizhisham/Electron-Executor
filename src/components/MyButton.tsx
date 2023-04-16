function MyButton(props: any) {
    return (
      <button className="p-2 hover:border rounded-md bg-white hover:bg-slate-200">
        {props.text}
      </button>
    );
  }
  
  export default MyButton;