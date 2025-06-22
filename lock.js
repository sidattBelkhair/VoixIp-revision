function activateLock() {
  document.getElementById("main").style.display = "none";
  document.getElementById("lockscreen").style.display = "flex";
  document.documentElement.requestFullscreen(); // Fullscreen forcé
}

function checkCode() {
  let input = document.getElementById("unlockCode").value;
  if (input === "supnum2024") {
    document.exitFullscreen();
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("main").style.display = "block";
    alert("✅ تم فتح القفل بنجاح");
  } else {
    document.getElementById("msg").innerText = "❌ رمز غير صحيح!";
  }
}
