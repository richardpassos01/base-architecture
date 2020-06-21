const date = new Date();

const error = (error) => {
    console.error('ERROR', {
        error,
        date
    });
}

const log = (info) => {
    console.log('LOG', {
        info,
        date
    });
}

module.exports = {
    error,
    log
}