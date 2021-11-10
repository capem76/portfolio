export interface ICertificado {
    titulo: string;
    lugar: string;
    descripcion: string;
    duracion: string;
    fechaTermino?: Date|string;
    urlCopia?: string;
    urlImagen?: string;
    imagenSmall: string;
}
