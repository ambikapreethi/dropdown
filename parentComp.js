import React from "react";
import { useState } from "react";
import Dropdown from "./dropdown";
import Table from "./table";

export default function Parentcomp()
{
    const tableData=[{name:"ambika",age:35,salary:30000},
                                    {name:"preethi",age:25,salary:45000},
                                    {name:"mallika",age:56,salary:42000},
                                    {name:"pravin",age:27,salary:49000}];

    return(
        <div>
            <Dropdown options={["ambika","preethi","mallika","murali"]}/>
            
            <Table props={tableData}/>
            
        </div>
    )
}