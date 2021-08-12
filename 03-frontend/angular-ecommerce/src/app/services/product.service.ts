import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8070/api/products';
  // by default spring shows only 20 first items, by adding `?size=100` at the end we will see 100 of them
  private categoryUrl = 'http://localhost:8070/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  // I'm calling REST API and returning Observable which is mapping the JSON data from Spring Data Rest to ProductCategory array*
  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductsCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

}

interface GetResponseProducts {     // switch from GetResponse for more qunique name of the interface
  _embedded: {
    products: Product[];
  }
}


// *unwraps the JSON from Spring Data REST _embedded entry
interface GetResponseProductsCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}