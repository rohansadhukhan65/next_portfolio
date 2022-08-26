
// importg DB .....
import ConectToDb from '../../../db/connection.js'
import Recomendations from '../../../db/Models/model-recomendations.js'
import ModelTechStack from '../../../db/Models/model-tech-stack.js'


export default async function handler(req, res) {
     let is_db_connected = await ConectToDb()
     console.log(is_db_connected)

     // Saving a new tech stack on my stack .....
     const new_stack = new ModelTechStack({
          stack_name: "Django 2",
          image: "image",
          star: 5
     })
     await new_stack.save();



     // create recomendation 
     const new_recmendation = new Recomendations({
          name: "ron",
          company_name: "hello",
          designation: "hi",
          email: "a@gmail.com",
          recomendationMSG: "msg",
     })
     await new_recmendation.save();

     res.status(200).json({ is_db_connected: new_stack })
}
