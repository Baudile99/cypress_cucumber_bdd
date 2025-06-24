const loginSelectors = {
    inputEmail: '[data-testid="login-email"]',
    inputPassword: '[data-testid="login-password"]',
    loginButton: '[data-testid="login-submit"]',
    labelMyNotes: '[data-testid="home"]',
    msgErrorEmail:':nth-child(1) > .invalid-feedback',
    msgErrorPassword:':nth-child(2)>.invalid-feedback',
    msgErrorEmailAndPassword:'[data-testid="alert-message"]'



}

export default loginSelectors;