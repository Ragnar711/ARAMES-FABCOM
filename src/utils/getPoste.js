export function getPoste() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 14) {
        return "Matin";
    } else if (currentHour >= 14 && currentHour < 22) {
        return "Après-midi";
    } else {
        return "Nuit";
    }
}
