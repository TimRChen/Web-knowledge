class Ajax  {
    constructor(xhr) {
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr = xhr;
    }

    send(method, url, async) {
        let xhr = this.xhr;
        xhr.open(method, url, async);   
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("name=TimRChen");

        xhr.onreadystatechange = () => {
            // readyState: 0: init, 1: connect has set up, 2: recive request, 3: request.. , 4: request end, send response
            if (xhr.readyState === 4 && xhr.status === 200) {  
                // status: 200: OK,  404: Not Found Page
                document.getElementById('test').innerHTML = xhr.responseText;
            }
        };

    }
}

let ajax = new Ajax();