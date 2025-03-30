import { useNavigate } from "react-router";
import MockTableData from "../mock/MockTableData";
import MercuryTableStyled from "../components/MercuryTableStyled";
import "../styles/styles.css"

const StyledTablePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1 class="text-center">Styled Table</h1>
            <p class="p-4 text-center">(Using tailwind css)</p>
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