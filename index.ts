import Web3 from "web3";
import * as data from "./abi.json";

let web3 = new Web3(Web3.givenProvider);

const {abi}  = data ;
const SendButton = document.getElementById("contract");
const BalanceOfButton = document.getElementById("balance");

SendButton.addEventListener("click", function () {
  console.log("sendclicked");
  // @ts-ignore
  const Contract = new web3.eth.Contract( abi , "0xd5b082227c00e1b17a423d9a708145706d290bd6" );
  Contract.methods.setMinter("0xef584caC7d2Fdc4db17940e514822542f02Ebc0B").send({from: '0xceDC0727B2d752dEF278603F5158b534Ca1d7404'}, function(error, transactionHash){
  });
});

BalanceOfButton.addEventListener("click",async function  () {
  console.log("balanceclicked");
  //@ts-ignore
  const balance = new web3.eth.Contract( abi , "0xd5b082227c00e1b17a423d9a708145706d290bd6" );
  console.log(balance.methods)
  const log = await balance.methods.balanceOf("0xceDC0727B2d752dEF278603F5158b534Ca1d7404").call()  ;
  console.log(log);
});