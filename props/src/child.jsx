export default function child(anyName){

    console.log(anyName);

    return <div>
        i am from child component

        <ul>
            {anyName.xyz.map((e,i)=>{
                return <li key={i}>{e}</li>
            })}
        </ul>

        <h1>user name:{anyName.obj.name}</h1>
        <h1>Email:{anyName.obj.email}</h1>
    </div>
}