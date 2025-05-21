document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('commitCounter');
    const incrementButton = document.getElementById('incrementButton');
    const commitList = document.getElementById('commitList');
    let commitCount = 0;

    function addCommitToHistory() {
        const commitItem = document.createElement('div');
        commitItem.className = 'commit-item';
        
        const timestamp = new Date().toLocaleTimeString();
        commitItem.innerHTML = `
            <div>Commit #${commitCount}</div>
            <div class="timestamp">${timestamp}</div>
        `;
        
        commitList.insertBefore(commitItem, commitList.firstChild);
    }

    incrementButton.addEventListener('click', () => {
        commitCount++;
        counter.textContent = commitCount;
        
        // Add a visual feedback
        counter.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 200);

        // Add to commit history
        addCommitToHistory();

        // Simulate a commit message
        console.log(`Commit #${commitCount} made!`);
    });
}); 