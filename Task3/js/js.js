var textOfTextArea = document.getElementById("text");
var f = document.getElementById("ex1");
var post = document.getElementById('res');
var bold = document.getElementById("bold");
var underline = document.getElementById('underline');
var italics = document.getElementById('italics');
var left = document.getElementById('left');
var right = document.getElementById('right');
var justify = document.getElementById('justify');


function onClick() {
    if (bold.checked) {
        f.innerHTML = textOfTextArea.value;
        f.style.fontWeight = 'bold';
        f.style.display = 'block';
        post.style.display = 'block';
    }
    if (underline.checked) {
        f.innerHTML = textOfTextArea.value;
        f.style.textDecoration = 'underline';
        f.style.display = 'block';
        post.style.display = 'block';
    }
    if(italics.checked){
        f.innerHTML = textOfTextArea.value;
        f.style.fontStyle = 'italic';
        f.style.display = 'block';
        post.style.display = 'block';
    }
    if(left.checked){
        f.innerHTML = textOfTextArea.value;
        f.style.textAlign = 'left';
        f.style.display = 'block';
        post.style.display = 'block';
    }
    if(right.checked){
        f.innerHTML = textOfTextArea.value;
        f.style.textAlign = 'right';
        f.style.display = 'block';
        post.style.display = 'block';
    }
    if(justify.checked){
        f.innerHTML = textOfTextArea.value;
        f.style.textAlign = 'justify';
        f.style.display = 'block';
        post.style.display = 'block';
    }
}