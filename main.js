// FAQアコーディオン（1つだけ開く）
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== this) i.classList.remove('active');
    });
    this.classList.toggle('active');
  });
});

// ページトップボタン表示・スムーズスクロール
const pagetop = document.getElementById('pagetop');
window.addEventListener('scroll', function() {
  if(window.scrollY > 320) {
    pagetop.style.display = 'block';
  } else {
    pagetop.style.display = 'none';
  }
});
pagetop.addEventListener('click', function() {
  window.scrollTo({top:0, behavior:'smooth'});
});
