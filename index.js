function takeANumber (KatzDeliLine, Name) {
  var position = KatzDeliLine.length+1;
  KatzDeliLine.push(Name);
  return `Welcome, ${Name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) return `Currently serving ${katzDeliLine.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine (line) {
  if (katzDeliLine.length > 0) return ``;
  else return "The line is currently empty"
}