// Codewars 20
// Title :  Find Maxi mum and Minimum Values of a List
// Instructions : Your task is to make two functions
// Challange Url :  https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/dart
// Level : 8kyu

// Method : 1
int max(List<int> n) => n.reduce((cur, next) => cur > next ? cur : next);
int min(List<int> n) => n.reduce((cur, next) => cur < next ? cur : next);

// Method : 2

// Other Users Method
// int min(List<int> list) => ([...list]..sort()).first;
// int max(List<int> list) => ([...list]..sort()).last;
