import Head from 'next/head'
import {PasscodeGenerator} from "../components/PasscodeGenerator"

export default function Home() {
  return (
    <div>
      <Head>
        <title>C&S Homestay Lock Number Generator</title>
      </Head>
      <div className="container max-w-[1200px] mx-auto">
        <PasscodeGenerator/>
      </div>
    </div>
  )
}
