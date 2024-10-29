const btn = document.getElementById('btn');

btn.addEventListener(`click`, () => {
    console.log('クリックされました！');
});

const text = document.createElement('text');

btn.addEventListener('click', () => {
    const text = document.getElementById('text').textContent

    document.getElementById('text').textContent  = 'ボタンがクリックされました';

    
});