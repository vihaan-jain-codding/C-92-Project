score1=0;
score2=0;

player1=localStorage.getItem("player_1");
player2=localStorage.getItem("player_2");

document.getElementById("player1").innerHTML=player1 + ":";
document.getElementById("player2").innerHTML=player2 + ":";

document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;

document.getElementById("question").innerHTML="Question Turn: " + player1;
document.getElementById("answer").innerHTML="Answer Turn: " + player2;

function send(){
    number1 = document.getElementById("holder1").value;
    number2 = document.getElementById("holder2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1"){
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn: " + player2;
    }
    else{
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn: " + player1;
    }
    document.getElementById("output").innerHTML= " ";

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn: " + player2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn: " + player1;
    }
    document.getElementById("output").innerHTML= " ";
}
