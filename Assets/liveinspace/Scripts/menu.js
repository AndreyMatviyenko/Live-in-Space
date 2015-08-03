#pragma strict

//we create a blank texture that actually has no texture attached so we can hide unity's generic button graphics. they are added to the buttons below to do this.
private var blankGfx:Texture;

function Start() {
var go : GameObject = GameObject.Find("ScoreGUI") as GameObject;
DontDestroyOnLoad(go);
}
 
function OnGUI () {
//Play Normal
if(GUI.Button(Rect(Screen.width/3,Screen.height/2.07,Screen.width/3,Screen.height/6), blankGfx, "")){
Application.LoadLevel("NormalGame");
}
//Play Hard
if(GUI.Button(Rect(Screen.width/3,Screen.height/1.47,Screen.width/3,Screen.height/6), blankGfx, "")){
Application.LoadLevel("HardGame");
}
}