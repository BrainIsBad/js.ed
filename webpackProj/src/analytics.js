import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0,
        isDestroyed = false
    const listener = () => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            if (!isDestroyed) {
                $(document).off('click', listener)
            } else {
                console.log('Analytics already destroyed. haha')
            }
        },
        getCounter() {
            if (!isDestroyed) {
                return counter
            } else {
                console.log('Analytics already destroyed')
            }
        }
    }
}

window.analytics = createAnalytics()