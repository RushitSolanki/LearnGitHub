document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('commitCounter');
    const incrementButton = document.getElementById('incrementButton');
    let commitCount = 0;

    incrementButton.addEventListener('click', () => {
        commitCount++;
        counter.textContent = commitCount;
        
        // Add a visual feedback
        counter.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 200);

        // Simulate a commit message
        console.log(`Commit #${commitCount} made!`);
    });
}); 