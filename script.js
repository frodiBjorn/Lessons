'use strict';


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses()


function detectDayBudget() {                                           // Расчет дневного бюджета
    appData.moneyPerDar = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день составляет: " + appData.moneyPerDar + ' рублей');
}
detectDayBudget();


function detectLevel() {                                              // Расчет уровня достатка
    if (appData.moneyPerDar <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDar > 100 && appData.moneyPerDar <= 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDar > 2000) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Что то пошло не так')
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);

    }
}
checkSavings();


function chooseOptExpenses() {     
                           // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let question = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = question;
    }
}

chooseOptExpenses();