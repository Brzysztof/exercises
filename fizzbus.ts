class JanPaweu
{
    generate(number: number){
    let output: string[];
for (let i = 1; i <= 100; i++) {
    output.push(this.getReplacment(i));
}
return output
}
getReplacment(number: number): {
    if (number%3 === 0 && number%5 === 0); return "JanPaweu";
    if (number%3) return "Jan";
    if (number%5) return "Paweu";
    else return 100;
}
}
const JanPaweu = new JanPaweu();
const result = JanPaweu.generate(100);
console.log(result.join(" "));
