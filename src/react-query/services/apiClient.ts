import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosIntance
            .get<T[]>(this.endpoint)
            .then((res) => res.data);
    }


    post = (data: T) => {
        return axiosIntance
            .post<T>(this.endpoint, data)
            .then(res => res.data);

    }

}

export default APIClient;