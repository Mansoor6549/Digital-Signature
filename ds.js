const canvas = document.getElementById('signatureCanvas');
const clearButton = document.getElementById('clearButton');
const downloadButton = document.getElementById('downloadButton');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// ... (previous JavaScript)

downloadButton.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'signature.png';
  
    // Create a new canvas with white background and draw the signature on it
    const newCanvas = document.createElement('canvas');
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
    const newCtx = newCanvas.getContext('2d');
    newCtx.fillStyle = '#fff'; // white background
    newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);
    newCtx.drawImage(canvas, 0, 0);
  
    // Convert the new canvas to an image and set it as the download link
    link.href = newCanvas.toDataURL('image/png');
  
    link.click();
  });
  
  // ... (previous JavaScript)

const penWeightInput = document.getElementById('penWeight');
let penWeight = penWeightInput.value;

penWeightInput.addEventListener('input', () => {
  penWeight = penWeightInput.value;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = penWeight;
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
});

// ... (previous JavaScript)
// ... (previous JavaScript)

downloadButton.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'signature.png';
  
    // Create a new canvas with white background and draw the signature on it
    const newCanvas = document.createElement('canvas');
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
    const newCtx = newCanvas.getContext('2d');
    newCtx.fillStyle = '#fff'; // white background
    newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);
    newCtx.drawImage(canvas, 0, 0);
  
    // Convert the new canvas to an image and set it as the download link
    link.href = newCanvas.toDataURL('image/png');
  
    link.click();
  });
  
  // ... (previous JavaScript)