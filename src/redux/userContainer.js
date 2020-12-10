import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from './action'

function userContainer({userData,fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [input])
    return  userData.loading? (
        <div>
        <h2>loading</h2>
        <button onClick={fetchUsers()}>update Meaning</button>
        </div>
    ): userData.error?(
        <h2>{ userData.error}</h2>
    ):(
        <div>
            <h2>Meaning</h2>
            <div>
    {userData && userData.users && userData.users.map(user=><p>{user.meaning}</p>)}
            </div>
        </div>
    )
}
const mapStateToProps= state=>{
    return {
        userData: state.user
    }
}
const mapDispatchToProps= dispatch=>{ 
    return {
   fetchUsers : ()=>dispatch(fetchUsers())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(userContainer)