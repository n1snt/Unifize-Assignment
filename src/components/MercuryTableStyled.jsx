import "../styles/MercuryTableStyled.css"
import "../styles/styles.css"

const MercuryTableStyled = ({ data }) => {

    let lastDate = null;

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <TableHead />
                <tbody>
                    {
                        data.map((item, index) => {
                            const formattedDate = item.date.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                            });
                            const showDate = formattedDate !== lastDate;
                            lastDate = formattedDate;
                            return (<TableItem data={item} showDate={showDate} formattedDate={formattedDate} />);
                        })
                    }
                </tbody>
            </table>
        </div>
    );

    function TableItem({ data, showDate, formattedDate }) {
        return (
            <tr class="bg-white border-b dark:bg-zinc-800 dark:border-gray-700 border-gray-200 hover:bg-zinc-50 dark:hover:bg-zinc-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span className={showDate ? '' : 'date-cell-hidden'}>
                        {formattedDate}
                    </span>
                </th>
                <td class="px-6 py-4">
                    {data.description}
                </td>
                <td className={`px-6 py-4 ${data.amount >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                    {data.amount >= 0 ? `+$${data.amount}` : `−$${Math.abs(data.amount)}`}
                </td>
                <td class="px-6 py-4">
                    {data.category}
                </td>
                <td class="px-6 py-4">
                    {data.details}
                </td>
            </tr>
        );
    }

    function TableHead() {
        return (
            <thead class="text-xs text-zinc-700 uppercase bg-black-50 dark:bg-zinc-700 dark:text-white">
                <tr>
                    <SortableTableHeadItem title={"Date"} />
                    <NormalTableHeadItem title={"To/From"} />
                    <NormalTableHeadItem title={"Amount"} />
                    <NormalTableHeadItem title={"Account"} />
                    <NormalTableHeadItem title={"Payment Method"} />
                </tr>
            </thead>
        );
    }

    function NormalTableHeadItem({ title }) {
        return (
            <th scope="col" class="px-6 py-3">
                {title}
            </th>
        );
    }

    function SortableTableHeadItem({ title }) {
        return (
            <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                    {title}
                    <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a>
                </div>
            </th>
        );
    }
}

export default MercuryTableStyled;