var c_set="ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
var s1='',s2;
var atbl;
var j=0;
var slfT;

(function tblCrt(){
atbl="<table border='2' id=''><tr>";

for (var i=0; i<(c_set.length); i++)
{
atbl+="<td id='td" + i + "'>" + c_set.substr(i,1) + "</td>";
}

atbl+="</tr></table>";}())


function hlghtY(a, b)
{
document.getElementById("td"+a).style.backgroundColor="yellow";
document.getElementById("inlttr"+b).style.color="yellow";
document.getElementById("inlttr"+b).style.fontSize="200%";
}

function hlghtG(a)
{
document.getElementById("td"+a).style.backgroundColor="lime";
}

function clrY(a,b)
{
document.getElementById("td"+a).style.backgroundColor=document.getElementsByTagName("h1")[0].style.backgroundColor;
document.getElementById("inlttr"+b).style.color="black";
document.getElementById("inlttr"+b).style.fontSize="100%";
}

function chngP(a,b)
{
document.getElementById("demo").innerHTML=a;
document.getElementById("lttr"+b).style.fontSize="200%";
document.getElementById("lttr"+b).style.color="red";
}

function resP(a)
{
document.getElementById("lttr"+a).style.fontSize="";
document.getElementById("lttr"+a).style.color="";
}

function lstHlght()
{
document.getElementById("demo").style.fontSize="300%";
document.getElementById("demo").style.color="red";
}

function rstHlght()
{
document.getElementById("demo").style.fontSize="";
document.getElementById("demo").style.color="";
}

function ceasar() {
var str = document.getElementById("dz_mt").value;
var k=parseInt(document.getElementById("ant").value);
var xStr='';

if (j==0)
{
	s1='';
	document.getElementById("demo").innerHTML='';
	rstHlght();
}
else if (j>=(str.length)){
		setTimeout(lstHlght(),3500);
		clearTimeout(slfT);
		j=0;
		return 0;
}

str=str.toUpperCase();

for (i=0;i<str.length;i++)
{
xStr+="<span id='inlttr" + i + "'>" + str.substr(i,1) + "</span>";
}

document.getElementById("dz_mt_t").innerHTML=xStr;

	if ((str.substr(j,1)==' ') || (c_set.indexOf(str.substr(j,1))<0))
	{
	s1+=' ';
	slfT=setTimeout(ceasar, 100);
	}
	else
	{
	s2=c_set.indexOf(str.substr(j,1));
	setTimeout(hlghtY, 200, s2, j);
	setTimeout(clrY, 2500, s2, j);
	s2=(s2+k)%(c_set.length);
	setTimeout(hlghtG, 1000, s2);
	setTimeout(clrY, 2500, s2);
	s1+="<span id='lttr" + j + "'>" +c_set.substr(s2,1) + "</span>";
	setTimeout(chngP, 1800, s1,j);
	setTimeout(resP, 2500, j);
	slfT=setTimeout(ceasar, 3000);
	}
	j++;
}