import { PanoramaSharp } from "@mui/icons-material"

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230 ,
    renderCell:(param)=>{
        return(
        <div className="cellWithImg ">
            <img className="cellImg" src={param.row.img} alt="avatar"/>
            {param.row.username}
        </div>
        )
    }
},{
    field:"email",headerName:"Email",width:230
},
{
    field:"age",headerName:"Age",width:230
},
{
    field:"status",headerName:"Status",width:230,
    renderCell:(param)=>{
        return(
        <div className={`cellWithStatus ${param.row.status}`}>
            {param.row.status}
        </div>
        );
    }
}
]

export const userRows = [
    {
        "id": 1,
        "username": "Flowdesk",
        "status": "active",
        "img": "https://robohash.org/rempraesentiumdolores.png?size=50x50&set=set1",
        "email": "hlarmor0@google.co.jp",
        "age": 1
    }, {
        "id": 2,
        "username": "It",
        "status": "passive",
        "img": "https://robohash.org/quovoluptatemfacilis.png?size=50x50&set=set1",
        "email": "adellcasa1@ca.gov",
        "age": 2
    }, {
        "id": 3,
        "username": "Kanlam",
        "status": "active",
        "img": "https://robohash.org/sitnatusvoluptatem.png?size=50x50&set=set1",
        "email": "smapston2@woothemes.com",
        "age": 3
    }, {
        "id": 4,
        "username": "Solarbreeze",
        "status": "active",
        "img": "https://robohash.org/voluptatibusaspernaturoptio.png?size=50x50&set=set1",
        "email": "rsutherington3@barnesandnoble.com",
        "age": 4
    }, {
        "id": 5,
        "username": "Zoolab",
        "status": "pending",
        "img": "https://robohash.org/etquoillo.png?size=50x50&set=set1",
        "email": "edeval4@umn.edu",
        "age": 5
    }, {
        "id": 6,
        "username": "Alphazap",
        "status": "active",
        "img": "https://robohash.org/voluptatumesseipsam.png?size=50x50&set=set1",
        "email": "tmcgee5@blogtalkradio.com",
        "age": 6
    }, {
        "id": 7,
        "username": "Pannier",
        "status": "passive",
        "img": "https://robohash.org/rerumasperioresnesciunt.png?size=50x50&set=set1",
        "email": "jackrill6@amazon.co.uk",
        "age": 7
    }, {
        "id": 8,
        "username": "Flowdesk",
        "status": "pending",
        "img": "https://robohash.org/distinctioremfuga.png?size=50x50&set=set1",
        "email": "ahubbucks7@tinyurl.com",
        "age": 8
    }, {
        "id": 9,
        "username": "Domainer",
        "status": "active",
        "img": "https://robohash.org/placeatetex.png?size=50x50&set=set1",
        "email": "jblaxeland8@slashdot.org",
        "age": 9
    }, {
        "id": 10,
        "username": "Alpha",
        "status": "active",
        "img": "https://robohash.org/cumvoluptatumaut.png?size=50x50&set=set1",
        "email": "vpohling9@nifty.com",
        "age": 10
    }, {
        "id": 11,
        "username": "Span",
        "status": "passive",
        "img": "https://robohash.org/doloraliquidmaxime.png?size=50x50&set=set1",
        "email": "kmccreaa@mtv.com",
        "age": 11
    }, {
        "id": 12,
        "username": "Zoolab",
        "status": "passive",
        "img": "https://robohash.org/eavoluptasvoluptatem.png?size=50x50&set=set1",
        "email": "tswaiteb@webmd.com",
        "age": 12
    }, {
        "id": 13,
        "username": "Kanlam",
        "status": "pending",
        "img": "https://robohash.org/quamconsequunturplaceat.png?size=50x50&set=set1",
        "email": "jhansemannc@google.co.jp",
        "age": 13
    }, {
        "id": 14,
        "username": "Sonair",
        "status": "pending",
        "img": "https://robohash.org/eteosoccaecati.png?size=50x50&set=set1",
        "email": "eirelandd@squidoo.com",
        "age": 14
    }, {
        "id": 15,
        "username": "Overhold",
        "status": "SI",
        "img": "https://robohash.org/saepequibusdammodi.png?size=50x50&set=set1",
        "email": "nmortelle@rediff.com",
        "age": 15
    }, {
        "id": 16,
        "username": "Lotstring",
        "status": "BR",
        "img": "https://robohash.org/atteneturid.png?size=50x50&set=set1",
        "email": "ihalsallf@posterous.com",
        "age": 16
    }, {
        "id": 17,
        "username": "Cardguard",
        "status": "PH",
        "img": "https://robohash.org/iustositquia.png?size=50x50&set=set1",
        "email": "mantognettig@state.gov",
        "age": 17
    }, {
        "id": 18,
        "username": "Keylex",
        "status": "PH",
        "img": "https://robohash.org/consequunturnisivoluptatem.png?size=50x50&set=set1",
        "email": "bschwierh@oracle.com",
        "age": 18
    }, {
        "id": 19,
        "username": "Treeflex",
        "status": "CN",
        "img": "https://robohash.org/cumquesimiliqueamet.png?size=50x50&set=set1",
        "email": "jkaasi@bloglines.com",
        "age": 19
    }, {
        "id": 20,
        "username": "Cookley",
        "status": "CN",
        "img": "https://robohash.org/consequaturprovidentesse.png?size=50x50&set=set1",
        "email": "rpinksj@dion.ne.jp",
        "age": 20
    }
]