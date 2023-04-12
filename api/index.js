import axios from 'axios'; 

export default async(req,res)=>{
    console.log(JSON.stringify(req.body.data))
    console.log(req.body.message)
    const adaptiveCard= `{"type":"message","attachments":[{"contentType":"application/vnd.microsoft.card.adaptive","contentUrl":null,"content":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.0","body":[{"type":"TextBlock","text":"Content Operation: ${req.body.message.operation}","style":"heading"},{"type":"FactSet","facts":[{"title":"codename","value":"${req.body.data.items[0].codename}"},{"title":"language","value":"${req.body.data.items[0].language}"},{"title":"type","value":"${req.body.data.items[0].type}"},{"title":"collection","value":"${req.body.data.items[0].collection}"}]}]}}]}`;
    try{
        await axios.post(process.env.MSTEAM_URL, adaptiveCard);
        res.status(200).json("done");
    }  catch(error){
        res.status(500).json(JSON.stringify(error));
    }       
};