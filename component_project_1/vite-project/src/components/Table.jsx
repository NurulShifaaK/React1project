import React from 'react'


const tableHeading= [
    {
    colName:"Avatar",
    icon:"👤",
},
    {
    colName:"Name",
    icon:"📛",
},
    {
    colName:"Status",
    icon:"✅",
},
];

const tableData=[
    {
     avatar: "/gitlab.svg",
     name:"Zara",
     status:"Active",
    },
        {
     avatar: "/gitlab.svg",
     name:"Zayn",
     status:"Inactive",
    },
]

const Table = () => {
  return (
    <div className="containe mx-auto p-6 ">
   <h1 className='font-bold text-xl p-4'>📊User Data</h1>
   <table  className='min-w-full border border-collapse'>
<thead className='border border-collapse'>
    <tr>
        {tableHeading.map((heading) =>
        (
            <th key ={heading.colName} className='border border-gray-600 px-4 py-2 bg-slate-400' >
                {heading.icon} {heading.colName}
            </th>
        ))}
    </tr>
</thead>
<tbody>
    {tableData.map((row,index)=>(
        <tr key={index}>
            <td className='border px4 py-2 flex justify-center'>
                <img src={row.avatar} className="h-8 w-8 rounded-full"></img>
            </td>
            <td  className="border px-4 py-2 font-bold">
            {row.name}
            </td>
          <td
  className={`border px-4 py-2 font-bold ${
    row.status === "Active" ? "text-green-600" : "text-red-600"
  }`}
>
  {row.status}
</td>
        </tr>
    ))}
</tbody>
   </table>
   </div>
  )
}

export default Table