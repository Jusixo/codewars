
simple fun happy 'g'



function gHappy(str) {
  for (var happy = 0; happy < str.length; happy++) {
    if (str[happy] == 'g' && !(str[happy-1] == 'g' || str[happy+1] == 'g')) {
      return false
    }
  }
  return true
}
