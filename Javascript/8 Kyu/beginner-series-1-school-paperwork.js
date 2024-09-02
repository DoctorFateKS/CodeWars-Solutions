/* 🎓 Challenge Title: Beginner Series #1 - School Paperwork
   💪 Difficulty: 8 kyu
   🔗 URL: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

   📜 Challenge Description:
   Your classmates asked you to copy some paperwork for them. 
   You know that there are 'n' classmates and the paperwork has 'm' pages.
   Your task is to calculate how many blank pages you need. If n < 0 or m < 0, return 0.

   💡 My Solution:
*/

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0; // 🧠 Check if both 'n' (number of classmates) and 'm' (number of pages) are positive numbers. If true, return the product of n and m (total pages needed). If either 'n' or 'm' is not positive (i.e., 0 or negative), return 0 as no pages are needed.
}

/* 🧪 Example Usage:
   ✅ paperwork(5, 5) === 25   // 5 classmates each needing 5 pages results in 25 total pages.
   ❌ paperwork(-5, 5) === 0   // Negative number of classmates, so no pages are needed.
*/
