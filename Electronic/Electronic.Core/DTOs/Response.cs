using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.DTOs
{
    public class Response
    {
        public Response() { }
        public Response(int status, object data = null, string message = "")
        {
            Status = status;
            Message = message;
            Data = data;
        }
        public int Status { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}
