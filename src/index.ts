import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import { PortfolioRouter } from './routes/PortfolioRoutes';

const app = express();

app.use(express.json());


const corsOptions = {
    origin: [
        'https://nuvancetechnologies.com'
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
