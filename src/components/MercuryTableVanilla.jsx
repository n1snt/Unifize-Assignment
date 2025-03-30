import "../styles/MercuryTableVanilla.css"

const MercuryTableVanilla = ({ data }) => {

    let lastDate = null;

    return (
        <div className="mercury-table">
            <div className="wrapper">
                <div className="content">
                    <div className="table-wrapper">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>To/From</th>
                                    <th>Amount</th>
                                    <th>Account</th>
                                    <th>Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        const formattedDate = item.date.toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                        });
                                        const showDate = formattedDate !== lastDate;
                                        lastDate = formattedDate;
                                        return (
                                            <tr key={index} className="row">
                                                <td>
                                                    <span className={showDate ? '' : 'date-cell-hidden'}>
                                                        {formattedDate}
                                                    </span>
                                                </td>
                                                <td>{item.description}</td>
                                                <td>{item.amount < 0 ? `−$${Math.abs(item.amount)}` : `$${item.amount}`}</td>
                                                <td>{item.category}</td>
                                                <td>{item.details}</td>
                                            </tr>
                                        );

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MercuryTableVanilla;