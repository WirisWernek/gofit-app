import api from "./api";

export async function getAll() {
  return api.get("/equipamento");
}

export async function getById(id) {
  return api.get(`/equipamento/${id}`);
}
