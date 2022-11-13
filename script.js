var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnErr = document.querySelector('.control .error');
var message = document.querySelector('.toast .message');

btnSuccess.addEventListener('click', function () {
  creatToast('success', 6000);
});
btnWarning.addEventListener('click', function () {
  creatToast('warning');
});
btnErr.addEventListener('click', function () {
  creatToast('error');
});
function creatToast(status, timeout) {
  let templateInner = `
  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
  <span class="message">This is a Warning massgae</span>
  `;
  switch (status) {
    case 'success':
      templateInner = ` 
    <i class="fa-regular fa-circle-check"></i>
    <span class="message">This is a Success massgae</span>`;
      break;
    case 'warning':
      templateInner = `
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
  <span class="message">This is a Warning massgae</span>`;
      break;
    case 'error':
      templateInner = `
      <i class="fa-solid fa-triangle-exclamation"></i>
      <span class="message">This is a Error massgae</span>`;
      break;
  }

  var toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
    <span class="coutdown"></span>
  `;
  timeout = timeout || 4000;
  var toastList = document.getElementById('toasts');
  toastList.appendChild(toast);
  setTimeout(function () {
    toast.style.animation = 'slide_hide 2s ease forwards';
  }, timeout);
  setTimeout(function () {
    toast.remove();
  }, timeout + 2000);
}
