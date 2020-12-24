function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed()
    }
    return x.trim()
}

class MyResponse {
    header = 'res head'
    result = 'res res'
}

class MyError {
    header: 'err head'
    message: 'err msg'
}

function handle(response: MyResponse | MyError) {
    if (response instanceof MyResponse) {
        return {
            info: response.header + response.result
        }
    }

    return {
        info: response.header + response.message
    }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    
}