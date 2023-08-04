const FeaturesCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-evenly p-10 rounded-lg mt-14 mx-6 card">
        <div>
            <h1 className="text-[#41AFFF] font-bold text-3xl">{props.title}</h1>
        </div>
        <ul className="text-[#000F20] card-font font-medium mt-5">
            <li>{props.line1}</li>
            <li>{props.line2}</li>
            <li>{props.line3}</li>
            <li>{props.line4}</li>
        </ul>
        <button className="bg-[#41AFFF] text-white font-bold text-xl rounded-lg py-2 px-28 mt-8">Explore</button>
    </div>
  )
}

export default FeaturesCard