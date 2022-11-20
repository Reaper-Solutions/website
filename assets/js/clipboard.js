function copyDiscordToClipboard() {
    navigator.clipboard.writeText("Farmeurimmo#0462").then(function () {
        alert("Discord copié !");
    }, function () {
        alert("Une erreur est survenue lors de la copie du discord");
    });
}

function copyMailToClipboard() {
    navigator.clipboard.writeText("contact@farmeurimmo.fr").then(function () {
        alert("L'adresse mail a été copiée dans le presse-papier");
    }, function () {
        alert("Une erreur est survenue lors de la copie de l'adresse mail");
    });
}