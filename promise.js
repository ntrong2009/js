const X = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 3000);
    })
}

const Y = y => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(y);
        }, 2000);
    })
}

// ví dụ thể hiện lợi ích của Promise so với Async Await
async function total(x, y) {
    console.time(`TIME-PROCESS`);
    
    // cách 1 : sử dụng await mất 5s
    // const _x = await X(x);
    // const _y = await Y(y);

    // cách 2 : sử dụng Promise.All mất 3s
    // const [_x, _y] = await Promise.all([X(x), Y(y)]);

    // cách 3 : mất 3s
    const _awaitX = X(x);
    const _awaitY = Y(y);

    const _x = await _awaitX;
    const _y = await _awaitY;

    console.timeEnd(`TIME-PROCESS`);
    return _x + _y;
}

total(5, 7).then(total => console.log("total is", total));
