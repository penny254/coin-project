let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random()*2)
        
    },       
    toString :function() {
        if (this.state === 1) {
            return "Heads";
        } else {
            return "Tails";
        
        }
        console.log(this.toString)
    },
 
    toHTML: function() {
        let image = document.createElement("img");
        if (this.state === 1) {
            image.src="./images/download.jpeg"
        } else {
            image.src="./images/COBREcentavosecuador2000-2.png"
            console.log(image) 
        }
        return image;; 
           
    }
    
}    

function display20Flips() {
    let disImage = document.createElement("body")
    for ( i = 0; i < 20; i++) {
        coin.flip()
        
        disImage.append(coin.toString())
      
        document.body.append(disImage)
      
    
    }
    
}
display20Flips();

function display20Images() {
    let disImage = document.createElement("body")
    for (let j = 0; j < 20; j++) {
     coin.flip()
     disImage.append(coin.toHTML())
     document.body.append(disImage)
    }
    // console.log(display20Images)
} 
display20Images()