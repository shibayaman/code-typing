export default {
    changeLoginState (state, payload) {
        state.loginState = payload.loginState
        state.currentUser = payload.currentUser
    }
}
