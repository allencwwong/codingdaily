export const Record= () => {
    const records  = [
        {
            start: '6/09/22',
            end: ''
        },
        {
            start: '',
            end: '6/17/22'
        },
        {
            start: '6/30/22',
            end: ''
        }
    ]

    const contCoding = []

    let i =0
    let startDate=0
    let endDate=0
    while(i<records.length){
        if(records[i].start) startDate = records[i].start
        if(records[i].end) endDate = records[i].end
        if(i===records.length-1 && !endDate) endDate = new Date()
        if(startDate && endDate){
            const cont = Math.ceil((new Date(endDate) - new Date(startDate))/(24*3600*1000))
            contCoding.push({start:startDate,cont:cont})
            startDate=0
            endDate=0
        }
        i++;
    }

    console.log(contCoding)

    return (
      <>
        <h1>Record</h1>
        <table>
        {
            contCoding.map((cont,idx)=>{
                return (
                <tr>
                    <td>
                        {`Cycle ${idx+1}: ${cont.start}`}
                    </td>
                    <td>Continous Coding: {cont.cont} Day(s)</td>
                </tr>
                )
            })
        }
        </table>
      </>
    );
}