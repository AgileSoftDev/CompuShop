const Components = require('./../models/components.js')

const createComponent = data => {
    data.map(async e => {
        const component = new Components(e);
        const savedComponent = await component.save();
        console.log(savedComponent);
    })
}

module.exports = createComponent