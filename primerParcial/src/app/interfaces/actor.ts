export interface Actor {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
  fecha_nacimiento: string;
  nacionalidad: string;
  foto?: string;
  borrado?: number;
}
