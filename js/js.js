function vectoraleatorio(n){
    let a = "";
    for(let i=0;i<n;i++){
        a += (Math.round(Math.random() * 100)) + " ";
    }
    a = a.substring(0, a.length - 1);
    a = a.split(" ");
    return a;
}

function promedio(n){
    let s = 0;
    for(let i=0;i<n.length;i++){
        s += parseInt(n[i]);
    }
    s = s / n.length;
    return s;
}

function vectorB(n, p){
    let B = "";
    for(let i=0;i<n.length;i++){
        if(parseInt(n[i]) > p){
            B += n[i] + " ";
        }
    }
    B = B.substring(0, B.length - 1);
    B = B.split(" ");
    return B;
}

function multiplos2y3(n){
    let c = 0;
    for(let i=0;i<n.length;i++){
        if(parseInt(n[i]) % 2 == 0 && parseInt(n[i]) % 3 == 0){
            c += 1;
        }
    }
    return c;
}

function suma(n){
    let s = 0;
    for(let i=0;i<n.length;i++){
        s += parseInt(n[i]);
    }
    return s;
}

function vectorC(n){
    let C = [];
    for(let i=0;i<n.length;i++){
        C.push(parseInt(n[i]) * 2)
    }
    return C;
}

function mostrar(A, I, II, III, IV, V){
    document.write(
            "Vector A: " + A
    + " <br> Promedio de los elementos de A: " + I  
    + " <br> Vector B: " + II
    + " <br> Cantidad de elementos de A que son multiplos de 2 y 3: " + III
    + " <br> Suma de los elementos de A: " + IV
    + " <br> Vector C: " + V
    )
}