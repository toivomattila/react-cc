/*
This function helps the display components to select their status image depending
on the size of found results
*/
function getImage(size){
    let images = ["http://www.iconsplace.com/download/orange-error-64.png",
    "http://www.iconsplace.com/icons/preview/00bb00/approval-64.png",
    "http://www.iconsplace.com/icons/preview/black/restart-64.png"]
    if(size === undefined) return images[2];
    if(size === 0) return images[0];
    if(size > 0) return images[1];
    
}
module.exports = {getImage};