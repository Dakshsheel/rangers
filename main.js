var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_width = 350;
block_height = 430;

var block_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
        
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top:block_y,
        left:block_x
        });
        canvas.add(block_object);
            });
	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png');
		console.log("r");
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
		console.log("g");
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x = 350;
		new_image('yr.png');
		console.log("y");
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("p");
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("b");
	// upload blue ranger
	}
	
}

