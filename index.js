var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var n = 0

function takeANumber(katzDeliLine){
  n++
  katzDeliLine.push(n)
  return `Welcome. You're ticket number ${n}`
}

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome. You're ticket number #2" [1,2]

// nowServing(katzDeliLine) => "Currently Serving #1" [2]
// nowServing(katzDeliLine) => "Currently serving #2" []

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #3" [3]

function nowServing(katzDeliLine) {
  if  (!katzDeliLine.length) {            //if this evaluates to                                                            //true=false, returns "nobody"
    return "There is nobody waiting to be served!";
  } else {                             //if evaluates to false                                                              //=true, returns # in line
    return `Currently serving ${katzDeliLine.shift()}.`;    
  }
}

function currentLine(katzDeliLine) {
  if  (!katzDeliLine.length) {
    return "The line is currently empty.";    //if true, return "empty"
  }
  var waiting = [];
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {     //if >0 people in line, proceed
    waiting.push(`${i + 1}. ${katzDeliLine[i]}`)         //add position # & name to array end
  }
  return `The line is currently: ${waiting.join(', ')}`   //joins all elements as a string 
}                                                       //and inserts ", " after each element