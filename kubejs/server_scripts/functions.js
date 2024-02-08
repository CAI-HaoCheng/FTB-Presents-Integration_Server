//priority: 1001
function capFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //console.log(Math.floor(Math.random() * (max - min) + min))
  return Math.floor(Math.random() * (max - min) + min);
}