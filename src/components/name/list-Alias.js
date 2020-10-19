import React, { Fragment, useState, useEffect } from 'react';
// const ListAlias = () =>{
const ListAlias = (props) => {   
  const [alias, setAlias] = useState([]);
  const [name, setName] = useState("");

  const getAlias = async () => {
    setName(props.name); //
    try {
        const fetchedAlias= await fetch(`${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_ALIAS_API}/${props.name}`);
        const jsonAlias = await fetchedAlias.json();
        setAlias(jsonAlias);
        console.log(jsonAlias);
    } catch (error) {
        console.error(error.message);
    }
};

useEffect(() => {
  getAlias();
}, []);

  return (
    <Fragment>
        {/* list of Alias  */}
    <table className="table table-striped mt-5">
        <thead>
            <tr>
                <th></th>
                <th scope="col">Alias ID</th>
                <th scope="col">Alias Name</th>
               
            </tr>
        </thead>
        <tbody>
            {alias.map((item, index) => {
                return (
                <tr key={item.alias_id}>
                    <th scope="row">{++index}</th>
                    <td>{item.alias}</td>
                  
                </tr>)
            })}
        </tbody>
    </table>
</Fragment>
  );
};
export default ListAlias;