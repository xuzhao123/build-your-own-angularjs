import { setupModuleLoader } from './Loader';
import { $FilterProvider } from './Filter';
import { $ParseProvider } from './Parse';
import { $RootScopeProvider } from './Scope';
import { $QProvider, $$QProvider } from './Q';
import { $CompileProvider } from './Compile';
import { $ControllerProvider } from './Controller';

function publishExternalAPI() {
    setupModuleLoader(window);

    var ngModule = angular.module('ng', []);
    ngModule.provider('$filter', $FilterProvider);
    ngModule.provider('$parse', $ParseProvider);
    ngModule.provider('$rootScope', $RootScopeProvider);
    ngModule.provider('$q', $QProvider);
    ngModule.provider('$$q', $$QProvider);
    ngModule.provider('$compile', $CompileProvider);
    ngModule.provider('$controller', $ControllerProvider);
}

export { publishExternalAPI };