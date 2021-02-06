
let t_arr = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
let start = 0;
let end = t_arr.length - 1;

inplace_quicksort(t_arr, start, end);
console.table(t_arr);

function inplace_quicksort(arr, start, end) {
  if (start < end) {
    let p_ele = inplace_partition(arr, start, end);
    inplace_quicksort(arr, start, p_ele - 1);
    inplace_quicksort(arr, p_ele + 1, end);
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



