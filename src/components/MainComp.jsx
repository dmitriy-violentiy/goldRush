import React, { useState } from "react"
import classes from '../App.module.css';
import starIcon from '../img/star.png'
import balanceIcon from '../img/balance.png'
import backIcon from '../img/back.png'
import slot1 from '../img/slot1.png'
import slot2 from '../img/slot2.png'
import slot3 from '../img/slot3.png'


const MainComp = () => {
   const [countBid, setCountBid] = useState(100000)

   let bidAdd = () => {
      setCountBid(countBid + 500)
   }

   let bidDel = () => {
      setCountBid(countBid - 500)
   }
   
   const [spinRand1, setSpinRand1] = useState(0)
   const [spinRand2, setSpinRand2] = useState(2)
   const [spinRand3, setSpinRand3] = useState(1)
   const [stars, setStars] = useState(0)
   const [win, setWin] = useState(0)

   let spin = () => {
      
      setSpinRand1(Math.floor(Math.random() * 3))
      setSpinRand2(Math.floor(Math.random() * 3))
      setSpinRand3(Math.floor(Math.random() * 3))
      //вычитаем ставку с баланса
      setBalance(balance - countBid + win)
      //добавляем звезды при ставке
      setStars(stars + 500)

      if((spinRand1 == spinRand2) && (spinRand1 == spinRand3)) {
         setWin(countBid * 5 + win) 
      } else setWin(0) 
   }

   let autoSpin = () => (setInterval(() => {
      spin()
   }, 2000))



   const btnActive = {
      cursor: 'pointer'
   }
   const btnDisable = {
      opacity: 0.6,
      pointerEvents: 'none'
   }

   const [balance, setBalance] = useState(1000000)

   const spinImg1 = () => {
      if (spinRand1 == 0) {
         return (<img src={slot1} alt="slot1" />)
      } else if (spinRand1 == 1) {
         return (<img src={slot2} alt="slot2" />)
      } else if (spinRand1 == 2) {
         return (<img src={slot3} alt="slot3" />)
      }
   }

   const spinImg2 = () => {
      if (spinRand2 == 0) {
         return (<img src={slot1} alt="slot1" />)
      } else if (spinRand2 == 1) {
         return (<img src={slot2} alt="slot2" />)
      } else if (spinRand2 == 2) {
         return (<img src={slot3} alt="slot3" />)
      }
   }

   const spinImg3 = () => {
      if (spinRand3 == 0) {
         return (<img src={slot1} alt="slot1" />)
      } else if (spinRand3 == 1) {
         return (<img src={slot2} alt="slot2" />)
      } else if (spinRand3 == 2) {
         return (<img src={slot3} alt="slot3" />)
      }
   }

   return(
      <div className={classes.container}>
         
         <header className={classes.header}>
               <div className={classes.headerWrap}>
                  <span className={classes.roundBtnWrap + ' ' + classes.back}><input className={classes.roundBtn} type="button" /><img className={classes.backIcon} src={backIcon}></img></span>
                  <div className={classes.starsWrap}><span className={classes.stars}><img className={classes.starIcon} src={starIcon}></img>{stars}</span></div>
                  <div className={classes.balanceWrap}><span className={classes.balance}><img className={classes.balanceIcon} src={balanceIcon}></img>{balance}</span></div>
               </div>
         </header>

         <div className={classes.wheelContainer}>
            <div className={classes.wheel}>
               <div className={classes.wheelColumn}>
                  {spinImg2()}
                  {spinImg1()}
                  {spinImg3()}
               </div>
               <div className={classes.wheelColumn}>
                  {spinImg1()}
                  {spinImg2()}
                  {spinImg3()}
               </div>
               <div className={classes.wheelColumn}>
                  {spinImg1()}
                  {spinImg3()}
                  {spinImg2()}
               </div>
            </div>
         </div>

         <footer className={classes.footer}>
            <div className={classes.bidContainer}>
               <div><input className={classes.roundBtn} type="button" onClick={bidDel} value='-' /></div>
               <div className={classes.bidNumContainer}><span className={classes.countBid}>{countBid}</span></div>
               <div><input className={classes.roundBtn} type="button" onClick={bidAdd} value='+' /></div>
            </div>
            <div className={classes.winContainer}>
               <span className={classes.win}>win</span><span className={classes.winNum}>{win}</span>
            </div>
            <div>
               <input className={classes.auto} style={balance>0?btnActive:btnDisable} type="button" value='AUTO' onClick={autoSpin} />
               <input className={classes.spin} style={balance>0?btnActive:btnDisable} type="button" value='SPIN' onClick={spin} />
            </div>
         </footer>
         
      </div>
      
   )
}

export default MainComp