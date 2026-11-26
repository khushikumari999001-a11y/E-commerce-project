import {createUserTable} from '../models/userTable.js';
import {createProductTable} from '../models/productTable.js';
import {createOrderTable} from '../models/ordersTable.js';
import {createOrderItemTable} from '../models/orderItemsTable.js';
import {createPaymentTable} from '../models/paymentsTable.js';
import {createShippingInfoTable} from '../models/shippinginfoTable.js';
import {createProductReviewTable} from '../models/productReviewsTable.js';

export const createTable = async () => {
    try {
        await createUserTable();
        await createProductReviewTable();
        await createOrderTable();
        await createProductTable();
        await createOrderItemTable();
        await createShippingInfoTable();
        await createPaymentTable();
        console.log('All tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);

    }
}