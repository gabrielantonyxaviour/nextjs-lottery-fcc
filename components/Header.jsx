import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Decenrtalized Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
