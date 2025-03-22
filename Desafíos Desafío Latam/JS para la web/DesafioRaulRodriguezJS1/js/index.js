import { sumar } from '../sumar.js';
import { restar } from '../restar.js';


    const sumarBtn = document.querySelector(".sumar");
    const restarBtn = document.querySelector(".restar");

    sumarBtn.addEventListener("click", sumar);
    restarBtn.addEventListener("click", restar);



