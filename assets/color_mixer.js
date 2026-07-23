/*
====================================================
Color Mixer
Alphabet Adventure
====================================================
*/

const ColorMixer = (() => {

const palettes = [

{
name:"Rainbow",
primary:"#ff6b6b",
secondary:"#ffd166",
accent:"#4ecdc4",
background:"#8ed8ff",
paper:"#fffaf2",
button:"#ff8fab"
},

{
name:"Forest",
primary:"#2d6a4f",
secondary:"#95d5b2",
accent:"#52b788",
background:"#d8f3dc",
paper:"#fffef8",
button:"#74c69d"
},

{
name:"Ocean",
primary:"#0077b6",
secondary:"#48cae4",
accent:"#90e0ef",
background:"#caf0f8",
paper:"#ffffff",
button:"#00b4d8"
},

{
name:"Candy",
primary:"#ff4d6d",
secondary:"#ffb3c1",
accent:"#ffccd5",
background:"#ffe5ec",
paper:"#fffafc",
button:"#ff8fab"
},

{
name:"Sunshine",
primary:"#f77f00",
secondary:"#fcbf49",
accent:"#ffe066",
background:"#fff3b0",
paper:"#fffdf6",
button:"#f4a261"
},

{
name:"Lavender",
primary:"#7b2cbf",
secondary:"#c77dff",
accent:"#e0aaff",
background:"#f3e8ff",
paper:"#ffffff",
button:"#9d4edd"
},

{
name:"Jungle",
primary:"#2a9d8f",
secondary:"#8ecae6",
accent:"#90be6d",
background:"#d9ed92",
paper:"#fffef7",
button:"#43aa8b"
},

{
name:"Galaxy",
primary:"#5a189a",
secondary:"#7b2cbf",
accent:"#9d4edd",
background:"#d6bcfa",
paper:"#faf8ff",
button:"#c77dff"
}

];



const letterThemes = {

A:0,
B:1,
C:2,
D:3,
E:4,
F:5,
G:6,
H:7,

I:0,
J:1,
K:2,
L:3,
M:4,
N:5,
O:6,
P:7,

Q:0,
R:1,
S:2,
T:3,
U:4,
V:5,
W:6,
X:7,
Y:2,
Z:3

};



function randomPalette(){

return palettes[
Math.floor(Math.random()*palettes.length)
];

}



function letterPalette(letter){

return palettes[
letterThemes[letter] ?? 0
];

}



function randomColor(){

return "#"+Math.floor(Math.random()*16777215)
.toString(16)
.padStart(6,"0");

}



function lighten(hex,percent){

let num=parseInt(hex.slice(1),16);

let r=(num>>16)+percent;

let g=((num>>8)&255)+percent;

let b=(num&255)+percent;

r=Math.min(255,Math.max(0,r));
g=Math.min(255,Math.max(0,g));
b=Math.min(255,Math.max(0,b));

return `rgb(${r},${g},${b})`;

}



function darken(hex,percent){

return lighten(hex,-percent);

}



function gradient(palette){

return `linear-gradient(
180deg,
${palette.background},
${palette.paper}
)`;

}



return{

palettes,

randomPalette,

letterPalette,

randomColor,

lighten,

darken,

gradient

};

})();
