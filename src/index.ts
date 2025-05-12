import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import { PortfolioRouter } from './routes/PortfolioRoutes';

const app = express();

app.use(express.json());


const corsOptions = {
    origin: [
        'https://nuvance-portfolio.vercel.app',
        'http://localhost:3000',
        'http://ec2-13-60-23-35.eu-north-1.compute.amazonaws.com:3000'
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use("/api/v1/portfolio" , PortfolioRouter)

app.get("/", (req, res) => {
    res.send("NUVANCE TECH PORTFOLIO SERVER IS UP!!")
})

app.listen(PORT, () => {
    console.log(`BACKEND IS HOSTED : http://localhost:${PORT}`)
});
