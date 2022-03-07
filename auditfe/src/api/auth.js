class AuthClient {
    SUCCESS = "success"
    FAILURE = "failure"
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async signIn() {
        await this.sleep(1000)
        return ({
            status: this.SUCCESS,
            data: {
                user: { username: "Samad" },
                token: { access: "aaa", refresh: "bbb" }
            }
        })
    }

    async validateToken(token) {
        await this.sleep(1000)
        if (token.access) {
            return ({
                status: this.SUCCESS
            })
        } else {
            return ({ status: this.FAILURE })
        }

    } s

}
const getAuth = () => new AuthClient()

export default getAuth