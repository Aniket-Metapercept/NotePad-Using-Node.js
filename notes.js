const fs = require('fs')

const newNote = (title,body)=>{
    const notes = uploadNotes()
    notes.push({title,body})
    fs.writeFileSync('notepad.json',JSON.stringify(notes))

}


const uploadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notepad.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

const deleteNote = (title) =>{
    const notes = uploadNotes()
    const remaining = notes.filter(note => note.title !== title)
    fs.writeFileSync('notepad.json',JSON.stringify(remaining))
}

const allNotes = () =>{
    const notes = uploadNotes()
    notes.forEach(note => {
       console.log(note.title)
    });
}

const findNotes =(title)=>{
   
    const notes = uploadNotes()
    const note = notes.find(note=> note.title === title)
    if(note){
        console.log(`Title: ${note.title}`)
        console.log(`body: ${note.body}`)
    } else {
        console.log("Not Found")
    }

}

module.exports = {
    newNote,
    deleteNote,
    allNotes,
    findNotes
}