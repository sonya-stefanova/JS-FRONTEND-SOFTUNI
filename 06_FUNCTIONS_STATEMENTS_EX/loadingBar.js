function loadingBar (num) {
    
    if (num < 100) {
        console.log(`${num}% [${'%'.repeat(num / 10)}${'.'.repeat((100 - num) / 10)}]`)
        console.log('Still loading...')
    } else if (num === 100) {
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    }
}