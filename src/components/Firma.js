import './Firma.css';


export default function Firma({ file, name, position, phone, email, location }) {



    return (

        <>
            <span style={{display: "flex", flexDirection:"column"}}>

                <table style={{ display: "flex", gap: "30px" }}>
                    <thead>
                        <td> <img style={{ width: "180px", height: "180px", borderRadius: "50%" }} src={file} alt="" /></td>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{name}</th>
                        </tr>
                        <tr >
                            <th><p style={{ fontWeight: "500", color: "gray", marginBottom:"0px" }}>{position}</p></th>
                            
                        </tr>
                        <tr  style={{ height : "10px", }}></tr>
                        <tr  style={{border:"solid 1px", height : "1px", width:"50%" }}></tr>
                        <tr  style={{ height : "10px", }}></tr>
                
                        <tr>
                            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img style={{ width: "30px", height: "30px" }} src="https://cdn-icons-png.flaticon.com/512/9442/9442408.png" alt="" />
                                <p style={{ margin: "0px", maxWidth: "370px" }}>{phone}</p>
                            </td>

                        </tr>
                        <tr height={10} ></tr>
                        <tr>
                            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img style={{ width: "30px", height: "30px" }} src="https://cdn-icons-png.flaticon.com/512/4946/4946005.png" alt="" />
                                <p style={{ margin: "0px", maxWidth: "370px" }}>{email}</p>
                            </td>

                        </tr>
                        <tr height={10} ></tr>
                        <tr >
                            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img style={{ width: "30px", height: "30px" }} src="https://cdn-icons-png.flaticon.com/512/2697/2697390.png" alt="" />
                                <p style={{ margin: "0px", maxWidth: "370px" }}>{location}</p>
                            </td>
                        </tr>
                        <tr height={20} ></tr>


                    </tbody>

                </table>
                <tr><img src="https://ci5.googleusercontent.com/proxy/kXjIaGPVPy88Qq_DIDADU4JuiAWqT6NlEJYhER_t4prtab-KNn0pMVKdTNuC_OyNLpI=s0-d-e1-ft#https://i.imgur.com/bH9HHeS.gif" alt="" srcset="" /></tr>

            </span>
        </>











    )
}
