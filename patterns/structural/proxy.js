function networkFetch(url) {
    return `${url} - server response`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args){
        const url = args[0]

        if (cache.has(url)) {
            return `${url} - cache response`
        } else {
            cache.add(url)

            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))