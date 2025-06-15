// ページロード時にlocalStorageから値を取得して自動入力
window.addEventListener('DOMContentLoaded', () => {
  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');

  if (savedEmail && savedPassword) {
    document.getElementById('email').value = savedEmail;
    document.getElementById('password').value = savedPassword;
  }
});

// Sign Inボタン押下時にlocalStorageへ保存
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault(); // フォームの送信を防止

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  alert('情報が保存されました！次回から自動入力されます。');

});
