import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";
import React, { useEffect, useState } from "react";
import HeatMap from "react-heatmap-grid"
import Instance from "../../../Api/Services/Services";

const xLabels = new Array(31).fill(null);
const yLabels = new Array(12).fill(null);
const sampleData = new Array(yLabels.length)
    .fill(0)
    .map(() =>
        new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
    );

const HeatJournal = (props) => {

    const [data, setData] = useState({
        values: sampleData
    }); 

    const classes = {
        heroContainer: 'shadow-lg rounded-2xl mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full w-full lg:py-8 sm:py-6 py-4 hidden lg:flex lg:flex-col',
        heatmapContainer: 'flex justify-center',
        titleContainer: 'm-20 mb-8 mt-0 text-blue text-xl'
    }

    useEffect(() => {
        const headers = {Authorization: localStorage.getItem('mentiaAuthToken')};
        Instance.get(`/mood/${localStorage.getItem('mentiaUsername')}`, {headers})
            .then((response) => {
                const moods = response.data.Moods.map((el) => el.Value);
                const remaining = new Array(xLabels.length - moods.length)
                    .fill(0);
                moods.push(...remaining);
                setData({values: moods});
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={classes.heroContainer}>
            <div className={classes.titleContainer}>
                <h1>Tu año en pixeles</h1>
            </div>
            <div className={classes.heatmapContainer}>
            <HeatMap
                xLabels={xLabels}
                xLabelWidth={20}
                yLabels={yLabels}
                data={data.values}
                cellStyle={(background, value, min, max, data, x, y) => ({
                    background: `rgba(111, 207, 151, ${1 - (max - value) / (max - min)})`,
                    borderRadius: "3px",
                    width: "21.297px",
                    flex: null
                })}
                height={20}
            />
            </div>
        </div>
    );
}

export default HeatJournal;
