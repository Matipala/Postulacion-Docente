# Postulacion Docente
El siguiente proyecto busca facilitar el proceso de postulacion docente de las universidades interesadas
## Requistos

### BackEnd
* Añadir los siguientes paquetes para la base de datos
  ```
  dotnet add package Microsoft.EntityFrameworkCore --version 7.0
  dotnet dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 7.0
  dotnet dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0
  dotnet dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0
  ```
* Añadir los siguientes paquetes para la creacion de PDFs
  ```
  dotnet add package QuestPDF --version 2023.10.1
  ```
* Importante
  Verificar la parte de la conexion de la base de datos en *settings.json*
  ```
  "ConnectionStrings": {
    "Default": "Data Source={Aqui tiene que ir tu conexion}"
  }
  ```
### FrontEnd
* Añadir los siguientes paquetes para el guardado de PDFs desde la carpeta **/Postulacion_Docente/ClientApp**
  ```
  npm install file-saver --save
  npm install @types/file-saver --save-dev
  ```

