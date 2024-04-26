import { useContext, useState } from "react"
import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

import { TransactionContext } from "../context/TransactionContext"
import { shortenAddress } from "../utils/shortenAddress"
import { Loader } from "./"

const Wecolme = () => {
    return (
        <h1>
            Wecolme
        </h1>
    )
}

export default Wecolme;
