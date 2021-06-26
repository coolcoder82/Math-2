function StartGame(){
    player1_name=document.getElementById("p1name").value; 

    player2_name=document.getElementById("p2name").value; 

    localStorage.setItem("player1name", player1_name);

    localStorage.setItem("player2name", player2_name);

    window.location="HTML2.html";
}