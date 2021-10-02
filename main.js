var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("data:image/jpeg;base64,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",function(Img){
        player_object=Img;
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
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });  
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=='80')
    {
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&keyPressed=='77')
    {
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

if(keyPressed=='38')
{
    up();
}
if(keyPressed=='40')
{
    down();
}
if(keyPressed=='37')
{
    left();
}
if(keyPressed=='39')
{
    right();
}
if(keyPressed=='87')
{
    new_image('wall.jpg');
}
if(keyPressed=='71')
{
    new_image('ground.png');
}
if(keyPressed=='76')
{
    new_image('light_green.png');
}
if(keyPressed=='84')
{
    new_image('trunk.jpg');
}
if(keyPressed=='82')
{
    new_image('roof.jpg');
}
if(keyPressed=='89')
{
    new_image('yellow_wall.png');
}
if(keyPressed=='68')
{
    new_image('dark_green.png');
}
if(keyPressed=='85')
{
    new_image('unique.png');
}
if(keyPressed=='67')
{
    new_image('cloud.jpg');
}
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}