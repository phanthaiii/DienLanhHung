using System;
using System.Collections.Generic;
using System.Text;

namespace Electronic.Core.Utils
{
    public static class Utils
    {
        public static double ToTimeSpan(this DateTime input)
        {
            return input.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }
    }
}
