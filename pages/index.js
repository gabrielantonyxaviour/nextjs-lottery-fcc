import Head from "next/head"
import Header from "../components/Header.jsx"
import LotteryEntrance from "../components/LotteryEntrance.jsx"
export default function Home() {
    return (
        <div className="p-5">
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
