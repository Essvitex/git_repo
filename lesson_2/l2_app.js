'use strict'
/*1 tusk
В примере 1 ответ 2, так как здесь префиксный инкремент, значит значение a прибавит 1 и выведет 2.
В примере 2 постфиксный инкремент, значит мы сначала выведем 1, а только потом прибавится, и b будет равно 2. Но в выводе останется 1.
В примере 3 сначала прибавиться a = 2 на 1 - будет 3, затем 3 уже сложится с бинарным оператором сложения и будет ответ в c = 5.
В примере 4 тоже самое, только b прибавит себе единицу после вычисления d, таким образом мы просто сложим 2 + b (то есть 2), и получим 4.
*/

/*2 tusk
В данном примере сначала идет обычное присваивание переменной a двойки.
Затем, во второй строчке, по приоритету будет выполнено действие в скобках, то есть a = a*2 = 2*2 = 4. и, как итог, эта 4-ка прибавит 1 и ответом будет 5.
*/

//3 tusk
let val1 = Number(prompt("Введите первое число:"));
let val2 = Number(prompt("Введите второе число:")); 
DifferentOperationsWithTwoNumbers(val1, val2);

/**
 * 
 * @param {number} первый операнд
 * @param {number} второй операнд
 */
function DifferentOperationsWithTwoNumbers(a = 0, b = 0)
{
    if (a >= 0 && b >= 0)
    {
        alert(`Разность чисел = ${a-b}`);
    }
    else if(a < 0 && b < 0)
    {
        alert(`Произведение чисел = ${a*b}`);
    }
    else if((a>=0 && b<0)|| (a < 0 && b>=0))
    {
        alert(`Сумма чисел = ${a+b}`);
    }
    else{
        alert("Данные некорректны!");
        console.log("ERROR: Incorrect input of data.");
    }

    let answer = confirm("Вычислить ещё раз?");
    
    if(answer)
    {
        let val1 = Number(prompt("Введите первое число:"));
        let val2 = Number(prompt("Введите второе число:")); 
        DifferentOperationsWithTwoNumbers(val1, val2);
    }
   
    console.log("MSG: Function 'DifferentOperationsWithTwoNumbers' canceled successfully.");
    return;
}


