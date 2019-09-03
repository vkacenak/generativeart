let i,artwork,element,element2, multi;

function setup(){
artwork = document.querySelectorAll('.artwork')

drawOne();
drawTwo();
drawThree();
drawFour();
drawFive();
drawSix();
drawSeven();
drawEight();
drawNine();


}

function drawOne(){
    for(i = 0; i < 20; i++){
box = document.createElement('div');
box.classList.add("box");
box.style.height = (10*i +100) + "px";
box.style.width = (10*i +100) +"px";
artwork[0].appendChild(box);
    }
}
function drawTwo(){
    for(i = 0; i < 9; i++){
element = document.createElement('div');
element.classList.add("box");
element.style.transform = "rotate(" + 10*i +"deg)"

artwork[1].appendChild(element);
    }
}
function drawThree(){
    for(i = 0; i < 10; i++){
element = document.createElement('div');
element.classList.add("circle");
element.style.height = (20*i) + "px";
element.style.width = (20*i) +"px";
artwork[2].appendChild(element);
    }
}
function drawFour(){
    for(i = 0; i < 20; i++){
element = document.createElement('div');
element.classList.add("box");
element.style.transform = "translate(" + (-90 + i * 10) + "px," + (-90 + i * 10) + "px)";
artwork[3].appendChild(element);
    }
}
function drawFive(){
    for(i = 1; i < 10; i++){
element = document.createElement('div');
element.classList.add("circle");
element.style.height = (i*i) + "px";
element.style.width = (i*i) +"px";
artwork[4].appendChild(element);
    }
}
function drawSix(){
    for(i = 0; i < 13; i++){
element = document.createElement('div');
element.classList.add("circle");
multi = -20 + 5 * i;
element.style.transform = "translate(" + multi + "px, -50px) rotate("+ (multi *4) + "deg)";
artwork[5].appendChild(element);
    }
}
function drawSeven(){
    for(i = 0; i < 20; i++){
        element = document.createElement('div');
        element.classList.add("circle");
        multi = i*10;
        element.style.height = multi + "px";
        element.style.width = multi +"px";
        element.style.transform = "translate(" + multi + "px," + (-(multi / 2)) + "px)";
        artwork[6].appendChild(element);
            }

}
function drawEight(){
    for(i = 0; i < 15; i++){
        element = document.createElement('div');
        element.classList.add("box");
        multi = 50 + i*10;
        element.style.height = multi + "px";
        element.style.width = multi +"px";
        element.style.transform = "translateX(" + multi / 2 + "px) rotate("+ multi + "deg)";
        artwork[7].appendChild(element);
            }

}



function drawNine(){
    for(i = 0; i < 5; i++){
        element = document.createElement('div');
        let element2 = document.createElement('div');
        element2.classList.add("circle");
        element.classList.add("box");
        multi = 50 + i * 30;
        element.style.height = multi + "px";
        element.style.width = multi +"px";
        element2.style.height = multi + "px";
        element2.style.width = multi +"px";

        artwork[8].appendChild(element);
        artwork[8].appendChild(element2);
            }

}





setup();
/*


function artwork9() {
    for (i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let second_div = document.createElement("div");
        document.getElementById("artwork9").appendChild(div);
        document.getElementById("artwork9").appendChild(second_div);
        div.classList.add("box");
        second_div.classList.add("circle")
        multiplier = 50 + i * 30;
        const divs = [div, second_div]
        divs.forEach(e => {
            e.style.height = multiplier + "px";
            e.style.width = multiplier + "px";
        });
    }
}
*/
