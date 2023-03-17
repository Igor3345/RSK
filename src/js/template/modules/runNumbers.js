export const runNumbers =  () => {

    const numbers = document.querySelectorAll('.js-run_number');

    for(let i = 0 ; i < numbers.length; i++){
        run(numbers[i] , Number(numbers[i].dataset.start), Number(numbers[i].dataset.end), Number(numbers[i].dataset.time), Number(numbers[i].dataset.step));
    }

    function run(element , start , end , time , step){

        let n = 0;
        let t = 0.5;

        let interval = setInterval(()=>{
            n = n + step;
            if(n === end){
                clearInterval(interval);
            }
            element.innerHTML = n;
        } , t)
    }
}