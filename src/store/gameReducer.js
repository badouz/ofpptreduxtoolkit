import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,    
}

const gameSlice = createSlice({
    name:"game",
    initialState,
    reducers:{
        pointScored : (state,action)=>{
          if(state.winner){
            return state;
          }
            if(action.payload === "player1"){
                if (state.player1 ==40){
                    if(state.player2 != 40){
                         state.winner = "player1"
                    }else{
                        if(state.advantage == "player1"){
                            // player 1 a gagné
                             state.winner = "player1"
                        }else if(state.advantage == "player2"){
                            
                            state.advantage = null;
                        }else{
                            state.advantage = "player1";
                        }
                    }
                }

                if (state.player1 ==30){
                    state.player1+=10;
                }
                if (state.player1 <=15){
                    state.player1+=15;
                }
               
            }
            
            if(action.payload === "player2"){
                if (state.player2 ==40){
                    if(state.player1 != 40){
                                // player 2 a gagné
                                 state.winner = "player2"
                    }else{
                        if(state.advantage == "player2"){
                            // player 2 a gagné
                            state.winner = "player2"
                        }else if(state.advantage == "player1"){
                            // player2 
                            state.advantage = null;
                        }else{
                            state.advantage = "player2";
                        }
                    }
                }
                if (state.player2 ==30){
                    state.player2+=10;
                }
                if (state.player2 <=15){
                    state.player2+=15;
                }
            }
        },
        playPause : (state)=>{
            state.playing  = !state.playing;
        },
        resetGame:(state)=> {
            state.player1= 0;
            state.player2= 0;
            state.advantage= null;
            state.winner= null;
        }
    }
});

export default gameSlice.reducer;
export const  {pointScored,playPause,resetGame} = gameSlice.actions
