import http from "./http-common"

const getCompanies = async () => {
    const response = await http.get(`/companies`);

    return response;
}

http.interceptors.response.use(response => {
    return response
}, function(error){
    if(error.response.status === 404){
        return { status: error.response.status }
    }
    return Promise.reject(error.response)
})

const CompanyService = {
    getCompanies,
  };

export default CompanyService;

