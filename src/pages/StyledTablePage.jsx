import { useNavigate } from "react-router";
import MockTableData from "../mock/MockTableData";
import MercuryTableStyled from "../components/MercuryTableStyled";

const StyledTablePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Styled Table</h1>
            <p>(Using tailwind css)</p>
            <MercuryTableStyled data={MockTableData} />
            <div className="card">
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </>
    );
}

export default StyledTablePage;