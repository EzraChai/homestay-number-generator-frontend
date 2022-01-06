import { Passcode } from "./Passcode"

export const PasscodeGenerator = () => {

    const handleGenerator = () => {
        console.log("object")
    }

    return (
        <div className="card mx-3 md:mx-10 p-10 bg-base-100 relative mt-20 flex justify-between h-[600px]"> 
           <h3 className="mt-4 text-2xl md:text-4xl font-semibold"> <span className="font-bold text-5xl md:text-6xl text-accent">Passcode</span> Generator</h3>
           <div className="absolute top-[7rem] mt-10 w-[92.5%] h-[350px] overflow-y-auto">
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
               <Passcode passcode={"1234"} date={"12/12/2022"}/>
           </div>
           <div className="mt-20">
             <button onClick={handleGenerator} className="absolute bottom-8 right-8 btn btn-primary md:text-xl px-4">Generate</button>
           </div>
        </div>
    )
}
