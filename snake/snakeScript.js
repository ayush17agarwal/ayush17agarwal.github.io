$(document).ready(function() {
    //Define Variables
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var cellWidth = 15;
    var direction = "right";
    var food;
    var score;
    var speed = 200;
    var color = 'green';

    //snake array
    var snake_array;

    function initializer() {
        direction = "right";
        createSnake();
        createFood();
        score = 0;

        if(typeof gameLoop != "undefined") {
          clearInterval(gameLoop);
        }
        gameLoop = setInterval(draw, speed)
    }

    initializer();

    function createSnake() {
        var length = 5;
        snake_array = [];
        for(var i = length-1; i >= 0; i--) {
            snake_array.push({x: i, y: 0});
        }
    }

    function createFood() {
        food = {
            x: Math.round(Math.random() * (width-cellWidth)/cellWidth),
            y: Math.round(Math.random() * (height-cellWidth)/cellWidth),
        };
    }

    function draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,width,height);
        ctx.strokeStyle = "white";
        ctx.strokeRect = (0,0, width, height);

        var currentx = snake_array[0].x;
        var currenty = snake_array[0].y;

        if(direction == 'right') currentx++;
        else if(direction == 'left') currentx--;
        else if(direction == 'up') currenty++;
        else if(direction == 'down') currenty--;

        if(currentx == -1 || currentx == width/cellWidth || currenty == -1 || currenty == height/cellWidth || checkCollision(currentx, currenty, snake_array)) {
            //initializer();
            $("#final_score").html(score);
            $("#overlay").fadeIn(300);
            return;
        }

        if(currentx == food.x && currenty == food.y) {
            var tail = {x: currentx, y: currenty};
            score++;
            createFood();
        }
        else {
            tail = snake_array.pop();
            tail.x = currentx; tail.y = currenty;
        }

        snake_array.unshift(tail);

        for(var i = 0; i < snake_array.length; i++) {
            var c = snake_array[i];
            paintCell(c.x,c.y);
        }

        paintCell(food.x, food.y);

        $("#score").html('Your Current Score: ' + score)
    }

    function paintCell(x, y) {
        ctx.fillStyle=color;
        ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
        //ctx.strokeStyle = "white";
        //ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);

    }

    function checkCollision(x,y,array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].x == x && array[i].y == y)
                return true;
        }
        return false;
    }

    $(document).keydown(function(e) {
      var key = e.which;
      if(key == "37" && direction != "right") {direction = "left";}
      else if(key == "38" && direction != "up") {direction = "down";}
      else if(key == "39" && direction != "left") {direction = "right";}
      else if(key == "40" && direction != "down") {direction = "up";}
    });


});
