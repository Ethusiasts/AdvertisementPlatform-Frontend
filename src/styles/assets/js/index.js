var header = $("home_hero");

var backgrounds = new Array(
  "url(https://images.unsplash.com/photo-1512864733469-8c0d7cc3ccf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)",
  "url(http://placekitten.com/200)",
  "url(http://placekitten.com/300)",
  "url(http://placekitten.com/400)"
);

var current = 0;

function nextBackground() {
  current++;
  current = current % backgrounds.length;
  header.css("background-image", backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css("background-image", backgrounds[0]);
