//Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
    
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    
    return canvas;
    
}