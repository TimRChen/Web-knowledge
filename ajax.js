class Ajax  {
    constructor(xhr) {
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr = xhr;
    }

    get() {
        let xhr = this.xhr;

        xhr.open('get', 'text.txt', true);

        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("test").innerHTML = xhr.responseText;
            }
        };
    }
}

let ajax = new Ajax();