//This function passes all Makersquare tests.
function m(m) {
  for ( i = 0, s = 0, p = m.indexOf('\n'); i < m.length; i++ ) {
    s += m[i] == '0' &&
      m[i-1] != '0' &&
      m[i-p-1] != '0' &&
      (m[i+1] != '0' || m[i-p] != '0')
  }

  return s;
}

//This is the proper function that will pass all test cases
function countIslands (m) {
  var r = function(idx,start) {
    if (m[idx] === '0') {
      m[idx] = (s += start);

      r(idx-1,0), r(idx+p+1,0), r(idx+1,0), r(idx-p-1,0)
    }
  }

  for ( var i = 0, s = 0, p = m.indexOf('\n'), m = m.split(''); i < m.length; i++ ) {
    r(i,1);
  }

  return s;
}