import Sound from 'react-native-sound';

Sound.setCategory('Alarm');

const startGame = new Sound('startgame.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});

const top = new Sound('top.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});
const right = new Sound('right.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});
const bottom = new Sound('bottom.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});
const left = new Sound('left.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});
const gameOver = new Sound('gameover.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});


export default {
    startGame,
    top,
    right,
    bottom,
    left,
    gameOver
}