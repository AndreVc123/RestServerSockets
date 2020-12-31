import { Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    })
})

router.post('/mensajes', (req, res) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        mensaje: 'Mensaje post listo',
        cuerpo,
        de
    })
})


router.post('/mensajes/:id', (req, res) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Mensaje post listo',
        cuerpo,
        de,
        id
    })
})


export default router;