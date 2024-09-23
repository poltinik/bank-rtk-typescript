import { RootState } from "../app/store";
import { useSelector } from "react-redux";

const Balance = () => {

    const balance = useSelector(state => state.balance);

    return (
        <div className='text-center text-uppercase'>
            <h1 className='text-[gold] font-bold text-8xl'>Iron Bank of Braavos</h1>
            <h2 className='text-[firebrick] text-7xl'>Balance = {balance}</h2>
        </div>
    )
}

export default Balance