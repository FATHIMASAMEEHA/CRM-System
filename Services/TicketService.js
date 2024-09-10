const BASE_BE_URL='http://localhost:5241/api'
export const TicketServices ={


  getAll: async () => {

    const response = await fetch(`${BASE_BE_URL}/Tickets`);
    const data = await response.json();
    return data;
  },

  delete: async (ticketId) => {
    const response = await fetch(`${BASE_BE_URL}/Tickets/${ticketId}`, {
      method: 'DELETE',
    });
    return response;
  },
  createTicket: async (ticketData) => {
    const formData = new FormData();
  

    //attachments should be as binary format
    formData.append('TicketName', ticketData.ticketName);
    formData.append('Email', ticketData.email);
    formData.append('ContactNo', ticketData.contactNo);
    formData.append('Description', ticketData.description);
    formData.append('Tracker', ticketData.tracker);
    formData.append('TicketDate', ticketData.ticketDate);
    formData.append('HelpdeskContact', ticketData.helpdeskContact);

    // Append each attachment to the formData object
    ticketData.attachments.forEach((file) => {
      if(file instanceof File){
        formData.append('Attachments', file, file.name);
      }
      else {
        formData.append('Attachments', file);
      }
    });
  
    const response = await fetch(`${BASE_BE_URL}/Tickets`, {
      method: 'POST',
      body: formData,
    });
  
    return response;
  },

  getById: async (ticketId) => {
    const response = await fetch(`${BASE_BE_URL}/Tickets/${ticketId}`);
    const data = await response.json();
    return data;
  },

  updateTicket: async (ticketId, ticketData) => {
    const formData = new FormData();


    // Append each field of ticketData to the formData object
    formData.append('TicketName', ticketData.ticketName);
    formData.append('Email', ticketData.email);
    formData.append('ContactNo', ticketData.contactNo);
    formData.append('Description', ticketData.description);
    formData.append('Tracker', ticketData.tracker);
    formData.append('TicketDate', ticketData.ticketDate);
    formData.append('HelpdeskContact', ticketData.helpdeskContact)


    // Append each attachment to the formData object
    ticketData.attachments.forEach((file) => {
      if(file instanceof File){
        formData.append('Attachments', file, file.name);
      }
      else {
        formData.append('Attachments', file);
      }
    });

    const response = await fetch(`${BASE_BE_URL}/Tickets/${ticketId}`, {
      method: 'PUT',
      body: formData,
    });

    return response;
  }
  
}
