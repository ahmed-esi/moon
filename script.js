document.addEventListener('DOMContentLoaded', () => {
    const resolutionSelect = document.getElementById('resolutionSelect');
    const moonImage = document.getElementById('moonImage');

    resolutionSelect.addEventListener('change', () => {
        const selectedResolution = resolutionSelect.value;
        moonImage.src = `moonImages/${selectedResolution}.jpg`;
    });
});