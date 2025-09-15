

//Reusing a Generic Function Across Objects

const dev = { name: 'Srinivas'};
const designer = { name: 'Meera'};

function introduce(role, location){
    console.log(`${this.name} is a ${role} based in ${location}.`);

};

//using call
introduce.call(dev, 'Technical Lead', 'Bangalore');
introduce.apply(designer, ['UX Designer', "Bangalore"]);