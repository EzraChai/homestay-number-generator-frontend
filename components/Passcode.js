
export const Passcode = ({passcode, date}) => {

    const passcodeArray = passcode.split('');

    // console.log(date)
    // console.log(date)
    // date = new Date(date)

    // const newDate = new Date(date)

    return (
        <div className="pb-3 text-4xl flex items-center">
            {passcodeArray.map((passcode,index) => (
                <div key={index} className="bg-base-300 w-14 h-14 mx-1 rounded-xl flex justify-center items-center p-1 font-bold">{passcode}</div>
            ))} <span className="text-lg mx-6 font-semibold tracking-wider"> {date}</span> 
        </div>
    )
}
