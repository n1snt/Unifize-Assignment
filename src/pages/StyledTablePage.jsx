import { useNavigate } from "react-router";

const StyledTablePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Styled Table</h1>
            <p>(Write here)</p>
            <div className="card">
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </>
    );
}

export default StyledTablePage;