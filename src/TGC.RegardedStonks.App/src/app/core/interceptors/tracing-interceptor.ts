import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { ErrorDialog, ErrorDialogData } from '../../shared/components/error-dialog/error-dialog';
import { RUNTIME_CONFIG } from '../models/runtime-config.model';

const SESSION_ID_KEY = 'tgc-regarded-stonks:sessionId';

function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

/**
 * Tags every request to the backend with a TraceId (per-request) and SessionId
 * (per-tab, until the tab/browser closes), then surfaces any non-2xx response
 * in a dialog with both IDs so issues are easy to report/track.
 */
export const tracingInterceptor: HttpInterceptorFn = (req, next) => {
  const runtimeConfig = inject(RUNTIME_CONFIG);

  if (!req.url.startsWith(runtimeConfig.apiBaseUrl)) {
    return next(req);
  }

  const dialog = inject(MatDialog);
  const traceId = crypto.randomUUID();
  const sessionId = getOrCreateSessionId();

  const tracedReq = req.clone({ setHeaders: { TraceId: traceId, SessionId: sessionId } });

  return next(tracedReq).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        dialog.open<ErrorDialog, ErrorDialogData>(ErrorDialog, {
          data: {
            traceId,
            sessionId,
            message: error.error?.detail ?? error.message
          }
        });
      }
      return throwError(() => error);
    })
  );
};
