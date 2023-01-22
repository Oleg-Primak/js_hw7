'use strict'


//1 Калькулятор 
/*
function Calc() {

    this.onCalc = function() {
        const onCalc = confirm ('Включить калькулятор?'); 
        (onCalc) ?this.get() : alert('считайте в уме)'); 
        
    };

    this.get = function() {
        this.a = +prompt('Введите число a');    
        this.oper = prompt('Введите операцию: +, -, *, /');
        this.b = +prompt('Введите число b');

        this.operation();
    };

    this.operation = function() {
        switch(this.oper) {
            case '+' :
                this.result = this.a + this.b;
            break;
            case '-' :
                this.result = this.a - this.b;
            break;
            case '*' :
                this.result = this.a * this.b;
            break;
            case '/' :
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show()
    };

    this.show = function() {
        console.log(this.a  + ' ' + this.oper + ' ' + this.b + ' =' + this.result)
    };
};

let calc = new Calc();
calc.onCalc();
*/

//2 Чайник

function Teapot() {
    this.power = +prompt ('Введите мощность электрочайника, Вт'),
    this.volume = +prompt ('Введите объем чайника, л'),
    this.start = function() { 
        console.log('Мощность чайника: ' + this.power + 'Вт'),
        console.log('Обьем чайника: ' + this.volume + 'л.')

        this.get();
    }

    this.get = function() {
        this.amountWater =  +prompt('Количество воды, которое необходимо нагреть');
        (this.amountWater <= this.volume) ? this.temperature() : alert('Слишком много воды');
    }

    this.temperature = function() {
        this.tempWater = +prompt('Введите температуру до которой нужно нагреть воду от 0 до 100С'); 
            if(this.tempWater > 100){
                alert('Слишком большая температура');
            }else if (this.tempWater <= 0){
                alert('Поставьте воду в холодильник')
            }else {
                this.tempStart();
            }
        }        
    this.tempStart = function() {        
        this.tempStartWater = +prompt('Начальная температура воды');  
           if (this.tempStartWater <=  0){
            alert('это - лед, поищите альтернативу нагрева');
           }else if (this.tempStartWater >=100 || this.tempStartWater >= this.tempWater){
            alert('Чайник не нужен');
           }else {
                this.include()
           }
    }

    this.include = function () {
        const onLeapot = confirm('Включить');
        (onLeapot) ?this.timeBoil() : alert('Пейте холодный кофе:)');
    }

    this.timeBoil = function () {
        let time = ((4200 * this.amountWater * (this.tempWater - this.tempStartWater)) / this.power)/60;
        alert('Время ожидания нагрева воды не более '+ time.toFixed(1) + ' минут');
    }

};
let teapot = new Teapot();
teapot.start();