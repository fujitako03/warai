var cnt=0;
var q = document.getElementsByClassName("question");
var f = document.getElementsByClassName("form");
var inp = document.getElementsByTagName("input");
var hp = document.getElementById("hyouka_p");


for (var i = 1; i < q.length; i++) {
    q[i].style.display = "none";
}
for (var i = 1; i < f.length; i++) {
    f[i].style.display = "none";
}
console.log(f.length)

document.getElementById("finish").style.display = "none";
document.getElementById("inputerror").style.display = "none";

document.getElementById("next").addEventListener("click", function() {
    console.log(cnt)
    if(cnt<30){
        if(!(inp[1+6*cnt+0].checked)&& !(inp[1+6*cnt+1].checked)&&
        !(inp[1+6*cnt+2].checked)&& !(inp[1+6*cnt+3].checked)&&
        !(inp[1+6*cnt+4].checked) &&!(inp[1+6*cnt+5].checked)){
            document.getElementById("inputerror").style.display = "block";
            return;
    }}

    var q = document.getElementsByClassName("question");
    var f = document.getElementsByClassName("form");

    q[cnt].style.display = "none";
    f[cnt].style.display = "none";

    cnt += 1;

    if (cnt<31){
        q[cnt].style.display = "block";
        f[cnt].style.display = "block";
    }else{

        q[31].style.display = "block";
        f[31].style.display = "block";
        document.getElementById("finish").style.display = "block";
        document.getElementById("next").style.display = "none";
    }
    document.getElementById("inputerror").style.display = "none";
});
