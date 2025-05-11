function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OJtr69LyjT":
        Script1();
        break;
      case "64oWjoApuyV":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6qGlvsNMjOc');
const duration = 750;
const easing = 'ease-out';
const id = '6iCm1TjCoIv';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
