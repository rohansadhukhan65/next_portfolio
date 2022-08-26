import mongoose from 'mongoose';


// define schema here ...
const recomendations = mongoose.Schema({

     name: {
          type: String,
          required: true
     },
     company_name: {
          type: String,
          required: true
     },
     designation: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     recomendationMSG: {
          type: String,
          required: true
     },
     createdAt: {
          type: Date,
          default: Date.now
     },
     updatedAt: {
          type: Date,
          default: Date.now
     }
});


// create and export model ...


const Recomendations = mongoose.models.recomendations || mongoose.model('recomendations', recomendations);

export default Recomendations;