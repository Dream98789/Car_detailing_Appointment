// 顯示 NotionForms 表單按鈕互動
const showFormBtn = document.getElementById('show-form-btn');
const notionFormContainer = document.getElementById('notionform-container');
if (showFormBtn && notionFormContainer) {
  showFormBtn.addEventListener('click', () => {
    showFormBtn.style.display = 'none';
    notionFormContainer.style.display = 'block';
  });
}

// 顯示感謝訊息
function showThankYou() {
  notionFormContainer.innerHTML = '<div class="thank-you-message" style="text-align:center;padding:2em 0;font-size:1.5em;color:#ff9800;">感謝您的預約！</div>';
}

// 監聽 NoteForms 的 postMessage
window.addEventListener('message', function(event) {
  // NoteForms 會發送 {event: 'formSubmission'}
  if (event.data && event.data.event === 'formSubmission') {
    showThankYou();
  }
});
