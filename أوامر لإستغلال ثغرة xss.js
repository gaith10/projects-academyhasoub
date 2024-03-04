
// هذا الكود هو استدعاء لدالة alert() في JavaScript، حيث يتم عرض نافذة تنبيه تحتوي على النص "Stored XSS attack!".//
alert('Stored XSS attack!')
//---------------------------------------------------------------------------------------------------------/
// محدد بشكل موجز، هذه الوظيفة تقوم بأخذ نص مدخل من مربع البحث، ثم تعرض نتائج البحث في عنصر  .//
function search() {
  var query = document.getElementById("searchBox").value;
  var resultsDiv=cument.getElementById("results");
  resultsDiv.innerHTML = "Search results for:" + query;
}
//-------------------------------------------------------------------------
//هذه الوظيفة في JavaScript تسمى encodeInput()، وهي تستخدم لترميز الإدخال النصي. هنا هو كيفية عمل الوظيفة:
function encodeInput (input)  {
    const encoded = document.createElement('div');
    encoded.innerText = input;
    return encoded.innerHTML;
  }
//  


