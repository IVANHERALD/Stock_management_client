export const addadmin = async (adminDetails) => {
    const response = await fetch('/stock/addadmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminDetails)
    });
    return response;
}
