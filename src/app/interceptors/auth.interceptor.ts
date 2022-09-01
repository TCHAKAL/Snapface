import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
// Les intercepteurs sont enregistrés différemment des services, donc n'ajoutez surtout pas  { providedIn: 'root' }  au décorateur !
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + this.auth.getToken());
    const modifiedRequest = req.clone({headers: headers});
    return next.handle(modifiedRequest);
  }

}
