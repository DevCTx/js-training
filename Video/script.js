const video = document.querySelector("video");
const stream =
  await window.navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
await video.play();
