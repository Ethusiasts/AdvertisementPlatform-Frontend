export default function Button(props) { 
    return (
        <button className="rounded-lg bg-[#2785AE] text-white py-2 px-6 md:ml-8 hover:bg-indigo-400 duration-500">{props.text}</button>
    );
}