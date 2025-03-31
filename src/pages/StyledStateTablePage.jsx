import { useNavigate } from "react-router";
import MockTableData from "../mock/MockTableData";
import "../styles/styles.css"
import MercuryTableStateStyled from "../components/MercuryTableStateStyled";

const StyledStateTablePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1 class="text-center">Styled Table</h1>
            <p class="p-4 text-center">(Using state for date visiblity)</p>
            <MercuryTableStateStyled data={MockTableData} />
            <div className="card">
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </>
    );
}

export default StyledStateTablePage;