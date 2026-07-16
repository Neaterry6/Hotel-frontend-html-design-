document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const password = "soleil-2026";

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(password).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied!";
            
            // Revert back to "Copy" after 2 seconds
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            copyBtn.innerText = "Failed";
        });
    });
});
