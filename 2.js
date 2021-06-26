player1_name= localStorage.getItem("player1name");
player2_name= localStorage.getItem("player2name");

p1_score=0;
p2_score=0;

document.getElementById("player1name").innerHTML=player1_name;
document.getElementById("player2name").innerHTML=player2_name;

document.getElementById("player1score").innerHTML=p1_score;
document.getElementById("player2score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="Question Turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;

function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    word=parseInt(number1) * parseInt(number2)
    
    question_word="<h4 id='word_display'>q."+number1+"x"+number2+"</h4>";
    input_box="<br><br>Answer:<input type='text' id='inputcheckbox'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
question_turn="player1"
answer_turn="player2"
function check(){
    get_answer=document.getElementById("inputcheckbox").value
    answer=parseInt(get_answer)
    if (answer == word) {
        if (answer_turn == "player1") {
            p1_score=p1_score+1;
            document.getElementById("player1score").innerHTML=p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("player2score").innerHTML=p2_score;          
        }
    }
    if (question_turn == "player1") {
       question_turn="player2"; 
       document.getElementById("player_question").innerHTML="Question Turn:"+player2_name;
    }
    else{
       question_turn="player1";
       document.getElementById("player_question").innerHTML="Question Turn:"+player1_name; 
    }
    if (answer_turn == "player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;   
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player1_name;
    }
    document.getElementById("output").innerHTML="";
};