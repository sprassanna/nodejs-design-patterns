class fs_proxy {

    constructor(fsObject) {
        this.fs = fsObject;
    }

    readFile(filename, format, callback) {
        if (!filename.match(/.md$|.MD$/)) {
            return callback(new Error('Only Support md file format'))
        }

        this.fs.readFile(filename, format, (err, data) => {
            if (err) {
                console.error(err);

                return (err);
            }

            return callback(null, data);
        })
    }

}

module.exports = fs_proxy;