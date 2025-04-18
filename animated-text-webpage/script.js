// 打字機動畫效果
const text = "Dreamaker";
const target = document.getElementById("animated-text");
let idx = 0;

function typeWriter() {
  if (idx <= text.length) {
    target.textContent = text.slice(0, idx);
    idx++;
    setTimeout(typeWriter, 180);
  } else {
    setTimeout(() => {
      idx = 0;
      typeWriter();
    }, 1200); // 停留一段時間再重播
  }
}
typeWriter();
