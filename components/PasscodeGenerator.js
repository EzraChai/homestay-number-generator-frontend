import { Passcode } from "./Passcode"
import { io } from "socket.io-client";
import { useEffect,useState } from "react";

function useSocket(url) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(url,{ transports: ["websocket","polling"] })

      socketIo.on("connect_error", () => {  // revert to classic upgrade  
            socketIo.io.opts.transports = ["polling", "websocket"];
        });

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup

    // should only run once and not on every re-render,
    // so pass an empty array
  }, [])

  return socket
}

export const PasscodeGenerator = () => {

    const socket = useSocket("https://cshomestay-passcode-backend.herokuapp.com/")
    const [passcodeList, setPasscodeList] = useState([])
    const [randomPasscode,setRandomPasscode] = useState(null)
    const [btnDisabled,setBtnDisabled] = useState(true)

    const handleGenerator = () => {
        setBtnDisabled(true)
        if(socket)socket.emit("messageToServer")
    }

    useEffect(() => {

        if(socket){
            setBtnDisabled(true)
            socket.on("messageFromServer",(res) => {
                const data = {
                        passcode: res.passcode,
                        date: new Date().toDateString()
                    }
                setRandomPasscode(data)
            })
            socket.emit("initMessageFromClient", (res) => {
                if(res.data.length === 0){
                   setBtnDisabled(false)
                }
                for (let i = 0; i < res.data.length;i++ ){
                    const data = {
                        passcode: res.data[i].number_generated,
                        date: new Date(res.data[i].date_created).toDateString()
                    }
                    setRandomPasscode(data)
                }
            })
        }
    },[socket])

    useEffect(() => {
        if(randomPasscode)handleSetPasscodeList(randomPasscode)
    },[randomPasscode])

    const handleSetPasscodeList = (data) => {
        console.log("why are you here")
        setPasscodeList([data,...passcodeList])
        setBtnDisabled(false)
    }

    return (
        <div className="card mx-3 md:mx-10 p-10 bg-base-100 relative mt-20 flex justify-between h-[600px]"> 
           <h3 className="mt-4 text-2xl md:text-4xl font-semibold"> <span className="font-bold text-5xl md:text-6xl text-accent">Passcode</span> Generator</h3>
           <div className="absolute top-[7rem] mt-10 w-[92.5%] h-[350px] overflow-y-auto">
               {passcodeList.map((passcode,index) => (
                    <Passcode key={index} passcode={passcode.passcode} date={passcode.date}/>
                ))}
           </div>
           <div className="mt-20">
               {btnDisabled ?
             <button onClick={handleGenerator} disabled={true} className="absolute bottom-8 right-8 btn btn-primary md:text-xl px-4 btn-disabled">Generate</button>
                :
             <button onClick={handleGenerator} disabled={false} className="absolute bottom-8 right-8 btn btn-primary md:text-xl px-4">Generate</button>
               }
           </div>
        </div>
    )
}
