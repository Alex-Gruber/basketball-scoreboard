 let homeCount = 0
 let guestCount = 0
 
 let homeAnzeige = document.getElementById('home-anzeige')
 let guestAnzeige = document.getElementById('guest-anzeige')
 
 
 
//  functions for homescore
 
 function addOneHome(){
     homeCount += 1
     homeAnzeige.textContent= homeCount
     führungsPosition()
 }
 
 function addTwoHome(){
     homeCount += 2
     homeAnzeige.textContent= homeCount
     führungsPosition()
 }
 
 function addThreeHome(){
      homeCount += 3
     homeAnzeige.textContent= homeCount
     führungsPosition()
 }
 
//  functions for guestscore
function addOneGuest(){
    guestCount += 1
    guestAnzeige.textContent = guestCount
    führungsPosition()
}

function addTwoGuest(){
    guestCount += 2
    guestAnzeige.textContent = guestCount
    führungsPosition()
}

function addThreeGuest(){
    guestCount += 3
    guestAnzeige.textContent = guestCount
    führungsPosition()
}

function führungsPosition(){
    if(homeCount > guestCount){
    homeAnzeige.style.boxShadow = "1px 1px 20px lightgray"
    guestAnzeige.style.boxShadow = "0px 0px 0px white"
}
    else if (guestCount > homeCount){
        guestAnzeige.style.boxShadow = "1px 1px 20px lightgray"
        homeAnzeige.style.boxShadow = "0px 0px 0px white"
    }
    else {
        guestAnzeige.style.boxShadow = "0px 0px 0px white"
        homeAnzeige.style.boxShadow = "0px 0px 0px white"
    }
  }


 