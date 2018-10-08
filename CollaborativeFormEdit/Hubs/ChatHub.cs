using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace CollaborativeFormEdit.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }

        public Task MessageSent(MessageDTO MessageDTO)
        {
            return Clients.All.SendAsync("MessageRecieved", new MessageDTO { Username = MessageDTO.Username, Message = MessageDTO.Message });
        }
    }

    public class MessageDTO
    {
        public string Username { get; set; }
        public string Message { get; set; }
    }
}
