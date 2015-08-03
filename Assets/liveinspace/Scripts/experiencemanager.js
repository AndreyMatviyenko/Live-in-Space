#pragma strict

//here are public variables that are accessed in the inspector. this script manages the experience bar and the level text at the top of the screen.
var levelText:GUIText;
var levelBar:GUITexture;
var bar1:GUITexture;
var lvlUpSound:AudioClip;
//var highScoreText:GUIText;
var scoreText : GUIText;
private var score:int = 0;
private var plusScore: int = 10;
//private var highScore: int;
//var highScoreKey = "highScore";

//these keep track of amount of experience and level number
private var expAmount:float = 0.0;
private var level:int = 1;



@script RequireComponent(HScore)
var hs : HScore;

function Start() {
//var go : GUIText = GameObject.Find("ScoreGUI").GetComponent(GUIText);
//highScoreText = GameObject.Find("HighScore").GetComponent(GUIText);
scoreText = GameObject.Find("Score").GetComponent(GUIText);


hs = GameObject.Find("HighScore").GetComponent(HScore);
//highScore = hs.hScorePrev;


}

function FixedUpdate () {

scoreText.text = "Score: " + score;
if(hs.hScore < score){
//	highScore = score;
	hs.hScore = score;
//PlayerPrefs.SetInt ("ScoreInt", highScore);
//PlayerPrefs.Save ();
//Debug.Log("save");	
}	
//highScoreText.text = "highScore: " + highScore;
//make sure the blue part of the level bar stays the same height as the white and black bar while changing resolution
levelBar.transform.localScale = Vector3(0.24*(expAmount/(45*level)),bar1.transform.localScale.y,1);

//this checks to see if theres enough experience to level up. for this simple example we made it take 45 orbs more for every level to level up.
if(expAmount >= (45*level)){
//play the level up sound if we level up.
GetComponent.<AudioSource>().PlayOneShot(lvlUpSound);
//exp goes back to 0 so the bar is blank again.
expAmount = 0;
// add a level
level += 1;
// update the level text at the top to show the new level
levelText.text = "Lvl " + level.ToString();
//this message is received by weapons so they can keep track of the level and get better as well. 
SendMessage("levelup", level, SendMessageOptions.DontRequireReceiver);
}
}

//if an orb hits the player, we gain experience. (expAmount)
function OnTriggerEnter (other : Collider){
if(other.name == "exp(Clone)"){
expAmount += 1;
score += plusScore;
Destroy(other.gameObject);
}
}




	
