function scuberGreetingForFeet(feet) {
  let result
  if (feet <= 400) {
    result = 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
      result = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
      result = 'No can do.';
  } else {
      result = null;
  }
  return result;
}


function ternaryCheckCity(city){
  let result
  if (city === 'NYC') {
    result = 'Ok, sounds good.';
  } else {
    result = 'No go.'
  }
  return result;
}

function switchOnCharmFromTip(howMuch){
  let result
  if (howMuch === 'generous') {
    result = 'Thank you so much.';
  } else if (howMuch === 'not as generous') {
    result = 'Thank you.';
  } else {
    result = 'Bye.'
  }
  return result;
}