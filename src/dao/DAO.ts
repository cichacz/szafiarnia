import Container from "@/models/Container";
import Item from "@/models/Item";

export default interface DAO {
  getUser(): any;
  register(email: string, password: string): any;
  login(email: string, password: string): any;
  logout(): any;

  saveContainer(container: Container): any;
  getContainers(): any;
  getContainerById(id: string): any;

  saveItem(item: Item): any;
  getContainerItems(container: Container): any;
}