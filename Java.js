

let ism =prompt("Izmingizni kiriting");
let harf = prompt("Hohlagan harifingizni");


if(ism .toLowerCase().includes(harf.toLowerCase())) {
    alert("Bu ism da :  "  +   ism   +     +  harf +   "   harfi bor    :  " )
}
else {
    alert("Bu ism da :  " + ism+  +  harf + "  harf yoq :  " )
};