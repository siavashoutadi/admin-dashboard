import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment.prod';

export function keycloakInitializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                await keycloak.init({
                    config: environment.keycloak,
                    initOptions: {
                        onLoad: 'login-required',
                        checkLoginIframe: false
                    },
                    bearerExcludedUrls: []
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
}