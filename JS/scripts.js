document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('game-area');
    const eventPanel = document.getElementById('event-panel');
    const character = document.getElementById('character');
    const startOverlay = document.getElementById('start-overlay');
    const startButton = document.getElementById('start-button');
    const redSquare = document.getElementById('red-square');
    const scoreDisplay = document.getElementById('score');
    
    let gameStarted = false;
    let score = 0;
    let characterPosition = { x: 0, y: 0 };
    let isPaused = false; // 控制角色移動

    startButton.addEventListener('click', () => {
        startOverlay.style.display = 'none';
        gameStarted = true;
    });

    function updateScore(points) {
        score += points;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function moveCharacter(x, y) {
        if (!gameStarted || isPaused) return;

        // 假設的新位置
        const newX = characterPosition.x + x;
        const newY = characterPosition.y + y;

        // 檢查是否發生碰撞
        if (!checkCollision(newX, newY)) {
            characterPosition.x = Math.max(0, Math.min(gameArea.clientWidth - 50, newX));
            characterPosition.y = Math.max(0, Math.min(gameArea.clientHeight - 50, newY));
            character.style.transform = `translate(${characterPosition.x}px, ${characterPosition.y}px)`;
        } else {
            triggerRedSquareEvent(); // 在碰撞時觸發事件
        }
    }

    function checkCollision(newX, newY) {
        const characterRect = {
            left: newX,
            top: newY,
            right: newX + 50,
            bottom: newY + 50
        };
        const redSquareRect = redSquare.getBoundingClientRect();

        // 檢查是否發生碰撞
        return (
            characterRect.right > redSquareRect.left &&
            characterRect.left < redSquareRect.right &&
            characterRect.bottom > redSquareRect.top &&
            characterRect.top < redSquareRect.bottom
        );
    }

    function triggerRedSquareEvent() {
        if (isPaused) return; // 如果已經暫停，不再觸發事件
        isPaused = true; // 暫停角色移動
        eventPanel.innerHTML = `<p>You found a red square. What do you do?</p>`;
        const yesButton = document.createElement('button');
        yesButton.innerText = "Yes";
        yesButton.addEventListener('click', () => handleRedSquareChoice(true));
        const noButton = document.createElement('button');
        noButton.innerText = "No";
        noButton.addEventListener('click', () => handleRedSquareChoice(false));
        eventPanel.appendChild(yesButton);
        eventPanel.appendChild(noButton);
        eventPanel.classList.remove('hidden');
    }

    function handleRedSquareChoice(choice) {
        if (choice) {
            updateScore(1);
        } else {
            updateScore(-1);
        }
        eventPanel.classList.add('hidden');
        isPaused = false; // 恢復角色移動
    }

    document.addEventListener('keydown', (e) => {
        if (!gameStarted || isPaused) return;
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
                moveCharacter(0, -10);
                break;
            case 'ArrowDown':
            case 's':
                moveCharacter(0, 10);
                break;
            case 'ArrowLeft':
            case 'a':
                moveCharacter(-10, 0);
                break;
            case 'ArrowRight':
            case 'd':
                moveCharacter(10, 0);
                break;
        }
        e.preventDefault();
    });
});
