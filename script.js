let scorePlayer = 0;
let scoreComputer = 0;

const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const resultTitle = document.getElementById('resultTitle');
const resultDescription = document.getElementById('resultDescription');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const playerScore = document.getElementById('scorePlayer');
const computerScore = document.getElementById('scoreComputer');
const resetBtn = document.getElementById('resetBtn');

const icons = {
    batu: '🪨',
    gunting: '✂️',
    kertas: '📄'
};

choices.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.dataset.choice;


        const random = Math.random();

        let komputer;

        if (random < 0.34) {
            komputer = 'batu';
        } else if (random < 0.67) {
            komputer = 'gunting';
        } else {
            komputer = 'kertas';
        }

        let hasil;

        if (player === komputer) {
            hasil = 'SERI!';
        } else if (player === 'batu') {
            hasil = komputer === 'gunting' ? 'MENANG!' : 'KALAH!';
        } else if (player === 'gunting') {
            hasil = komputer === 'batu' ? 'KALAH!' : 'MENANG!';
        } else {
            hasil = komputer === 'batu' ? 'MENANG!' : 'KALAH!';
        }

        if (hasil === 'MENANG!') {
            scorePlayer++;
            message.textContent = '🎉 Kamu Menang!';
        } else if (hasil === 'KALAH!') {
            scoreComputer++;
            message.textContent = '😢 Kamu Kalah!';
        } else {
            message.textContent = '🤝 Hasilnya Seri!';
        }

        playerScore.textContent = scorePlayer;
        computerScore.textContent = scoreComputer;

        playerIcon.textContent = icons[player];
        computerIcon.textContent = icons[komputer];

        resultTitle.textContent = hasil;
        resultDescription.textContent =
            player.charAt(0).toUpperCase() + player.slice(1) +
            ' vs ' +
            komputer.charAt(0).toUpperCase() + komputer.slice(1);
    });


});

resetBtn.addEventListener('click', () => {
    scorePlayer = 0;
    scoreComputer = 0;


    playerScore.textContent = '0';
    computerScore.textContent = '0';

    playerIcon.textContent = '❔';
    computerIcon.textContent = '❔';

    resultTitle.textContent = 'VS';
    resultDescription.textContent = 'Pilih salah satu';
    message.textContent = 'Pilih senjatamu!';


});
