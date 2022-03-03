class AuthClient {
    SUCCESS = "success"
    FAILURE = "failure"
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async signIn() {
        await this.sleep(2000)
        return ({
            status: this.SUCCESS,
            data: {
                user: { username: "Samad" },
                token: { access: "aaa", refresh: "bbb" }
            }
        })
    }

    async validateToken(token) {
        await this.sleep(2000)
        return({
            status: this.SUCCESS
        })
    }

}
const getAuth = () => new AuthClient()

export default getAuth