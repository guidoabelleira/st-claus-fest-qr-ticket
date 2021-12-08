# Pseudo-Documentación: Plataforma de pagos p/ St-Claus

## Back-end
### Endpoints

#### Tickets
- [ ] __GET /tickets__: TODOS los tickets vendidos al momento. Utiliza el controlador ```getAllTickets()```
- [ ] __GET /tickets/:id__: Un ticket en particular. Clave para el sistema lector. Utiliza el controlador ```getOneTicket()```
- [ ] __POST /tickets__: Crea el ticket perteneciente a la entrada comprada. Tiene automatizada la creación de QR y el envío de mails. Utiliza el controlador ```createTicket()```

#### Mercadopago
- [ ] __POST /mercadopago__: Redirige a la plataforma de pago y dependiendo del resultado post operación, te retorna a las back_urls (success, failure o pending).

#### Otros controladores
- [ ]  ```confirmationMail()``` (del archivo nodemailer.js). Utiliza name, lastname y mail del formulario que impacta en el POST ticket. Se ejecuta luego de crear el ticket.
- [ ]  ```runQR()``` (del archivo qr.js). Utiliza los datos del POST ticket, una URL BASE y el id del ticket (puede variar sin URL). Genera un htmlContent con el QR, un botón de descarga y el mensaje, además de un cuerpo de html con scripts instalados para usar luego. Allí deberíamos crear todo el html que resulte como mail de confirmación / entrada. Se ejecuta luego de confirmationMail y crea un archivo entrada.html en api.
- [ ]  ```generatePDF()``` (del archivo scripts.js). Se utiliza cuando tocamos en el botón de descarga de entrada.html y descarga dicho html en formato PDF.


### Flujo de información

Hasta el momento con lo desarrollado en el back, el circuito sigue los siguientes pasos:

- [ ]  ```1. CREAR TICKET```
  - [ ]  ```1.1 Form```  : Recibe por body los datos necesarios (name, lastname, dni, mail, ticketType, telephone y price) e impacta en POST tickets.
  - [ ]  ```1.2 Mail```  : Con los datos del ticket creado, envía el mail de confirmación (falta agregarle el PDF).
  - [ ]  ```1.3 QR```    : Crea entrada.html que tiene el QR con la URL BASE/el id del ticket para que se pueda leer desde el sistema propio y el resto del html para la entrada.
  - [ ]  ```1.4 PDF```   : Existe el botón de descarga PDF puesto en el html de entrada. Habría que modificar eso desde React o como convenga. Funciona, ejecuta bien y pone nombre correspondiente al archivo .pdf.
 
 Toda esta serie de pasos se debería llevar a cabo en el último paso del checkout, luego de ser redirigido al url de success.
 
 ## GRACIAS POR CONFIAR EN NOSOTROS. NO SE OLVIDEN DE CONFIAR SIEMPRE EN ESTE DÚO Y NUNCA EN LOS COLOMBIANOS. SALUDOS CORDIALES.
