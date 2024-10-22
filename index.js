function getUserInfo() {
    const yearOfBirth = prompt("Введіть ваш рік народження:");
    if (yearOfBirth === null || isNaN(yearOfBirth)) {
        alert("Шкода, що Ви не захотіли ввести свій рік народження.");
        return;
    }

    const city = prompt("Введіть місто, в якому Ви живете:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
        return;
    }

    const sport = prompt("Введіть свій улюблений вид спорту:");
    if (sport === null) {
        alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        return;
    }

    const currentYear = new Date().getFullYear();
    const age = yearOfBirth;

    let cityMessage;
    switch (city.toLowerCase()) {
        case "київ":
            cityMessage = "Ти живеш у столиці України.";
            break;
        case "вашингтон":
            cityMessage = "Ти живеш у столиці США.";
            break;
        case "лондон":
            cityMessage = "Ти живеш у столиці Великобританії.";
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}.`;
    }

    alert(`Ваш вік: ${age}\n${cityMessage}`);
}

getUserInfo();
