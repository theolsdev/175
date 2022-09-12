function cubix(pt1, pt2, pt3, pt4, t) {
    point = {};
    point.x = Math.pow(1 - t, 3) * pt1.x + 
               Math.pow(1 - t, 2) * 3 * t * pt2.x + 
               (1 - t) * 3 * t * t * pt3.x + 
               t * t * t * pt4.x;
    point.y = Math.pow(1 - t, 3) * pt1.y + 
               Math.pow(1 - t, 2) * 3 * t * pt2.y + 
               (1 - t) * 3 * t * t * pt3.y + 
               t * t * t * pt4.y;
    return point;
}

function curve(p0v2, p1v2, p2v2, t) {
    point = {};
    point.x = Math.pow(1 - t, 2) * p0v2.x + 
            (1 - t) * 2 * t * p1v2.x + 
            t * t * p2v2.x;
    point.y = Math.pow(1 - t, 2) * p0v2.y + 
            (1 - t) * 2 * t * p1v2.y + 
            t * t * p2v2.y;
    return point;
}

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function genMact() {
    const width = 1000
    const height = 800
    const total_dots = 200
    const mac =[]
    let start_time = Math.floor(Math.random() * 1900) + 1000
    
    pt1 = {
        x: randomRange(0, width),
        y: randomRange(0, height)
      }
      
    pt2 = {
        x: randomRange(0, width),
        y: randomRange(0, height)
    }
      
    pt3 = {
        x: randomRange(0, width),
        y: randomRange(0, height)
    }
      
    pt4 = {
        x: randomRange(0, width),
        y: randomRange(0, height)
    }
    
    let array = []
    
    for (let step = 0; step < total_dots; step++) {
        array.push(Math.round(Math.random()* 100) / 100)
    }
      
    array.sort(function(a, b) {
        return a - b;
    });
    
    
    array.forEach((element) => {
        dot = cubix(pt1, pt2, pt3, pt4, t=element)
        mac.push(dot)
    });
    
    var finalMact = ""
    
    for (var i = 0; i < mac.length; i++) {
        x = Math.floor(mac[i].x)
        y = Math.floor(mac[i].y)
    
        start_time = start_time + Math.floor(Math.random() * 100) +1
        mact = i + ',1,' + start_time + ',' + x + ',' + y + ';'
        finalMact = finalMact + mact
    }
    return finalMact;
}

module.exports = genMact();