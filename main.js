function adduser(){
    player1 = document.getElementById("player_1_input").value;
    player2 = document.getElementById("player_2_input").value;
    localStorage.setItem("player_1" , player1);
    localStorage.setItem("player_2" , player2);
    window.location = "quiz_game_page.html";
}