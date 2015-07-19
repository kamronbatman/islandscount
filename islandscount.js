function countIslands(m) {
  for ( i = 0, s = 0, p = m.indexOf('\n'); i < m.length; i++ ) {
    s += m[i] == '0' &&
      m[i-1] != '0' &&
      m[i-p-1] != '0' &&
      (m[i+1] != '0' || m[i-p] != '0')
  }

  return s;
}