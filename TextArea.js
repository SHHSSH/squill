jsio('from util.browser import $');
jsio('import .Widget, .global');

var TextArea = exports = Class(Widget, function(supr) {

	this.buildWidget = function() {

		var el = this._el,
			label = this._params.label || '',
			value = this._params.value || '';

		this._label = $.create({
			tag: 'label',
			text: label,
			parent: el,
			className: global.getWidgetPrefix() + 'textAreaLabel'
		});

		this._textarea = $.create({
			tag: 'textarea',
			attrs:{name:this._params.name},
			value: value,
			parent: this._label
		});
	}
});

Widget.register(TextArea, 'TextArea');