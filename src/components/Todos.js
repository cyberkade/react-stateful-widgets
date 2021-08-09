import React, {useState} from 'react';

const list = [];
const listDisplayed = [];
export default function Todos(props) {
    const [Todos, setListState] = useState(list);
    const [inputValue, setInput] = useState('');

    const addList = () => {
        listDisplayed.push(
        <p key={Todos.length-1}>
            {Todos.length+1}) {inputValue}
            <button onClick={ () => remove(`${Todos.length}`)}>Delete</button>
        </p>
        );
        setListState(list => [...list, inputValue]);
        setInput('');
    }


    const remove = (key) => {
        console.log(key);
        listDisplayed.splice[key,1];
        [list.splice[key,1]]
        setListState(listDisplayed);
    }

    const changeInput = e => {
        const { value } = e.target;
        console.log(value);
        setInput(value);
      };

    return (
        <div className='container'>
          <h2>To-Do-List</h2>
          <div>
            <input type='text' placeholder='Add to Your List' onChange={changeInput} value={inputValue} />
            <button onClick={() => addList()}>Add To-do</button>
          </div>
          <div>
            <ul>
                {listDisplayed}
            </ul>
          </div> 
        </div>
      );
}