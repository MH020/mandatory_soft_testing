import express, { type Express, type Request, type Response } from 'express';

const router: Express = express();



// Todo: add query parameter: ?n=amount
router.get('/person', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/name-gender', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});

router.get('/cpr', (req: Request, res: Response) => {
    res.send('TODO!');

});

router.get('/cpr-name-gender', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/cpr-name-gender-dob', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/phone', (req: Request, res: Response) => {
    res.send('TODO!');

});


router.get('/address', (req: Request, res: Response) => {
    res.send('TODO!');

});



export default router;
