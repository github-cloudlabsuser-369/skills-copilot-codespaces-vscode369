using System;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        int result = 0;
        foreach (int num in arr)
        {
            result += num;
        }
        return result;
    }

    static int ReadInteger(string prompt)
    {
        Console.Write(prompt);
        if (!int.TryParse(Console.ReadLine(), out int result))
        {
            Console.WriteLine("Invalid input. Please enter a valid integer.");
            Environment.Exit(1);
        }
            ValidateInput( result);

        return result;
    }

       static int[] ReadIntegers(int n)
        {
            int[] arr = new int[n];
            Console.WriteLine($"Enter {n} integers:");
            for (int i = 0; i < n; i++)
            {
                arr[i] = ReadInteger($"Enter integer {i+1}: ");
            }
            return arr;
        }

    static void Main()
    {
        int n = ReadInteger("Enter the number of elements (1-100): ");
        int[] arr = ReadIntegers(n);
        int total = Sum(arr);
        Console.WriteLine($"Sum of the numbers: {total}");
    }
}

static void ValidateInput(int n)
{
       if (n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }
}