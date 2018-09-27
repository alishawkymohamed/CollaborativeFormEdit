using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace CollaborativeFormEdit.Hubs
{
    public class FormEditHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }

        public Task UserFocused(string Username, string InputId)
        {
            return Clients.Others.SendAsync("UserFocusedInput", new { Username = Username, InputId = InputId });
        }

        public Task UserBlured(string InputId)
        {
            return Clients.Others.SendAsync("UserBluredInput", new { InputId = InputId });
        }

        public Task UserTyping(string InputId, string Text)
        {
            return Clients.Others.SendAsync("UserTypingInInput", new { InputId = InputId, Text = Text });
        }
    }
}
