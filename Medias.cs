using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace AutomatizarPruebasUnitarias { 
     class Medias {

        /**
         * Calcula y regresa la media artimética
         */
         public static double mediaAritmetica(int[] vals) {
          int suma = 0;
          int resultado = 0;
          for(int i = 0; i <= vals.Length; i++) {
            suma += vals[i];
          }
          return resultado = suma/vals.Length;
        }

        /**
         * Calcula y regresa la raíz enésima = x^(1/n)
         */
        private static double raizEnesima(double x, int n) {
          return Math.Pow(x, (1 / n));
        }

        /**
         *  Usa raizEnesima para calcular y regresar la media geométrica
         */
         public double mediaGeometrica(int[] vals) {
          int suma = 0;
          for(int i=0; i < vals.Length; i++) {
            suma += 1/vals[i];
          }
          return vals.Length/suma;
        }

        /**
         * Este método no está implementado
         */
         public static double mediaArmonica(params int[] vals) {return 0; }
     }
  }



