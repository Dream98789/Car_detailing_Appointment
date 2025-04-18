// 顯示 NotionForms 表單按鈕互動
const showFormBtn = document.getElementById('show-form-btn');
const notionFormContainer = document.getElementById('notionform-container');
if (showFormBtn && notionFormContainer) {
  showFormBtn.addEventListener('click', () => {
    showFormBtn.style.display = 'none';
    notionFormContainer.style.display = 'block';
  });
}
