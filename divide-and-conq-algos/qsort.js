
/**
 * 
 *  QuickSort - Jonathan Malcomb
 * 
 *  In-place QuickSort
 *  Best Case Running Time -> O(nlogn)
 *  Worst Case Running Time -> O(n^2)
 *  Expected Running Time -> O(nlogn)
 * 
 */

function inplace_qsort(arr, start, end) {
  if (start < end) {
    let p_ele = inplace_partition(arr, start, end);
    inplace_qsort(arr, start, p_ele - 1);
    inplace_qsort(arr, p_ele + 1, end);
  }
}

function inplace_partition(arr, start, end) {
  let head = start;
  let target = arr[end];
  let i = head - 1; 
  let temp;

  for (head; head < end; head++) {
    if (arr[head] <= target) {
      i++;
      temp = arr[head];
      arr[head] = arr[i];
      arr[i] = temp;
    }
  }

  temp = arr[end];
  arr[end] = arr[i + 1];
  arr[i + 1] = temp;
  return i + 1;
}
