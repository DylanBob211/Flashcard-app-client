import React from 'react'
import ListItem from '../ListItem'
import './Lists.css'

const Lists = ({lists, deleteList, addWord, deleteWord }) => {
    
    return (
        <div className="lists_container">
            {lists.map((listItem, index) => (
                <ListItem 
                    deleteList={deleteList}
                    addWord={ addWord }
                    deleteWord={ deleteWord } 
                    key={ index }
                    id={ index } 
                    listName={ listItem.name } 
                    wordsArray={ listItem.words }
                />                
            ))}
        </div>
    )
}




export default Lists


