var op;//dichiarazione variabile globale

//funzioni che controllano la scelta dell'utente
function as1(){
op = "a";
}

function as2(){
op = "b";
}

function as3(){
op = "c";
}

function creaAreo(){
if(op==" " || op==null){
alert("Attenzione! Assicurarsi di aver scelto il numero di serie da inserire nel grafico e compilato la tabella prima di procedere");
}
else {
if(op=="a" || op=="b" || op=="c"){
//unaserie
//valori dalle caselle di testo
valore1=eval(document.getElementById("val1").value);
valore2=eval(document.getElementById("val2").value);
valore3=eval(document.getElementById("val3").value);
valore4=eval(document.getElementById("val4").value);
valore5=eval(document.getElementById("val5").value);
valore6=eval(document.getElementById("val6").value);
valore7=eval(document.getElementById("val7").value);
valore8=eval(document.getElementById("val8").value);
//angoli
totale=valore1+valore2+valore3+valore4+valore5+valore6+valore7+valore8;
angolo1=2*Math.PI*valore1/totale;
angolo2=2*Math.PI*valore2/totale;
angolo3=2*Math.PI*valore3/totale;
angolo4=2*Math.PI*valore4/totale;
angolo5=2*Math.PI*valore5/totale;
angolo6=2*Math.PI*valore6/totale;
angolo7=2*Math.PI*valore7/totale;
angolo8=2*Math.PI*valore8/totale;
//canvas
mioCanvas=document.getElementById("canvasAreo");
context=mioCanvas.getContext("2d");
//si disegnano i settori: una sola serie, un grafico a torta

//primo settore
context.beginPath();
context.arc(300,200,100,0,angolo1,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,0,1)";
context.fill();

//secondo settore
context.beginPath();
context.arc(300,200,100,angolo1,angolo1+angolo2,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,165,0,1)";
context.fill();

//terzo settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2,angolo1+angolo2+angolo3,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,255,0,1)";
context.fill();

//quarto settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2+angolo3,angolo1+angolo2+angolo3+angolo4,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(173,255,47,1)";
context.fill();

//quinto settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2+angolo3+angolo4,angolo1+angolo2+angolo3+angolo4+angolo5,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(0,255,127,1)";
context.fill();

//sesto settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2+angolo3+angolo4+angolo5,angolo1+angolo2+angolo3+angolo4+angolo5+angolo6,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(135,206,250,1)";
context.fill();

//settimo settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2+angolo3+angolo4+angolo5+angolo6,angolo1+angolo2+angolo3+angolo4+angolo5+angolo6+angolo7,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(70,130,180,1)";
context.fill();

//ottavo settore
context.beginPath();
context.arc(300,200,100,angolo1+angolo2+angolo3+angolo4+angolo5+angolo6+angolo7,angolo1+angolo2+angolo3+angolo4+angolo5+angolo6+angolo7+angolo8,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,255,1)";
context.fill();

//cerchio nero per definire
context.beginPath();
context.arc(300,200,100,0,Math.PI*2,false);
context.strokeStyle="rgba(0,0,0,1)";
context.lineWidth=1;
context.closePath();
context.stroke();
}//if

if (op == "b" || op == "c"){
//due serie
valore9=eval(document.getElementById("val9").value);
valore10=eval(document.getElementById("val10").value);
valore11=eval(document.getElementById("val11").value);
valore12=eval(document.getElementById("val12").value);
valore13=eval(document.getElementById("val13").value);
valore14=eval(document.getElementById("val14").value);
valore15=eval(document.getElementById("val15").value);
valore16=eval(document.getElementById("val16").value);
//angoli seconda serie
totale2=valore9+valore10+valore11+valore12+valore13+valore14+valore15+valore16;
angolo9=2*Math.PI*valore9/totale2;
angolo10=2*Math.PI*valore10/totale2;
angolo11=2*Math.PI*valore11/totale2;
angolo12=2*Math.PI*valore12/totale2;
angolo13=2*Math.PI*valore13/totale2;
angolo14=2*Math.PI*valore14/totale2;
angolo15=2*Math.PI*valore15/totale2;
angolo16=2*Math.PI*valore16/totale2;
//canvas
mioCanvas=document.getElementById("canvasAreo");
context=mioCanvas.getContext("2d");

//seconda serie (grafico più interno)
//primo settore
context.beginPath();
context.arc(300,200,75,0,angolo9,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,0,1)";
context.fill();

//secondo settore
context.beginPath();
context.arc(300,200,75,angolo9,angolo9+angolo10,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,165,0,1)";
context.fill();

//terzo settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10,angolo9+angolo10+angolo11,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,255,0,1)";
context.fill();

//quarto settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10+angolo11,angolo9+angolo10+angolo11+angolo12,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(173,255,47,1)";
context.fill();

//quinto settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10+angolo11+angolo12,angolo9+angolo10+angolo11+angolo12+angolo13,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(0,255,127,1)";
context.fill();

//sesto settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10+angolo11+angolo12+angolo13,angolo9+angolo10+angolo11+angolo12+angolo13+angolo14,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(135,206,250,1)";
context.fill();

//settimo settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10+angolo11+angolo12+angolo13+angolo14,angolo9+angolo10+angolo11+angolo12+angolo13+angolo14+angolo15,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(70,130,180,1)";
context.fill();

//ottavo settore
context.beginPath();
context.arc(300,200,75,angolo9+angolo10+angolo11+angolo12+angolo13+angolo14+angolo15,angolo9+angolo10+angolo11+angolo12+angolo13+angolo14+angolo15+angolo16,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,255,1)";
context.fill();

//cerchio nero per definire
context.beginPath();
context.arc(300,200,75,0,Math.PI*2,false);
context.strokeStyle="rgba(0,0,0,1)";
context.lineWidth=1;
context.closePath();
context.stroke();

//cerchio bianco interno
context.beginPath();
context.arc(300,200,50,0,Math.PI*2,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,255,255,1)";
context.fill();

//cerchio nero per definire grafico più interno
context.beginPath();
context.arc(300,200,50,0,Math.PI*2,false);
context.strokeStyle="rgba(0,0,0,1)";
context.lineWidth=1;
context.closePath();
context.stroke();
}//if

if (op == "c") { 
//tre serie
valore17=eval(document.getElementById("val17").value);
valore18=eval(document.getElementById("val18").value);
valore19=eval(document.getElementById("val19").value);
valore20=eval(document.getElementById("val20").value);
valore21=eval(document.getElementById("val21").value);
valore22=eval(document.getElementById("val22").value);
valore23=eval(document.getElementById("val23").value);
valore24=eval(document.getElementById("val24").value);
//angoli terza serie
totale3=valore17+valore18+valore19+valore20+valore21+valore22+valore23+valore24;
angolo17=2*Math.PI*valore17/totale3;
angolo18=2*Math.PI*valore18/totale3;
angolo19=2*Math.PI*valore19/totale3;
angolo20=2*Math.PI*valore20/totale3;
angolo21=2*Math.PI*valore21/totale3;
angolo22=2*Math.PI*valore22/totale3;
angolo23=2*Math.PI*valore23/totale3;
angolo24=2*Math.PI*valore24/totale3;
//canvas
mioCanvas=document.getElementById("canvasAreo");
context=mioCanvas.getContext("2d");

//disegno grafico terza serie
//primo settore
context.beginPath();
context.arc(300,200,50,0,angolo17,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,0,1)";
context.fill();

//secondo settore
context.beginPath();
context.arc(300,200,50,angolo17,angolo17+angolo18,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,165,0,1)";
context.fill();

//terzo settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18,angolo17+angolo18+angolo19,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,255,0,1)";
context.fill();

//quarto settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18+angolo19,angolo17+angolo18+angolo19+angolo20,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(173,255,47,1)";
context.fill();

//quinto settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18+angolo19+angolo20,angolo17+angolo18+angolo19+angolo20+angolo21,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(0,255,127,1)";
context.fill();

//sesto settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18+angolo19+angolo20+angolo21,angolo17+angolo18+angolo19+angolo20+angolo21+angolo22,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(135,206,250,1)";
context.fill();

//settimo settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18+angolo19+angolo20+angolo21+angolo22,angolo17+angolo18+angolo19+angolo20+angolo21+angolo22+angolo23,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(70,130,180,1)";
context.fill();

//ottavo settore
context.beginPath();
context.arc(300,200,50,angolo17+angolo18+angolo19+angolo20+angolo21+angolo22+angolo23,angolo17+angolo18+angolo19+angolo20+angolo21+angolo22+angolo23+angolo24,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,0,255,1)";
context.fill();

//cerchio nero attorno
context.beginPath();
context.arc(300,200,50,0,Math.PI*2,false);
context.strokeStyle="rgba(0,0,0,1)";
context.lineWidth=1;
context.closePath();
context.stroke();

//cerchio bianco interno
context.beginPath();
context.arc(300,200,25,0,Math.PI*2,false);
context.lineTo(300,200);
context.closePath();
context.fillStyle="rgba(255,255,255,1)";
context.fill();

//cerchio nero attorno
context.beginPath();
context.arc(300,200,25,0,Math.PI*2,false);
context.strokeStyle="rgba(0,0,0,1)";
context.lineWidth=1;
context.closePath();
context.stroke();

}//if
}//else
}//function creaAreo

//annulla il grafico
function bianco(){
mioCanvas=document.getElementById("canvasAreo");
context=mioCanvas.getContext("2d");

context.beginPath();
context.rect(0,0,635,400)
context.fillStyle="rgba(255,255,255,1)";
context.fill();
}

//funzione alert
function attenzione(){
if(op==" "||op==null){
alert("Attenzione! Assicurarsi di aver scelto il numero di serie da voler inserire prima di iniziare a compilare la tabella");
}
}

//____________________________________________________________________________________________________________________________________________________________________

function EliminaDati(){
localStorage.clear();
}

//_____________________________________________________________________________________________________________________________________________________________________

function SalvaDati(){

EliminaDati(); 

if(op=="a" || op=="b" || op=="c"){
var dato1=document.getElementById("val1").value;
var dato2=document.getElementById("val2").value;
var dato3=document.getElementById("val3").value;
var dato4=document.getElementById("val4").value;
var dato5=document.getElementById("val5").value;
var dato6=document.getElementById("val6").value;
var dato7=document.getElementById("val7").value;
var dato8=document.getElementById("val8").value;

localStorage.setItem("val1",dato1);
localStorage.setItem("val2",dato2);
localStorage.setItem("val3",dato3);
localStorage.setItem("val4",dato4);
localStorage.setItem("val5",dato5);
localStorage.setItem("val6",dato6);
localStorage.setItem("val7",dato7);
localStorage.setItem("val8",dato8);

if(op=="a"){
alert("Dati salvati");
}


}
if(op=="b" || op=="c"){
var dato9=document.getElementById("val9").value;
var dato10=document.getElementById("val10").value;
var dato11=document.getElementById("val11").value;
var dato12=document.getElementById("val12").value;
var dato13=document.getElementById("val13").value;
var dato14=document.getElementById("val14").value;
var dato15=document.getElementById("val15").value;
var dato16=document.getElementById("val16").value;

localStorage.setItem("val9",dato9);
localStorage.setItem("val10",dato10)
localStorage.setItem("val11",dato11);
localStorage.setItem("val12",dato12);
localStorage.setItem("val13",dato13);
localStorage.setItem("val14",dato14);
localStorage.setItem("val15",dato15);
localStorage.setItem("val16",dato16);

if(op=="b"){
alert("Dati salvati");
}


}
if(op == "c"){
var dato17=document.getElementById("val17").value;
var dato18=document.getElementById("val18").value;
var dato19=document.getElementById("val19").value;
var dato20=document.getElementById("val20").value;
var dato21=document.getElementById("val21").value;
var dato22=document.getElementById("val22").value;
var dato23=document.getElementById("val23").value;
var dato24=document.getElementById("val24").value;

localStorage.setItem("val17",dato17);
localStorage.setItem("val18",dato18);
localStorage.setItem("val19",dato19);
localStorage.setItem("val20",dato20);
localStorage.setItem("val21",dato21);
localStorage.setItem("val22",dato22);
localStorage.setItem("val23",dato23);
localStorage.setItem("val24",dato24);

if(op=="c"){
alert("Dati salvati");
}

}//else secondo
}//funzione salva

//_____________________________________________________________________________________________________________________________________________________________________

function MostraDati(){
var data = new Date();
var giorno = data.toLocaleDateString();
var data = data.toLocaleTimeString();

var val1=localStorage.getItem("val1");//recuperano i dati attraverso il metodo getItem;
var val2=localStorage.getItem("val2");
var val3=localStorage.getItem("val3");
var val4=localStorage.getItem("val4");
var val5=localStorage.getItem("val5");
var val6=localStorage.getItem("val6");
var val7=localStorage.getItem("val7");
var val8=localStorage.getItem("val8");

var val9=localStorage.getItem("val9");
var val10=localStorage.getItem("val10");
var val11=localStorage.getItem("val11");
var val12=localStorage.getItem("val12");
var val13=localStorage.getItem("val13");
var val14=localStorage.getItem("val14");
var val15=localStorage.getItem("val15");
var val16=localStorage.getItem("val16");

var val17=localStorage.getItem("val17");
var val18=localStorage.getItem("val18");
var val19=localStorage.getItem("val19");
var val20=localStorage.getItem("val20");
var val21=localStorage.getItem("val21");
var val22=localStorage.getItem("val22");
var val23=localStorage.getItem("val23");
var val24=localStorage.getItem("val24");

var obj = [val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, val18, val19, val20, val21, val22, val23, val24, giorno, data];

var table = document.getElementById("tabella");
var row = table.insertRow(-1);

//si inseriscono le celle nuove in tabella
var cell1 = row.insertCell(0);

var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);

var cell10 = row.insertCell(9);
var cell11 = row.insertCell(10);
var cell12 = row.insertCell(11);
var cell13 = row.insertCell(12);
var cell14 = row.insertCell(13);
var cell15 = row.insertCell(14);
var cell16 = row.insertCell(15);
var cell17 = row.insertCell(16);

var cell18 = row.insertCell(17);
var cell19 = row.insertCell(18);
var cell20 = row.insertCell(19);
var cell21 = row.insertCell(20);
var cell22 = row.insertCell(21);
var cell23 = row.insertCell(22);
var cell24 = row.insertCell(23);
var cell25 = row.insertCell(24);

var cell26 = row.insertCell(25);
var cell27 = row.insertCell(26);

//i dati si riportano in tabella
cell1.innerHTML = "Dati";
 
cell2.innerHTML = obj[0];
cell3.innerHTML = obj[1];
cell4.innerHTML = obj[2];
cell5.innerHTML = obj[3];
cell6.innerHTML = obj[4];
cell7.innerHTML = obj[5];
cell8.innerHTML = obj[6];
cell9.innerHTML = obj[7];

cell10.innerHTML = obj[8];
cell11.innerHTML = obj[9];
cell12.innerHTML = obj[10];
cell13.innerHTML = obj[11];
cell14.innerHTML = obj[12];
cell15.innerHTML = obj[13];
cell16.innerHTML = obj[14];
cell17.innerHTML = obj[15];

cell18.innerHTML = obj[16];
cell19.innerHTML = obj[17];
cell20.innerHTML = obj[18];
cell21.innerHTML = obj[19];
cell22.innerHTML = obj[20];
cell23.innerHTML = obj[21];
cell24.innerHTML = obj[22];
cell25.innerHTML = obj[23];

cell26.innerHTML = obj[24];
cell27.innerHTML = obj[25];
}

function Messaggio(){
if(op==" " || op==null){
alert("Attenzione! Assicurarsi di aver scelto il numero di serie da inserire nel grafico e compilato la tabella prima di procedere");
}
}