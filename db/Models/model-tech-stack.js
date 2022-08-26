import mongoose from 'mongoose';


// define schema here ...
const techstack = mongoose.Schema({

     stack_name: {
          type: String,
          required: true
     },
     image: {
          type: String,
          required: true
     },
     star: {
          type: Number,
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


const TechStack = mongoose.models.tech_stacks || mongoose.model('tech_stacks', techstack);

export default TechStack;