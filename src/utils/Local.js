class Local {

    static set(key, value, expires) {
        if (expires) {
            // record the time saving data
            let data = Object.assign({key, value, expires}, {startTime: new Date().getTime()});
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            if (Object.prototype.toString.call(value) === "[object Object]") {
                value = JSON.stringify(value);
            }
            if (Object.prototype.toString.call(value) === "[object Array]") {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }
    }

    static get(key) {
        let item = localStorage.getItem(key);
        try {
            item = JSON.parse(item);
        } catch (error) {
            console.warn(error);
        }
        // if there is a startTime value, it has the expire time
        if (item && item.startTime) {
            let date = new Date().getTime();
            // if true is expired 
            if (date - item.startTime > item.expires) {
                localStorage.removeItem(key);
                return false;
            } else {
                return item.value;
            }
        } else {
            return item;
        }
    }

    static remove(key) {
        localStorage.removeItem(key);
    }
}

export default Local