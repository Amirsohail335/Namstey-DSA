function MergeSortedArray(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < n + m; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

let n1 = [1, 3, 5];
let n2 = [3, 4, 7];

let res = MergeSortedArray(n1, 3, n2, 3);

console.log(res);
