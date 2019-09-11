using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Sample1
    {
        
    }

    class Program
    {
        static void F()
        {
            i = 1;
            Console.Write(i);
        }
        static int i = 0;

        static void Main(string[] args)
        {
            F();
            Console.ReadKey();
        }

        private static string Str(string str)
        {
            int point = str.Length / 2;
            return (str.Substring(0, point)).Replace(" ", string.Empty);
        }

    }
}
