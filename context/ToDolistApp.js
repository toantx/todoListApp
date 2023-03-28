import React, {useEffect,useState} from 'react';
import Web3Modal from 'web3modal';
import ethers from 'ethers';

import { toDoListAdress, toDoListABI } from './constants';

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(toDoListAdress,toDoListABI,signerOrProvider);

export const ToDoListContext = React.createContext();

export const ToDoListProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [error, setError] = useState("")
    const [allToDoList, setAllToDoList] = useState([])
    const [myList, setMyList] = useState([])

    const [allAddress, setAllAddress] = useState([second])

    // connecting metamask

    const checkIfWallerIsConnect = async () => {
        if (!window.ethereum) return setError("please install metamask");

        const account = await window.ethereum.request({method:"eth_account"})
        if (account.length){
            setCurrentAccount(account[0])
            console.log(account[0])
        }
        else {
            setError("Please Install Metamask & connect, reload");
        }
    }
    useEffect(() => {
        checkIfWallerIsConnect();
    },[])
    return (
        <ToDoListContext.Provider value={{checkIfWallerIsConnect}}>
            {children}
        </ToDoListContext.Provider>
    )
}
const ToDolistApp = () => {
  return (
    <div>ToDolistApp</div>
  )
}

export default ToDolistApp