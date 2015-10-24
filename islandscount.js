function countIslands (map,row) {
  function search(idx,flag) {
    if (map[idx] === '0') {
      map[idx] = (s += flag|0);
      search(idx-1); //Recurse left
      search(idx+row); //Recurse 1 row below
      search(idx+1); //Recurse right
      search(idx-row); //Recurse 1 row above
    }
  }

  for ( var i = 0, s = 0; i < map.length; i++ ) {
    search(i,1);
  }

  return s;
}
