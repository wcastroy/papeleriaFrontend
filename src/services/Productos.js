import http from "../http-common";
//import axios from "axios";

class Productos {
  getAll() {
    return http.get("/productos");
  }

  get(id) {
    return http.get(`/productos/${id}`);
  }

  create(data) {
    return http.post("/productos", data);
  }

  update(id, data) {
    return http.put(`/productos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/productos/${id}`);
  }
}

export default new Productos();