import { useWeb3Contract } from "react-moralis"

const ABI=[]
export default function LotteryEntrance() {
    const {runContractFunction:enterRaffle} = useWeb3Contract({
        abi:,
        contractAddress:,
        functionName:,
        params:,
        msgValue:,
    })
    return <div>Hi from lottery Entrance</div>
}
