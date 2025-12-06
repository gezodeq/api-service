import { parse } from 'csv-parser';
import { Readable } from 'stream';

const parser = (stream) => {
    let data = [];

    stream
        .pipe(parse({ delimiter: ',' }))
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', () => {
            return data;
        })
        .on('error', (error) => {
            console.error('Error parsing CSV', error);
        });
};

const readableStream = new Readable();

readableStream.push(`Name,Age,Country
John,30,USA
Jane,25,UK`);
readableStream.push(null);

parser(readableStream).then((data) => {
    console.log(data);
});