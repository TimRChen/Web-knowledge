class Ajax  {
    constructor(xhr) {
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr = xhr;
    }

    send(method, url, async, callback, data) {
        let xhr = this.xhr;

        xhr.onreadystatechange = () => {
            // readyState: 0: init, 1: connect has set up, 2: recive request, 3: request.. , 4: request end, send response
            if (xhr.readyState === 4 && xhr.status === 200) {
                // status: 200: OK,  404: Not Found Page
                callback(xhr.responseText);
            }
        };

        xhr.open(method, url, async);   
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
}


module ? (module.exports = Ajax) : null;
