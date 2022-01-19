class vehicle {
    constructor (make, model, mpg){
        this._make = make;
        this._model = model;
        this._mpg = mpg
    }
    get make(){
        return this._make;
    }
    get model(){
        return this._model;
    }
    get mpg(){
        return this._mpg;
    }
    promo (){
        'This is' + this._make + this._model + 'consumes' + this._mpg +'mpg';
    }
}



class Luxury extends vehicle {
    constructor(make, model, mpg,seats){
        super(make, model, mpg);
        this._seats = seats;
    }
    get seats (){
        return this._seats;
    }
}

class publicTransport extends vehicle {
    constructor(make, model, mpg,capacity){
        super(make, model, mpg);
        this._capacity = capacity;
    }
    get capacity (){
        return this._capacity;
    }
    IncomegeneratedPertrip (){
        return 0.88*this._capacity*2.99
    }
}


class military extends vehicle {
    constructor(make, model, mpg,load){
        super(make, model, mpg);
        this._load = load
    }
    get load (){
        return this._load; 
    }
}