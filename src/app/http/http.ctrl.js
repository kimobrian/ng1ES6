class HttpController {
    constructor(httpSvc) {
        'ngInject'
        this.http = httpSvc;
        // this.customers = this.http.getCustomers();
        // this.customer = this.http.getCustomerById(59);
        // this.newCustomer = this.http.createNewCustomer('Brian King', 'KimB','2547893774');
        // this.updatedCustomer = this.http.updateCustomer(55, 'Mc', 'Donald', 'Kim');
        // this.deleteCustomer = this.http.deleteCustomer(5);
    }
}

module.exports = HttpController;
