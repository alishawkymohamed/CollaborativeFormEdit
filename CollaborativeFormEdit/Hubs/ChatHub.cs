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

        public Task MessageSent(string Username, string Message)
        {
            return Clients.All.SendAsync("MessageRecieved", new { name = Username, message = Message });
        }
    }
}
