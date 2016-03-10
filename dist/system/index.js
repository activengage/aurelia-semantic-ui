System.register(['semantic', 'semantic/semantic.css!'], function (_export) {
	'use strict';

	var VERSION;

	_export('configure', configure);

	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-menu', './collections/ui-message', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-search', './views/ui-card');
	}

	return {
		setters: [function (_semantic) {}, function (_semanticSemanticCss) {}],
		execute: function () {
			VERSION = '0.0.1.dev';

			_export('VERSION', VERSION);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztLQVlXLE9BQU87Ozs7QUFHWCxVQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDakMsUUFBTSxDQUFDLGVBQWUsQ0FDckIsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGlCQUFpQixDQUNqQixDQUFDO0VBQ0Y7Ozs7O0FBN0JVLFVBQU8sR0FBRyxXQUFXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXJlbGlhLVNlbWFudGljLVVJIC0tIEF1cmVsaWEgY29tcG9uZW50cyBmb3IgU2VtYW50aWMtVUlcbiAqICRJZCRcbiAqXG4gKiBBdXRob3JzXG4gKiAtIE1pY2hhZWwgR3JhbmdlciA8Z2VkQEZhZXJpZU1VRC5vcmc+XG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYyc7XG5pbXBvcnQgJ3NlbWFudGljL3NlbWFudGljLmNzcyEnO1xuXG5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcwLjAuMS5kZXYnO1xuXG4vLyBBdXJlbGlhIHBsdWdpbiBob29rXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuXHRjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWInLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWZvcm0nLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lbnUnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lc3NhZ2UnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWJ1dHRvbicsXG5cdFx0Jy4vZWxlbWVudHMvdWktY29udGFpbmVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1kaXZpZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1mbGFnJyxcblx0XHQnLi9lbGVtZW50cy91aS1oZWFkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWljb24nLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWltYWdlJyxcblx0XHQnLi9lbGVtZW50cy91aS1pbnB1dCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbGFiZWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxpc3QnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxvYWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmFpbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmV2ZWFsJyxcblx0XHQnLi9lbGVtZW50cy91aS1zZWdtZW50Jyxcblx0XHQnLi9lbGVtZW50cy91aS1zdGVwJyxcblx0XHQnLi9tb2R1bGVzL3VpLWRyb3Bkb3duJyxcblx0XHQnLi9tb2R1bGVzL3VpLW1vZGFsJyxcblx0XHQnLi9tb2R1bGVzL3VpLXNlYXJjaCcsXG5cdFx0Jy4vdmlld3MvdWktY2FyZCdcblx0KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
