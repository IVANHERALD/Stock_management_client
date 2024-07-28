export const addadmin = async (adminDetails) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/addadmin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminDetails)
    });
    return response;
}
