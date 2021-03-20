const router = require('express').Router();

const pets = [{
            'color':'black',
            'species':'cat',
            'name': 'Shirley',
            'age' : 10,
            'size' : 'large',
            'catbox trained': true,//boolean
            'indoor/outdoor':false, //boolean
            'vaccinated':true, // boolean
            'microchip': true,// boolean
            'description': "Very grump" //open ended string
},{
    'color':'black',
        'species':'dog',
        'name' : 'Susan',
        'age' : 5,
        'size' : 'small',
        'potty': true,
        'indoor':false,
        'vaccinated':false,
        'microchip':true,
        'description':null
    },    {
        'color':'black',
        'species':'dog',
        'name' : 'Charles',
        'age' : 6,
        'size' : 'large',
        'potty': true,
        'indoor':false,
        'vaccinated':true,
        'microchip':false,
        'description':null
    }
]

router.get('/adopt', (req, res) => {
    let results = pets
    if (req.query) {
        console.log(req.query)
    }
    res.json(results);
});

// router.get('/adopt/:type', (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });


// router.post('/adopt', (req, res) => {
//   req.body.id = animals.length.toString();
//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

module.exports = router;
