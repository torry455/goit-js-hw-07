document.getElementById('name-input').addEventListener('input', function() {

    let enteredName = this.value.trim();

    document.getElementById('name-output').textContent = enteredName || 'Anonymous';
});