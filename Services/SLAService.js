const BASE_BE_URL='http://localhost:5241/api'

export const SLAServices ={
    getAll: async () => {
        const response = await fetch(`${BASE_BE_URL}/SLA`);
        const data = await response.json();
        return data;
    },
    delete: async (slaId) => {
        const response = await fetch(`${BASE_BE_URL}/SLA/${slaId}`, {
        method: 'DELETE',
        });
        return response;
    },
    createSLA: async (slaData) => {
        
    
        const response = await fetch(`${BASE_BE_URL}/SLA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...slaData,
            Number: slaData.ticketReferenceId.toString(),
          }),
        
        });
    
        return response;
    },
    getById: async (slaId) => {
        const response = await fetch(`${BASE_BE_URL}/SLA/${slaId}`);
        const data = await response.json();
        return data;
    },
    updateSLA: async (slaId, slaData) => {
        const formData = new FormData();
    
        // Append each field of slaData to the formData object
        Object.keys(slaData).forEach((key) => {
        formData.append(key, slaData[key]);
        });
    
        const response = await fetch(`${BASE_BE_URL}/SLA/${slaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            ...slaData,
            Number: slaData.ticketReferenceId.toString(),
          }),
        });
    
        return response;
    }
}
