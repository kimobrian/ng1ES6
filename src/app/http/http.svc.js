class HttpService {
    constructor($resource){
        'ngInject'
        this.req = $resource('http://localhost:7800/customers/:id', { id: '@_id' }, {
            update: {
              method: 'PUT' // this method issues a PUT request
            }
        })
    }

    getCustomers() {
        let customers = this.req.query(()=>{
            console.table(customers);
            return customers;
        });
    }

    getCustomerById(customerID, callback) {
        let customer = this.req.get({ id: customerID },  (cust)=> {
            console.table(cust);
            callback(customer);
        });
    }

    createNewCustomer(f_name, l_name, phone_number) {
        let customer = new this.req();
        customer.first_name = f_name;
        customer.last_name = l_name;
        customer.phone = phone_number;
        customer.$save(()=>{
            this.getCustomers();
            console.log('Saved');
        })
    }

    updateCustomer(customerID, f_name, l_name, phone_number) {
        let customer = this.getCustomerById(customerID, (customer)=>{
            console.log('Customer',  customer);
            customer._id = customer.id;
            customer.first_name = f_name;
            customer.last_name = l_name;
            customer.phone = phone_number;
            customer.$update(()=>{
                this.getCustomers();
                console.log('Updated');
            })
        });
    }

    deleteCustomer(customerID) {
        let customer = this.getCustomerById(customerID, (customer)=>{
            customer._id = customer.id;
            customer.$delete(()=>{
                this.getCustomers();
                console.log('Deleted');
            })
        });
    }
}

export default HttpService;
