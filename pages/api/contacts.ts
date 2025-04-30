import type { NextApiRequest, NextApiResponse } from 'next';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as FormData;
        console.log('New contact form submission:', { name, email, message });
        res.status(200).json({
            message: `Thank you for your interest, ${name}`,
        });
    } else {
        res.status(405).end();
    }
}
