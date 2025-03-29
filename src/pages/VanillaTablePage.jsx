import { useNavigate } from "react-router";
import MockTableData from "../mock/MockTableData";
import MercuryTableVanilla from "../components/MercuryTableVanilla";

const VanillaTablePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Vanilla Table</h1>
            <p>(Pure html & css)</p>
            <MercuryTableVanilla data={MockTableData} />
            <div className="card">
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </>
    );
}

export default VanillaTablePage;