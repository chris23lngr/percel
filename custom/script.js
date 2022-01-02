const template = document.createElement('template');
template.innerHTML = `<style>@import './style.css';</style>`;

class Entity extends HTMLElement {

    connectedCallback() {

        var observer = new MutationObserver(function(mutations) {

            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length)
                console.info('Node added: ', mutation.addedNodes[0]);
            });
        });

        observer.observe(this, { childList: true });
    }

    constructor() {

        super();

        var shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));

        var wrapper = document.createElement('div');
        $(wrapper).addClass("entity-wrapper");

        var p = document.createElement('p');

        $(p).text('Hello World!');

        shadow.appendChild(wrapper);
        wrapper.appendChild(p);

    }

}


class EntityField extends HTMLElement {

    constructor() {

        super();

        var shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));

        /*
        var wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'entity-wrapper');

        var p = document.createElement('p');

        $(p).text('Hello World!');

        shadow.appendChild(wrapper);
        wrapper.appendChild(p);

        $(wrapper).addClass("entity-wrapper");
        */

        var box = document.createElement('div');
        $(box).addClass('field-box');

        shadow.appendChild(box);

        // Field Title
        var titleAttr = $(this).attr('title');

        if (typeof titleAttr !== 'undefined' && titleAttr !== false) {
            
            var title = document.createElement('p');
            $(title).text(titleAttr);
            $(title).addClass('field-title');

            box.appendChild(title);

        }

        // Field Description
        var descAttr = $(this).attr('desc');

        if (typeof descAttr !== 'undefined' && descAttr !== false) {
            
            var desc = document.createElement('p');
            $(desc).text(descAttr);
            $(desc).addClass('field-desc');

            box.appendChild(desc);

        }

    }

}


window.customElements.define('percel-entity', Entity);
window.customElements.define('entity-field', EntityField);