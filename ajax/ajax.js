class Ajax  {
    constructor(xhr) {
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr = xhr;
    }

    send(options) {

        let xhr = this.xhr;

        let opt = {
            type: options.type || 'get',
            url: options.url || '',
            async: options.async || true,
            dataType: options.dataType || 'json',
            questring: options.questring || ''
        };

        return new Promise((resolve, reject) => {

            xhr.open(opt.type, opt.url, opt.async);

            xhr.onreadystatechange = () => {
                // readyState: 0: init, 1: connect has set up, 2: recive request, 3: request.. , 4: request end, send response
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // status: 200: OK,  404: Not Found Page
                        if (opt.dataType === 'json') {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                        }
                    } else {
                        reject(new Error(xhr.status || 'Server is fail.'));
                    }
                }
            };

            xhr.onerror = () => {
                reject(new Error(xhr.status || 'Server is fail.'));
            }

            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(opt.questring);

        });
    }
}
