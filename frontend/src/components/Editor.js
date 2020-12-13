import React from 'react'

export const Editor = ({numberOfUsers, getAllUsers}) => {
    
    return(
        <div className="display-board">
            <h4>Javascript</h4>
            
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Submit</button>
            </div>
        </div>
    )
}