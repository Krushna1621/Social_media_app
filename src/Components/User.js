const User=(props)=>{
    return(
      <div>
        <h1>{props.name}</h1>
        <h1>{props.position}</h1>
        <h1>{props.payment}</h1>
      </div>
    )
}
export default User;