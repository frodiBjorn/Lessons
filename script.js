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
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDar = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на один день составляет: " + appData.moneyPerDar + ' рублей');
    },
    detectLevel: function () {
        if (appData.moneyPerDar <= 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDar > 100 && appData.moneyPerDar <= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDar > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Что то пошло не так')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let question = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = question;
        }
    },
    chooseIncome: function () {

        let items = prompt('Что принесёт доп. доход? (Перечислите через запятую)', '');

        if (typeof (items) != 'string' || (typeof (items)) == null || items == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
        }

        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });

    }
};
for (let key in appData) {
    alert("Наша программа включает в себя данные: " + key + " : " + appData.key);
}









