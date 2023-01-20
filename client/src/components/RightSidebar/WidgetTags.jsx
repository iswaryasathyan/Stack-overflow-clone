import React from 'react'
const tags=['c','css','express','java','javascript','html','firebase']

const WidgetTags = () => {
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {tags.map((tag) => (
                <p key={tag}>{tag}</p>

            ))}
            
        </div>
      
    </div>
  )
}

export default WidgetTags
