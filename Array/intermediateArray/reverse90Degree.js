function rotate90(mat) {
  let matLength = mat.length;
  for (let i = 0; i < matLength; i++) {
    for (let j = i + 1; j < matLength; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < matLength; i++) {
    mat[i].reverse();
    console.log(mat[i]);
  }
}

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotate90(mat);

mat.forEach((row) => {
  console.log(row.join(" "));
});

//* Time complexity is O(n^2)
//* Space complexity is O(1)
