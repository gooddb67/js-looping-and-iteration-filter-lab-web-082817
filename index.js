// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(name){
     return name.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(name){
    return name.slice(0,2) === letters
  })
}

function matchName(drivers, string){
  return drivers.filter(function(obj){
    console.log(obj)
    return obj['name'] === string
  })
}
