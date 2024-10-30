const text = document.createElement('text');
const btn = document.getElementById('btn');


    btn.addEventListener('click', () => {
        setTimeout(() => {
        const text = document.getElementById('text').textContent;
        document.getElementById('text').textContent  = 'ボタンがクリックされました';
        }, 2000);
    
    });





