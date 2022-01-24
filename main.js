var canvas = new fabric.Canvas('myCanvas');
block_image_width= 130;
block_image_height= 130;
player_x = 10;
player_y = 10;
var player_object="";

function player_update()
{
fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
});
    canvas.add(block_image_object);

});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(e.shiftKey == true && keyPressed == "80")
    {
        block_image_width=block_image_width + 10;
        block_image_height=block_image_height + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

        if(e.shiftKey && keyPressed == "77")
        {
            block_image_width=block_image_width - 10;
            block_image_height=block_image_height - 10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
    
        if (keyPressed == "38"){
            up();
        }

        if (keyPressed == "40"){
            down();
        }

        if (keyPressed == "37"){
            left();
        }

        if (keyPressed == "39"){
            right();
        }

        if (keyPressed == "87"){
            new_image('https://i.pinimg.com/originals/b9/2d/87/b92d876ab13590add10114a4e4123df6.gif');
            console.log("w");
        }

        if (keyPressed == "71"){
            new_image('wall.jpg');
        
        }

        if (keyPressed == "76"){
            new_image('https://i5.walmartimages.com/asr/5b491f12-b8fa-4859-a3ac-20b3d435cb26_1.07dbf1b9dc1b9f303eb359b6064aa103.jpeg');
        }

        if (keyPressed == "84"){
            new_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTpAYgzWw7HaAj3rzpO2F3DfShsULaIRKIw&usqp=CAU');
        }

        if (keyPressed == "82"){
            new_image('roof.jpg');
        }

        if (keyPressed == "65"){
            new_image('yellow_wall.png');
        }

        if (keyPressed == "68"){
            new_image('dark_green.png');
        }

        if (keyPressed == "85"){
            new_image('different.png');
        }

        if (keyPressed == "67"){
            new_image('cloud.jpg');
        }
    }


    function up()
{
    if(player_y>=0)
    {
        player_y= player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y<=500)
    {
        player_y= player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + ", Y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>0)
    {
        player_x= player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + ", Y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=850)
    {
        player_x= player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x + ", Y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

