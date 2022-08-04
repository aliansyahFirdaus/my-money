const dateNow = new Date()
const options = { year: 'numeric', month: 'long' };

// console.log(event.toLocaleDateString('de-DE', options));

export default dateNow.toLocaleDateString('id-ID', options)