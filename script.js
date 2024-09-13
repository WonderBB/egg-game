const eggContainer = document.getElementById('egg-container');
const walletDisplay = document.getElementById('wallet');
let wallet = 0;
let eggCount = 0; // 달걀 카운터
const maxEggs = 10; // 최대 달걀 수

function createEgg() {
    if (eggCount >= maxEggs) {
        clearInterval(eggInterval); // 10번 이후에는 더 이상 달걀이 나오지 않음
        return;
    }

    const egg = document.createElement('div');
    egg.classList.add('egg');
    
    // 달걀이 화면의 랜덤한 위치에 나타나게 설정
    egg.style.top = Math.random() * (eggContainer.offsetHeight - 70) + 'px';
    egg.style.left = Math.random() * (eggContainer.offsetWidth - 50) + 'px';

    // 달걀 클릭 이벤트
    egg.addEventListener('click', () => {
        const randomMoney = Math.floor(Math.random() * (10000 - 100 + 1)) + 100; // 100원 ~ 10000원 랜덤
        wallet += randomMoney;
        walletDisplay.textContent = `내 지갑: ${wallet}원`;
        
        // 클릭 후 달걀 제거
        egg.remove();
    });

    eggContainer.appendChild(egg);
    eggCount++; // 달걀 카운터 증가
}

// 5초마다 달걀 생성 (5000ms = 5초)
const eggInterval = setInterval(createEgg, 5000);
