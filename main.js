var canvas= new fabric.Canvas("myCanvas");
blockwidth=30;
blockheight=30;
playerx=20;
playery=20;
var player_object="";
var block_object="";
function playerupdate(){
      fabric.Image.fromURL("player.png",function(Img){
          player_object=Img;
          player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({top:playery,left:playerx});
          canvas.add(player_object);

      });

}
function blockupdate(getImage){
fabric.Image.fromURL(getImage,function(Img){block_object=Img;
block_object.scaleToHeight(blockheight);
block_object.scaleToWidth(blockwidth);
block_object.set({
    top:playery,left:playerx
});canvas.add(block_object);
});
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=='80'){
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    }
    if(e.shiftKey==true&&keyPressed=='77'){
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    
    }
    if(keyPressed=='38'){
     Up()  ;
     console.log("up") ;

    }
    if(keyPressed=='40'){
        down()  ;
        console.log("down") ;
   
    } 
    if(keyPressed=='37'){
        left()  ;
        console.log("left") ;
   
    } 
    if(keyPressed=='39'){
        right()  ;
        console.log("right") ;
   
    }  
    if(keyPressed=='70'){
        blockupdate('ironman_face.png');
        console.log("f");
    }
    if(keyPressed=='66'){
        blockupdate('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed=='76'){
        blockupdate('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed=='82'){
        blockupdate('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed=='72'){
        blockupdate('captain_america_left_hand.png');
        console.log("h");
    }
    if(keyPressed=='65'){
        blockupdate('hulk_face.png');
        console.log("a");
    }if(keyPressed=='67'){
        blockupdate('hulk_left_hand.png');
        console.log("c");
    }
    if(keyPressed=='69'){
        blockupdate('hulk_right_hand.png');
        console.log("e");
    }
    if(keyPressed=='70'){
        blockupdate('ironman_body.png');
        console.log("f");
    }
    if(keyPressed=='71'){
        blockupdate('ironman_legs.png');
        console.log("g");
    }
    if(keyPressed=='73'){
        blockupdate('ironman_left_hand.png');
        console.log("i");
    }
    if(keyPressed=='75'){
        blockupdate('ironman_right_hand.png');
        console.log("k");
    }
}
function Up(){
if (playery>=0){
    playery=playery-blockheight;
    canvas.remove(player_object);
    playerupdate();

}

}
function down(){
    if(playery<=460){
        playery=playery+blockheight;
        canvas.remove(player_object);
        playerupdate();
    
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockwidth;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockwidth;
        canvas.remove(player_object);
        playerupdate();
    }
}


