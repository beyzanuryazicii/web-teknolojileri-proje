* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f7fa;
    color: #222;
    line-height: 1.6;
}

header {
    background-color: #1e3a8a;
    color: white;
}

.navbar {
    max-width: 1100px;
    margin: auto;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 18px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.nav-links a:hover {
    color: #bfdbfe;
}

main {
    max-width: 1100px;
    margin: 30px auto;
    padding: 20px;
}

.hero {
    background-color: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hero h1 {
    color: #1e3a8a;
    margin-bottom: 12px;
}

.page-title {
    color: #1e3a8a;
    margin-bottom: 20px;
}

.card {
    background-color: white;
    padding: 24px;
    border-radius: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: 20px;
}

footer {
    background-color: #1e3a8a;
    color: white;
    text-align: center;
    padding: 18px;
    margin-top: 40px;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 14px;
    }

    .nav-links {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    .hero {
        padding: 25px;
    }
}