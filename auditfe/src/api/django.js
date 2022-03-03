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
                title: "",
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
                ]
            }
        })
    }

    async listProjects() {
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
                    type:"Book Cover"
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
                    type:"Book Cover"

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
                    type:"Album Cover"

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
                    type:"Other"

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
                    type:"Private"
                },
            ]
        })
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

}
const getDjango = token => new DjangoClient()

export default getDjango