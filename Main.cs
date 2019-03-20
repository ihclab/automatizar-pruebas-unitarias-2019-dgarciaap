using System;
using System.IO;
using System.Collections;
class Test
{
    public static void Main()
    {
        try
        {
            // Create an instance of StreamReader to read from a file.
            // The using statement also closes the StreamReader.
            using (StreamReader sr = new StreamReader("CasosPrueba.txt"))
            {
                string line;
                int lineas = 0;
                string[][] texto = new string[20][];
                //ArrayList valores = new ArrayList();
                //string[] valores = {};
                // Read and display lines from the file until the end of
                // the file is reached.
                while ((line = sr.ReadLine()) != null)
                {
                    string[] campos = line.Split(':');
                    texto[lineas] = campos;
                    lineas++;
                    //Console.WriteLine(line); 
                    /*Si uso ArrayList */
                    //valores.Add(line.Split(':'));
                    //Console.WriteLine(valores.Count); 
                    //valores.ToArray();
                }

                /* for(int i = 0; i < texto.Length; i++) {
                    for(int y = 0; y < texto[i].Length; y++) {
                       Console.WriteLine(texto[i][y]);
                    }
                }*/

                for(int i = 0; i < texto.Length; i++) {
                    /*INTS KILL ME ALREADY */
                    string parametros = texto[i][2];
                    if(parametros == "NULL") {

                    }
                    else {
                        string[] parametro = parametros.Split(' ');
                        for(int x = 0; x < parametro.Length; x++) {
                            int valor = Int32.Parse(parametro[x]);
                            Console.WriteLine(valor);
                        }
                    }

                    /*DOUBLES */
                    if(texto[i][3] == "Exception") {

                    } 
                    else {
                        double result = Double.Parse(texto[i][3]);
                        Console.WriteLine(result);
                    }
                    
                }
            }
        }
        catch (Exception e)
        {
            // Let the user know what went wrong.
            Console.WriteLine("The file could not be read:");
            Console.WriteLine(e.Message);
        }
    }
}
