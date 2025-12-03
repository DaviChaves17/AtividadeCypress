const form = document.getElementById('user-form');
        const userList = document.getElementById('user-list');
        const clearButton = document.getElementById('clear-list');
        const errorMessage = document.getElementById('error-message');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (!nome || !email || !senha) {
                errorMessage.style.display = 'block';
                return;
            }

            errorMessage.style.display = 'none';

            // Check for duplicate entries
            const existingUsers = Array.from(userList.children).map(li => li.textContent);
            if (existingUsers.includes(`${nome} (${email})`)) {
                alert('Usuário já cadastrado!');
                return;
            }

            const li = document.createElement('li');
            li.textContent = `${nome} (${email})`;
            userList.appendChild(li);

            form.reset();
        });

        clearButton.addEventListener('click', function () {
            userList.innerHTML = '';
        });