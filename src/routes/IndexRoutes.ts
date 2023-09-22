import { Router } from 'express';
import { indexController } from '../controller/IndexController';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // ROUTE FOR THE INDEX
        this.router.get('/', indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;