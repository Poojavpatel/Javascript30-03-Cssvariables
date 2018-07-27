/*jshint esversion: 6 */
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
    //console.log(this.value);
    const suffix = this.dataset.sizing || '' ;
    console.log(suffix);
    //console.log(this.name);
    //console.log(this.value);
    //console.log(this.value + suffix);
    document.documentElement.style.setProperty(` --${this.name} ` , this.value+suffix );
}

inputs.forEach(input => {
    input.addEventListener('change' , handleUpdate);
});
// inputs.forEach(input => {
//     input.addEventListener('mousemove' , handleUpdate);
// });
