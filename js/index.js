function register() {
    const username = document.getElementById('username');
    const  email  = document.getElementById('email');
    const password = document.getElementById('password');

    // Simple validation
    if (!username.value || !email.value || !password.value) {
        alert('Phải điền đầy đủ thông tin!');
        username.style.borderColor = 'red';
        email.style.borderColor = 'red';
        password.style.borderColor = 'red';
    }
    else {
        alert('Đăng ký thành công!');
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);

        // Lưu cả cục thông tin vào localStorage
        const userData = {
            username: username.value,
            email: email.value,
            password: password.value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        location.href = 'login.html'; // Chuyển hướng đến trang danh sach phim
    }
}

function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');   
    let storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        storedUserData = JSON.parse(storedUserData);
        if (username.value === storedUserData.username && password.value === storedUserData.password) {
            alert('Đăng nhập thành công!');
            location.href = 'movies.html'; // Chuyển hướng đến trang danh sach phim
        } else {
            alert('Tên người dùng hoặc mật khẩu không đúng!');
        }
    } else {
        alert('Người dùng không tồn tại!');
    }
}