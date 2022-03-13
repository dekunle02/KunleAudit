class DjangoClient {
    constructor(token) {
        this.token = token
    }

    SUCCESS = "success"
    FAILURE = "failure"

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }


    async getProjectById(projectId) {
        await this.sleep(2000)
        return ({
            status: this.SUCCESS,
            data: {
                id: 1,
                title: "The Fishermen",
                client: {
                    id: "1",
                    name: "Macmillan",
                    representative: "Sodiq Foga",
                    is_company: true,
                    address_line_1: "No1 Oju Elegba Str",
                    address_line_2: "Idi Ape, Ejigbo",
                    address_line_3: "Osun State, Nigeria",
                    vendor_number: "X22304TY"
                },
                start_date: "2022-01-01",
                end_date: null,
                fee: 1500.00,
                fee_currency: "USD",
                in_progress: true,
                paintings: [
                    { id: 1, name: "The Girl with the Pearl Earring", price: "400" },
                    { id: 2, name: "Manchester by the Sea", price: "1100" }
                ]
            }
        })
    }

    async listProjects(period) {
        await this.sleep(1000)
        return ({
            status: this.SUCCESS,
            data: [
                {
                    id: 1,
                    title: "Pearl of the Jungle",
                    client: {
                        id: "1",
                        name: "Macmillan",
                        representative: "Sodiq Foga",
                        is_company: true,
                        address_line_1: "No1 Oju Elegba Str",
                        address_line_2: "Idi Ape, Ejigbo",
                        address_line_3: "Osun State, Nigeria",
                        vendor_number: "X22304TY"
                    },
                    start_date: "2022-01-01",
                    end_date: null,
                    in_progress: true,
                    paintings: [
                        { id: 1, name: "The Girl with the Pearl earring", price: "$450.00" }
                    ],
                    type: "Book Cover"
                },

                {
                    id: 2,
                    title: "Sea Book Cover",
                    client: {
                        id: "1",
                        name: "Macmillan",
                        representative: "Sodiq Foga",
                        is_company: true,
                        address_line_1: "No1 Oju Elegba Str",
                        address_line_2: "Idi Ape, Ejigbo",
                        address_line_3: "Osun State, Nigeria",
                        vendor_number: "X22304TY"
                    },
                    start_date: "2022-01-01",
                    end_date: null,
                    in_progress: true,
                    paintings: [
                        { id: 1, name: "The Old man and the Sea", price: "£1,200.00" }
                    ],
                    type: "Book Cover"

                },
                {
                    id: 3,
                    title: "Random",
                    client: {
                        id: "1",
                        name: "Macmillan",
                        representative: "Sodiq Foga",
                        is_company: true,
                        address_line_1: "No1 Oju Elegba Str",
                        address_line_2: "Idi Ape, Ejigbo",
                        address_line_3: "Osun State, Nigeria",
                        vendor_number: "X22304TY"
                    },
                    start_date: "2022-01-01",
                    end_date: "2022-02-01",
                    in_progress: false,
                    paintings: [
                        { id: 1, name: "The Old man and the Sea", price: "£1,200.00" }
                    ],
                    type: "Album Cover"

                },
                {
                    id: 4,
                    title: "Random4",
                    client: {
                        id: "2",
                        name: "Scholastic",
                        representative: "Sodiq Foga",
                        is_company: true,
                        address_line_1: "No1 Oju Elegba Str",
                        address_line_2: "Idi Ape, Ejigbo",
                        address_line_3: "Osun State, Nigeria",
                        vendor_number: "X22304TY"
                    },
                    start_date: "2022-01-01",
                    end_date: "2022-02-01",
                    in_progress: false,
                    paintings: [
                        { id: 2, name: "The Old man and the Sea", price: "$1,000.00" }
                    ],
                    type: "Other"

                },
                {
                    id: 5,
                    title: "Random4",
                    client: {
                        id: "4",
                        name: "Scholastic",
                        representative: "Sodiq Foga",
                        is_company: true,
                        address_line_1: "No1 Oju Elegba Str",
                        address_line_2: "Idi Ape, Ejigbo",
                        address_line_3: "Osun State, Nigeria",
                        vendor_number: "X22304TY"
                    },
                    start_date: "2022-01-01",
                    end_date: "2022-02-01",
                    in_progress: false,
                    paintings: [
                        { id: 2, name: "The Old man and the Sea", price: "$1,000.00" }
                    ],
                    type: "Private"
                },
            ]
        })
    }

    async updateProject(projectId, formData) {
        await this.sleep(1000)
        console.log("formData => ", formData)
        return ({
            status: this.SUCCESS,
            data: { message: "Update Successful" }
        })
    }

    async getAllTimeProjectCount() {
        await this.sleep(1000)
        return ({
            status: this.SUCCESS,
            data: 47
        })
    }
    async listCurrencies() {
        return {
            status: this.SUCCESS,
            data: ['USD, EUR, NGN, GBP']
        }
    }

    async getClientById(clientId) {
        await this.sleep(2000)
        return ({
            status: this.SUCCESS,
            data: {
                id: "1",
                name: "Macmillan",
                representative: "Sodiq Foga",
                is_company: true,
                address_line_1: "No1 Oju Elegba Str",
                address_line_2: "Idi Ape, Ejigbo",
                address_line_3: "Osun State, Nigeria",
                vendor_number: "X22304TY"
            }
        })
    }

    async updatePainting(paintingId, formData) {
        await this.sleep(1000)
        console.log("formData => ", formData)
        return ({
            status: this.SUCCESS,
            data: { message: "Update Successful" }
        })
    }

    async addPainting(projectId, formData) {
        await this.sleep(1000)
        console.log("formData => ", formData)
        return ({
            status: this.SUCCESS,
            data: { message: "Painting added" }
        })
    }

    async downloadInvoice(projectId) {
        await this.sleep(1000)
        return ({
            status: this.FAILURE,
            data: { message: "Internal server error" }
        })
    }

}
const getDjango = token => new DjangoClient()

export default getDjango