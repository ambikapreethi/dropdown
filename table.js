import React from "react";

export default function Table({props})
{
    
    const data=props;
    // alert(data);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.salary}</td>
                        </tr>
                        ))}
                
                </tbody>
            </table>
        </div>
    )
}