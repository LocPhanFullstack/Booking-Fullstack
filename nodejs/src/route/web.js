import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    // CRUD
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/create-new-user', userController.createNewUser);
    router.get('/api/get-all-users', userController.getAllUsers);
    router.put('/api/edit-user', userController.editUser);
    router.delete('/api/delete-user', userController.deleteUser);
    return app.use('/', router);
};

module.exports = initWebRoutes;
