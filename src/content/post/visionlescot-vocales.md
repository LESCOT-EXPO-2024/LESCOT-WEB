---
publishDate: 2023-10-28T00:00:00Z
author: Alejandro Guzmán Mata
title: VisionLESCOT Vocales
excerpt: En este artículo podrás encontrar información de la version del traductor LESCO presentada en EXPOTEC 2023, asi como la programación usada en python 3.8.
image: https://scontent.fsyq2-1.fna.fbcdn.net/v/t39.30808-6/279071152_2142894659213984_499499716181786735_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WNcDRTAwgUQAX_JzCtj&_nc_ht=scontent.fsyq2-1.fna&oh=00_AfAnMLFZBEE0Y6ei7lxR6KvCLHgvjA6LGUzaySh5h4mLzA&oe=660B7C8B
category: LESCO
tags:
  - LESCO
  - VISION
  - Programación Python
  - Vocales
metadata:
  canonical: https://lescot-web.vercel.app/visionlescot-vocales
---

### PRODECIMIENTO

El programa ‘data’, consta de dos procesos, el primero, se realiza la detección precisa de las manos, con esto también un proceso automatizado de captura y almacenamiento de imágenes en una carpeta, las cuales son las señas que vamos a utilizar para la segmentación. Con las imágenes se pasa a un proceso llamado segmentación de instancias, donde se crean bases de datos con patrones de las imágenes capturadas, debido a que esto será parte de lo que la computadora va a aprender en el proceso de Machine Learning (ya antes explicado) con YOLOV8. El Machine Learning culmina con la creación de un modelo con toda la información adquirida durante el proceso de entrenamiento y se logra pasar al segundo programa llamado‘inferencia'.
Este programa se encarga de dos tareas esenciales, en primer lugar, realiza una detección precisa de manos en un video y lectura del modelo, esta detección es de suma importancia para identificar las coordenadas y forma de la mano. Una vez el programa es ejecutado y la información de la mano es extraída, se realizan diferentes comparaciones con la información obtenida en el modelo para realizar un sistema de predicciones. Cuando se encuentra una coincidencia entre la información de la mano y el modelo, se resalta un contorno de color con la forma de la mano detectada haciendo representación a alguna de las vocales dentro del modelo.

### USO DEL PROGRAMA

Una vez el programa es ejecutado, se debe de poner una
única mano en la cámara, con esto se iniciará el proceso antes
dicho de predicciones y se comenzará a mostrar en pantalla la
vocal que se está realizando.

### GESTIÓN DE ERRORES

Se debe recordar que el programa de LESCOT se encuentra
en una versión de pruebas y errores, donde se pueden encontrar
los siguientes:

1. Al colocar la mano en pantalla se deberá esperar algunos
   segundos a que el programa realice la primera predicción.
2. Si se colocan dos manos en pantalla, el programa puede
   llegar a confundirse y no saber cuál de las dos manos deberá
   detectar, esto podría causar un cierre del programa.
3. Recordar que es un sistema de predicciones y podrán existir
   excepciones donde la confianza de detección de la vocal no
   sea la esperada.
4. Si el programa realiza el sistema de predicciones y no
   encuentra ningún coincidente y la mano sigue en pantalla, se
   puede llegar a causar un cierre del programa.

#### YOLOV8n args

| TASK    | MODE  | EPOCHS | MODEL           | IMGSZ | BATCH |
| ------- | ----- | ------ | --------------- | ----- | ----- |
| SEGMENT | TRAIN | 40     | YOLOV8N-SEGMENT | 640   | 2     |

#### COLORES LABELS VOCALES

| A        | E     | I    | O      | U       |
| -------- | ----- | ---- | ------ | ------- |
| AMARILLO | VERDE | ROJO | ROSADO | NARANJA |

###### _CAPTURA DE IMAGENES_

```python
while True:
    #Lectura captura
    ret, frame = cap.read()
    #extraer la info de la mano
    frame = detector.encontrarmanos(frame, dibujar=False)
    #Solo una mano
    lista1, bbox, mano = detector.encontrarposicion(frame, ManoNum=0, dibujarPuntos=False, dibujarBox=False, color=[0,255,0])
    if mano == 1:
        xmin, ymin, xmax, ymax =  bbox
        xmin = xmin - 40
        ymin = ymin - 40
        xmax = xmax + 40
        ymax = ymax + 40
        #recorte para ver la imagen a guardar
        recorte = frame[ymin:ymax, xmin:xmax]

        #Redimensionar
        #recorte = cv2.resize(recorte, (640, 640), interpolation=cv2.INTER_CUBIC)

        #almacenar imagenes
        cv2.imwrite(carpeta + "/hola_{}.jpg".format(cont), recorte)
        #aumentar contador
        cont = cont + 1
        #mostrar recorte
        cv2.imshow("RECORTE", recorte)

    #mostrar fps
    cv2.imshow("LENGUAGE VOCALES", frame)
    #Leer teclado
    t = cv2.waitKey(1)
    if t == 27 or cont == 100:
        break
cap.release()
cv2.destroyAllWindows()
```

###### _DETECCIÓN DE SEÑAS_

```python
def detectormanos():
    # Detector
    detector = SeguimientoManos.detectormanos(Confdeteccion=0.90)

    while True:
        # Leer modelo
        model = YOLO('VOCALESVn2.pt')
        # Lectura captura
        ret, frame = cap.read()
        # extraer la info de la mano
        frame = detector.encontrarmanos(frame, dibujar=False)
        # Solo una mano
        lista1, bbox, mano = detector.encontrarposicion(frame, ManoNum=0, dibujarPuntos=False, dibujarBox=False,
                                                        color=[0, 255, 0])
        if mano == 1:
            xmin, ymin, xmax, ymax = bbox
            xmin = xmin - 40
            ymin = ymin - 40
            xmax = xmax + 40
            ymax = ymax + 40
            # recorte de la seña
            recorte = frame[ymin:ymax, xmin:xmax]

            # RESULTADOS
            resultados = model.predict(recorte, conf=0.50)

            if len(resultados) != 0:
                for results in resultados:
                    masks = results.masks
                    coordenadas = masks
                    anotaciones = resultados[0].plot()

            # mostrar recorte
            cv2.imshow("SENA", anotaciones)

        # mostrar fps
        cv2.imshow("LENGUAGE VOCALES", frame)
        # Leer teclado
        t = cv2.waitKey(1)
        if t == 27:
            break

    cap.release()
    cv2.destroyAllWindows()
```
