#pragma strict

public var hScore : int = 0;
public var hScorePrev : int = 0;
public var hsText : GUIText;
public var hScoreKey = "highScore";

function Start() {
Initialize();
}

function FixedUpdate () {
if (hScore > hScorePrev) {
hScorePrev = hScore;
hsText.text = "highScore: " + hScore;
}
}

function Initialize () {
Debug.Log("Init");
hScore = 0;
hScore = PlayerPrefs.GetInt (hScoreKey, 0);
}

function Save () {
Debug.Log("Save");
PlayerPrefs.SetInt (hScoreKey, hScore);
PlayerPrefs.Save ();
//Re initialize the score
Initialize ();
}