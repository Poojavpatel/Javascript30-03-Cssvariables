/*jshint esversion: 6 */
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
    //console.log(this.value);
    const suffix = this.dataset.sizing || '' ;
    console.log(suffix);
    //console.log(this.name);
    var foo = this.value + suffix;
    console.log("foo:" + foo);
    document.documentElement.style.setProperty(`--${this.name}`,foo);
}   

inputs.forEach(input => {
    input.addEventListener('change' , handleUpdate);
});
inputs.forEach(input => {
    input.addEventListener('mousemove' , handleUpdate);
});
