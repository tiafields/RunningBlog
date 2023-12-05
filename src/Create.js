import {useState} from "react"; 
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');

    return ( 
        <div className="Create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input  
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog content:</label> 
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Tia">Tia</option>
                    <option value="Mario">Mario</option>
                </select>
                    

                <lable>Blog date:</lable>
                <input      
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
        
                <button>Add Blog</button>
                
            </form>
           
        </div>
     );
}
 
export default Create;