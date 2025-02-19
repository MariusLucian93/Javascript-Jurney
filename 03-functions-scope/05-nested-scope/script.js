//child nested scopes can access variables from parents scope


function testingParent () {
    let x = 100;
    function testingChild () {
        let y = 200;
        console.log(x + y);
    }
    testingChild();
}

testingParent();


//the same is true for blocks i.e. if/for/true etc