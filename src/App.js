
import Icon  from "./component/Icon"
import { useState } from "react";
// Tostify
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const tictaktoeArray = new Array(9).fill("")
const App=()=>{
        
        const [isCross,setIsCross]=useState(true)
        const [winMessage,setWinMessage]=useState("")

        // Reset Game
        function resetGame(){
             tictaktoeArray.fill("")
             setIsCross(true)
             setWinMessage("")
        }

        // Check for winner
        function checkIsWinner(){
             // row

              if(tictaktoeArray[0] == tictaktoeArray[1] && tictaktoeArray
              [0] == tictaktoeArray[2] && tictaktoeArray[0]!=("")){
              setWinMessage(tictaktoeArray[0]+" has won")
             }
         else if(tictaktoeArray[3] == tictaktoeArray[4] && tictaktoeArray
          [3] == tictaktoeArray[5] && tictaktoeArray[3]!=("")){
          setWinMessage(tictaktoeArray[3]+" has won")
             }
         else if(tictaktoeArray[6] == tictaktoeArray[7] && tictaktoeArray
          [6] == tictaktoeArray[8] && tictaktoeArray[6]!=("")){
          setWinMessage(tictaktoeArray[6]+" has won")
             }

          // Column 

          else if(tictaktoeArray[0] == tictaktoeArray[3] && tictaktoeArray
            [0] == tictaktoeArray[6] && tictaktoeArray[0]!=("")){
            setWinMessage(tictaktoeArray[0]+" has won")
                }

          else if(tictaktoeArray[1] == tictaktoeArray[4] && tictaktoeArray
                [1] == tictaktoeArray[7] && tictaktoeArray[1]!=("")){
                setWinMessage(tictaktoeArray[1]+" has won")
                }

          else if(tictaktoeArray[2] == tictaktoeArray[5] && tictaktoeArray
                [2] == tictaktoeArray[8] && tictaktoeArray[2]!=("")){
                    setWinMessage(tictaktoeArray[2]+" has won")
               }

               //Diogonal 
          else if(tictaktoeArray[0] == tictaktoeArray[4] && tictaktoeArray
                [0] == tictaktoeArray[8] && tictaktoeArray[0]!=("")){
                    setWinMessage(tictaktoeArray[0]+" has won")
               } 
          
         else if(tictaktoeArray[2] == tictaktoeArray[4] && tictaktoeArray
                [2] == tictaktoeArray[6] && tictaktoeArray[2]!=("")){
                    setWinMessage(tictaktoeArray[2]+" has won")
               }

               // draw to do


            }

      // Play game
      function playGame(index){
        if (winMessage){
          return toast("Gave already got over")
             }
             else if( tictaktoeArray[index] != "" ){
                return toast("Already filled")
             }
             else{
              tictaktoeArray[index]= isCross == true? "cross":"circle"
              setIsCross(!isCross)
             }
          checkIsWinner()
        }
      











//   return(
//     <div class="app-body">
//       <ToastContainer position="bottom-center" />
//       <h1> Lest Play Tic Tak Toe Game </h1>
//       {winMessage?(
//         <div>
//           <h2>{winMessage}</h2>
//           <button onClick={resetGame}>Play Again</button>
//           </div>
//       ):(
//         <h1>{isCross==true?"Cross":"Circle"}'s turn</h1>
//       )}

// <div className="container">{
//   tictaktoeArray.map((value,index)=>(
//            <div className="item1" ocClick={()=>playGame(index)}>
//             <Icon icon={value}/>
//            </div>

//   ))
// }

      
//     </div > 
    
  
  
//   </div>

return (
  <div className="app-body">
       <ToastContainer  position="bottom-center" />
        <h1> Lets Play Tic Toc Toe Game</h1>  
        {winMessage?(
           <div className="btn-msg"> 
                   <h2> {winMessage} </h2>
                   <button  onClick={resetGame} className="space"> Play Again </button>
           </div>
        ):(
            <h2>{isCross==true?"Cross":"Circle"}'s Turn</h2>
        )}

          <div className="container"> 
              {
              tictaktoeArray.map((value, index)=>(
                  <div className="item1" onClick={()=>playGame(index)}>
                      <Icon  icon={value}/>
                  </div>
              ))
              }
          </div>

  </div>
  );
}

export default App;
